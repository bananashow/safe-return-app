import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Layout } from '../components/Layout';
import { CardCover } from '../components/card/CardCover';
import { QUERY_KEY } from '../api/queryKey';
import axios from 'axios';
import { SAFE_URL, SAFE_ID, SAFE_KEY, NEWS_URL, NEWS_ID, NEWS_SECRET } from '@env';
import { useInfiniteQuery, useQuery } from 'react-query';
import { NEWS_QUERY } from '../constants/api';
import { News } from '../components/card/News';

export const Home = ({ navigation }) => {
  const PAGE = 1;
  const SIZE = 6;

  const { data } = useInfiniteQuery({
    queryKey: [QUERY_KEY.GET_PERSON],
    queryFn: () => axios.get(`${SAFE_URL}?esntlId=${SAFE_ID}&authKey=${SAFE_KEY}&rowSize=${SIZE}&page=${PAGE}`),
  });

  const { data: newsData } = useQuery({
    queryKey: [QUERY_KEY.GET_NEWS],
    queryFn: () =>
      axios.get(`${NEWS_URL}${NEWS_QUERY}`, {
        headers: {
          'X-Naver-Client-Id': NEWS_ID,
          'X-Naver-Client-Secret': NEWS_SECRET,
        },
      }),
  });

  return (
    <Layout>
      <Image style={styles.logo} source={require('../assets/logo.png')} resizeMode="center" />
      <Text style={styles.title}>실종 관련 뉴스</Text>
      <ScrollView
        contentContainerStyle={styles.newsContainer}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        centerContent={true}
        pagingEnabled
      >
        {newsData?.data?.items?.map((news, idx) => {
          return <News news={news} key={idx} />;
        })}
      </ScrollView>

      <Text style={styles.title}>최신순</Text>
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
  newsContainer: {
    flexDirection: 'row',
    width: '100%',
  },

  logo: {
    height: 100,
    marginTop: 60,
  },

  cardContainer: {
    flexDirection: 'row',
  },

  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 12,
  },
});
