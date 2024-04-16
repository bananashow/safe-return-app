import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardCover } from './CardCover';

export const CardList = () => {
  return (
    <ScrollView contentContainerStyle={styles.cards} bounces={false} pagingEnabled showsVerticalScrollIndicator={false}>
      <CardCover cardWitdth={'48%'} />
      <CardCover cardWitdth={'48%'} />
      <CardCover cardWitdth={'48%'} />
      <CardCover cardWitdth={'48%'} />
      <CardCover cardWitdth={'48%'} />
      <CardCover cardWitdth={'48%'} />
      <CardCover cardWitdth={'48%'} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cards: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});
