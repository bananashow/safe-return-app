import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { formatDetailTarget } from '../format/formatPerson';
import noImage from '../assets/no-image.jpg';

export const PersonProfile = ({ route }) => {
  const { personInfo } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={personInfo?.tknphotoFile ? { url: `data:image/jpeg;base64,${personInfo?.tknphotoFile}` } : noImage}
      />
      <View>
        <Text style={styles.text}>이름 : {personInfo?.nm}</Text>
        <Text style={styles.text}>대상 : {formatDetailTarget(personInfo?.writngTrgetDscd)}</Text>
        <Text style={styles.text}>성별 : {personInfo?.sexdstnDscd}</Text>
        <Text style={styles.text}>당시 나이 : {personInfo?.age}세</Text>
        <Text style={styles.text}>현재 나이 : {personInfo?.ageNow}세</Text>
        <Text style={styles.text}>발생 일시 : {personInfo?.occrde}</Text>
        <Text style={{ ...styles.text }}>발생 장소 : {personInfo?.occrAdres}</Text>
        {personInfo?.alldressingDscd && (
          <Text style={{ ...styles.text }}>의상착의 : {personInfo?.alldressingDscd}</Text>
        )}
        <Text style={{ ...styles.text }}>특징 : {personInfo?.etcSpfeatr}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 12 },

  text: {
    fontSize: 18,
    fontWeight: 500,
    marginVertical: 4,
    marginHorizontal: 8,
  },

  image: {
    width: '100%',
    height: '100%',
    marginVertical: 12,
  },
});
