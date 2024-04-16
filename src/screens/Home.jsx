import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Layout } from '../components/Layout';
import { CardCover } from '../components/card/CardCover';

export const Home = ({ navigation }) => {
  const handleCard = () => {
    navigation.navigate('실종자 정보');
  };

  return (
    <Layout>
      <Image style={styles.logo} source={require('../assets/logo.png')} resizeMode="center" />
      <ScrollView contentContainerStyle={styles.cardContainer} bounces={false} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{ marginRight: 12 }} onPress={handleCard}>
          <CardCover cardWitdth={'100%'} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 12 }} onPress={handleCard}>
          <CardCover cardWitdth={'100%'} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 12 }} onPress={handleCard}>
          <CardCover cardWitdth={'100%'} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 12 }} onPress={handleCard}>
          <CardCover cardWitdth={'100%'} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 12 }} onPress={handleCard}>
          <CardCover cardWitdth={'100%'} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 12 }} onPress={handleCard}>
          <CardCover cardWitdth={'100%'} />
        </TouchableOpacity>
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
