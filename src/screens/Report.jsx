import { ScrollView, StyleSheet, Text } from 'react-native';

export const Report = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Report</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
});
