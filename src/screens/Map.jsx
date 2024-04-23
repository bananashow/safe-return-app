import { ScrollView, StyleSheet, Text } from 'react-native';
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
  const [localData, setLocalData] = useState();

  const searchMutation = useMutation({
    mutationFn: () =>
      axios.get(`${SAFE_URL}?esntlId=${SAFE_ID}&authKey=${SAFE_KEY}&rowSize=100`, {
        params: {
          occrAdres: city,
        },
      }),
    onError: (error) => console.error(error),
    onSuccess: (data) => setLocalData(data.data.list),
  });

  const getLocalData = async () => {
    let { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) setOk(false);

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    setMyGeocode({ latitude, longitude });
    // 현재 위치를 주소로 변경
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setCity(location[0].city);

    // 내 주소를 가져와서 실종자 데이터 가져옴
    searchMutation.mutate();

    // 다시 실종자 데이터를 반복문 돌려서 주소를 geocode로 변경 후 map에 마커처리 해야함
  };

  useEffect(() => {
    getLocalData();
  }, []);

  //   const geocode = async () => {
  //     const test = await Location.geocodeAsync('부산광역시 부산진구');
  //     console.log(test);
  //   };

  //   geocode();

  console.log(localData);

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
