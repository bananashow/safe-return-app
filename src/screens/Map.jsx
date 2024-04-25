import { Image, ScrollView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { SAFE_URL, SAFE_ID, SAFE_KEY } from '@env';
import { useMutation } from 'react-query';
import axios from 'axios';
import noImage from '../assets/no-image.jpg';
import { colors } from '../styles/theme';

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
        const infoListPromises = data.data.list.map(async (info) => ({
          geocode: await geocode(info.occrAdres),
          name: info.nm,
          image: info.tknphotoFile,
        }));

        const infoList = await Promise.all(infoListPromises);
        const filteredAddresses = infoList.filter((item) => item.geocode !== undefined && item.geocode !== null);
        setLocalData(filteredAddresses);
      } catch (error) {
        console.error('localData error:', error);
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
          {localData &&
            localData.map((data, idx) => {
              if (data.geocode) {
                return (
                  <Marker
                    key={idx}
                    coordinate={{
                      latitude: data.geocode.latitude,
                      longitude: data.geocode.longitude,
                    }}
                    title={data.name}
                  >
                    <Image
                      source={data.image ? { url: `data:image/jpeg;base64,${data.image}` } : noImage}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: colors.lightGray,
                      }}
                    />
                  </Marker>
                );
              }
              return null;
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
