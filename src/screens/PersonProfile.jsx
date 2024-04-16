import { ScrollView, StyleSheet, Text } from 'react-native';

export const PersonProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>실종자 디테일 정보</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
