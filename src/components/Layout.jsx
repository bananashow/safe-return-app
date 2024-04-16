import { ScrollView, StyleSheet } from 'react-native';

export const Layout = ({ children }) => {
  return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginHorizontal: 12,
  },
});
