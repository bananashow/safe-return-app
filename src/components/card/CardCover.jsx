import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { formatColor, formatTarget } from '../../format/formatPerson';

export const CardCover = ({ cardWitdth, personInfo }) => {
  console.log(personInfo?.writngTrgetDscd);
  return (
    <Card style={{ ...styles.card, width: cardWitdth }}>
      <Card.Cover source={{ uri: `data:image/jpeg;base64,${personInfo?.tknphotoFile}` }} />
      <View style={{ ...styles.badge, backgroundColor: formatColor(personInfo?.writngTrgetDscd) }}>
        <Text style={styles.badgeText}>{formatTarget(personInfo?.writngTrgetDscd)}</Text>
      </View>
      <Text style={{ ...styles.text, marginTop: 6 }}>이름 : {personInfo?.nm}</Text>
      <Text style={styles.text}>성별 : {personInfo?.sexdstnDscd}</Text>
      <Text style={styles.text}>당시 나이 : {personInfo?.age}세</Text>
      <Text style={styles.text}>현재 나이 : {personInfo?.ageNow}세</Text>
      <Text style={styles.text}>발생 일시 : {personInfo?.occrde}</Text>
      <Text style={{ ...styles.text, marginBottom: 6 }}>발생 장소 : {personInfo?.occrAdres}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    height: 'inherit',
  },

  text: {
    fontSize: 11,
    fontWeight: 500,
    marginVertical: 1,
    marginHorizontal: 8,
  },

  badge: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 6,
    top: 0,
    left: 0,
    opacity: 0.8,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: 700,
  },
});
