import { StyleSheet, View } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { colors } from '../styles/theme';
import { CardList } from '../components/card/CardList';
import { useState } from 'react';

export const Search = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.btnsWrap}>
        <Button icon="map" mode="contained" buttonColor={colors.navy} onPress={() => console.log('지도로 보기')}>
          지도로 보기
        </Button>
        <Button icon="filter" mode="outlined" textColor={colors.navy} onPress={() => console.log('필터')}>
          필터
        </Button>
      </View>
      <Searchbar
        placeholder="이름이나 지역을 입력하세요"
        iconColor={colors.navy}
        onChangeText={setKeyword}
        value={keyword}
        style={styles.searchBar}
        inputStyle={{ fontSize: 14, paddingBottom: 14 }}
      />
      <CardList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 80, marginHorizontal: 12 },
  btnsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchBar: {
    backgroundColor: colors.turquoise,
    marginVertical: 12,
    height: 40,
    alignItems: 'center',
  },
});