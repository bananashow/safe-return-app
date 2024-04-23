import { StyleSheet, Text, View } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { colors } from '../styles/theme';
import { CardList } from '../components/card/CardList';
import { useEffect, useState } from 'react';
import { SAFE_URL, SAFE_ID, SAFE_KEY } from '@env';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { QUERY_KEY } from '../api/queryKey';
import { FilterModal } from '../components/common/FilterModal';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { filteringOption } from '../store/person';
import { MaterialIcons } from '@expo/vector-icons';

export const Search = ({ navigation }) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const SIZE = 6;
  const option = useRecoilValue(filteringOption);
  const resetOption = useResetRecoilState(filteringOption);

  const handleModal = (isOpen) => {
    setFilterIsOpen(isOpen);
  };

  const handleReset = () => {
    resetOption();
  };

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.GET_FILTERED_PERSON, option],
    queryFn: ({ pageParam = 1 }) =>
      axios.get(`${SAFE_URL}?esntlId=${SAFE_ID}&authKey=${SAFE_KEY}&rowSize=${SIZE}&page=${pageParam}`, {
        params: {
          ...(option.target && { writngTrgetDscds: option.target }),
          ...(option.gender && { sexdstnDscd: option.gender }),
          age1: option.ageRange[0],
          age2: option.ageRange[1],
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      const totalItems = lastPage.data.totalCount;
      const currentPage = allPages.length + 1;
      const totalPages = Math.ceil(totalItems / SIZE);
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });

  useEffect(() => {
    fetchNextPage();
  }, []);

  const loadMore = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnsWrap}>
        <Button icon="map" mode="contained" buttonColor={colors.navy} onPress={() => console.log('지도로 보기')}>
          지도로 보기
        </Button>
        <View style={{ flexDirection: 'row', gap: 18, alignItems: 'center' }}>
          <MaterialIcons name="refresh" size={28} color={colors.navy} onPress={handleReset} />
          <Button icon="filter" mode="outlined" textColor={colors.navy} onPress={() => handleModal(true)}>
            필터
          </Button>
        </View>
      </View>
      <Searchbar
        placeholder="이름이나 지역을 입력하세요"
        iconColor={colors.navy}
        onChangeText={setKeyword}
        value={keyword}
        style={styles.searchBar}
        inputStyle={{ fontSize: 14, paddingBottom: 14 }}
      />
      <CardList
        personList={data?.pages?.flatMap((page) => page.data.list ?? [])}
        cardStyle={{ width: '48%' }}
        navigation={navigation}
        loadMore={loadMore}
        hasNextPage={hasNextPage}
      />
      {filterIsOpen && <FilterModal isOpen={filterIsOpen} handleModal={handleModal} />}
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
