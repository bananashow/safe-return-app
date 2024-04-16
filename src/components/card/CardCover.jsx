import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export const CardCover = ({ cardWitdth }) => {
  return (
    <Card style={{ ...styles.card, width: cardWitdth }}>
      <Card.Cover source={{ uri: 'https://picsum.photos/900' }} />
      <Text style={{ ...styles.text, marginTop: 6 }}>이름 : 이선범</Text>
      <Text style={styles.text}>성별 : 남자</Text>
      <Text style={styles.text}>당시 나이 : 86세</Text>
      <Text style={styles.text}>현재 나이 : 86세</Text>
      <Text style={styles.text}>발생 일시 : 2024년 4월 16일</Text>
      <Text style={{ ...styles.text, marginBottom: 6 }}>발생 장소 : 서울 마포구 서강대길</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
  },

  text: {
    fontSize: 11,
    fontWeight: 500,
    marginVertical: 1,
    marginHorizontal: 8,
  },
});
