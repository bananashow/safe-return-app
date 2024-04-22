import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout } from '../components/Layout';
import { CardCover } from '../components/card/CardCover';
import { QUERY_KEY } from '../api/queryKey';
import axios from 'axios';
import { SAFE_URL, SAFE_ID, SAFE_KEY } from '@env';
import { useInfiniteQuery } from 'react-query';

export const Home = ({ navigation }) => {
  const PAGE = 1;
  const SIZE = 6;
  const { data } = useInfiniteQuery({
    queryKey: [QUERY_KEY.GET_PERSON],
    queryFn: () => axios.get(`${SAFE_URL}?esntlId=${SAFE_ID}&authKey=${SAFE_KEY}&rowSize=${SIZE}&page=${PAGE}`),
  });

  return (
    <Layout>
      <Image style={styles.logo} source={require('../assets/logo.png')} resizeMode="center" />
      <ScrollView contentContainerStyle={styles.cardContainer} bounces={false} showsHorizontalScrollIndicator={false}>
        {data?.pages
          ?.flatMap((page) => page.data.list)
          .map((person) => {
            return (
              <CardCover
                key={person.rnum}
                personInfo={person}
                cardStyle={{ marginRight: 12, width: 200 }}
                navigation={navigation}
              />
            );
          })}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
  },

  header: {},

  logo: {},

  image: {
    width: '100%',
    height: 80,
    marginBottom: 8,
  },

  info: {
    color: '#fff',
    marginTop: 2,
  },
});
