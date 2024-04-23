import { ScrollView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { SAFE_URL, SAFE_ID, SAFE_KEY } from '@env';
import { useMutation } from 'react-query';
import axios from 'axios';

export const Map = () => {
  const [ok, setOk] = useState(true);
  const [myGeocode, setMyGeocode] = useState();
  const [city, setCity] = useState('');
  const [localData, setLocalData] = useState([]);

  const searchMutation = useMutation({
    mutationFn: () =>
      axios.get(`${SAFE_URL}?esntlId=${SAFE_ID}&authKey=${SAFE_KEY}&rowSize=100`, {
        params: {
          occrAdres: city,
        },
      }),
    onError: (error) => console.error(error),
    onSuccess: async (data) => {
      try {
        const addressList = data.data.list.map((info) => geocode(info.occrAdres));
        const resolvedAddresses = await Promise.all(addressList);
        const filteredAddresses = resolvedAddresses.filter((address) => address !== undefined);
        setLocalData(filteredAddresses);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const getLocalData = async () => {
    let { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) setOk(false);

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    setMyGeocode({ latitude, longitude });

    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setCity(location[0].city);

    searchMutation.mutate();
  };

  useEffect(() => {
    getLocalData();
  }, []);

  const geocode = async (address) => {
    try {
      const code = await Location.geocodeAsync(address);
      return code[0];
    } catch (error) {
      console.error(`geocoding address Error ${address}:`, error);
      return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {myGeocode && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: myGeocode.latitude,
            longitude: myGeocode.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: myGeocode.latitude, longitude: myGeocode.longitude }} title="내 위치" />
          {localData.map((data, idx) => {
            return (
              <Marker
                key={idx}
                coordinate={{ latitude: data.latitude, longitude: data.longitude }}
                title="실종자 위치"
              />
            );
          })}
        </MapView>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: '100%',
    height: '100%',
  },
});
