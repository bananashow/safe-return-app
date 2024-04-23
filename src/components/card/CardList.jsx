import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardCover } from './CardCover';
import { Button } from 'react-native-paper';
import { colors } from '../../styles/theme';

export const CardList = ({ personList, cardStyle, navigation, loadMore, hasNextPage }) => {
  return (
    <ScrollView contentContainerStyle={styles.cards} bounces={false} showsVerticalScrollIndicator={false}>
      {personList?.length > 0 ? (
        personList.map((person, idx) => (
          <CardCover cardStyle={cardStyle} personInfo={person} key={idx} navigation={navigation} />
        ))
      ) : (
        <View style={styles.noResult}>
          <Text style={styles.noResultText}>검색 결과가 없습니다.</Text>
        </View>
      )}
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

  noResult: { flex: 1, marginVertical: 40, alignItems: 'center' },

  noResultText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray,
  },
});
