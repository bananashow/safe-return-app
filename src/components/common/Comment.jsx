import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../../styles/theme';

export const Comment = () => {
  return (
    <View style={styles.commentBox}>
      <TextInput
        label="댓글을 입력하세요"
        mode="outlined"
        outlineColor={colors.lightGray}
        activeOutlineColor={colors.gray}
      />

      <View style={styles.comment}>
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>관리자</Text>
          <Text style={{ color: '#c0c0c0', fontSize: 13 }}>2024-04-25 05:19</Text>
        </View>
        <Text style={styles.commentContent}>어디서 뵌 것 같은데..!</Text>
      </View>
      <View style={styles.comment}>
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>관리자</Text>
          <Text style={{ color: '#c0c0c0', fontSize: 13 }}>2024-04-25 05:19</Text>
        </View>
        <Text style={styles.commentContent}>어디서 뵌 것 같은데..!</Text>
      </View>
      <View style={styles.comment}>
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>관리자</Text>
          <Text style={{ color: '#c0c0c0', fontSize: 13 }}>2024-04-25 05:19</Text>
        </View>
        <Text style={styles.commentContent}>어디서 뵌 것 같은데..!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentBox: {
    marginVertical: 36,
    flex: 1,
    gap: 4,
  },

  comment: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.lightGray,
  },

  commentContent: {
    fontSize: 14,
    paddingVertical: 4,
  },
});
