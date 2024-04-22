import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardCover } from './CardCover';
import { Button } from 'react-native-paper';
import { colors } from '../../styles/theme';

export const CardList = ({ personList, cardStyle, navigation, loadMore, hasNextPage }) => {
  return (
    <ScrollView contentContainerStyle={styles.cards} bounces={false} showsVerticalScrollIndicator={false}>
      {personList?.map((person, idx) => {
        return <CardCover cardStyle={cardStyle} personInfo={person} key={idx} navigation={navigation} />;
      })}
      {hasNextPage && (
        <Button style={styles.moreBtn} icon="post" mode="contained" buttonColor={colors.navy} onPress={loadMore}>
          더 보기
        </Button>
      )}
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
