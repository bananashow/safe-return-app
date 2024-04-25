import { ScrollView, StyleSheet } from 'react-native';

export const Layout = ({ children }) => {
  return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
});
