import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { removeHtmlTags } from '../../utils/format';
import { colors } from '../../styles/theme';

export const News = ({ news }) => {
  return (
    <TouchableOpacity style={styles.cardWrap}>
      <Card style={styles.card} mode="contained">
        <Card.Content>
          <Text style={styles.title}>{removeHtmlTags(news.title)}</Text>
          <Text style={styles.description}>{removeHtmlTags(news.description)}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    marginBottom: 12,
    width: '100%',
  },

  card: {
    width: '100%',
    height: 120,
    backgroundColor: colors.lightTurquoise,
    overflow: 'hidden',
  },

  title: {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 6,
  },

  description: { marginBottom: 6 },
});
