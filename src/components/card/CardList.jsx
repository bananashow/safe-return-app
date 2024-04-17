import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardCover } from './CardCover';
import { Button } from 'react-native-paper';
import { colors } from '../../styles/theme';

export const CardList = ({ personList, cardWitdth }) => {
  return (
    <ScrollView contentContainerStyle={styles.cards} bounces={false} pagingEnabled showsVerticalScrollIndicator={false}>
      {personList?.map((person) => {
        return <CardCover cardWitdth={cardWitdth} personInfo={person} key={person.rnum} />;
      })}
      <Button
        style={styles.moreBtn}
        icon="post"
        mode="contained"
        buttonColor={colors.navy}
        onPress={() => console.log('지도로 보기')}
      >
        더 보기
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cards: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  moreBtn: {
    width: '100%',
    marginBottom: 12,
  },
});
