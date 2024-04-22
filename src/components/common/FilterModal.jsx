import { StyleSheet, Text, View } from 'react-native';
import { Button, Chip, Modal, Portal } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { colors } from '../../styles/theme';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useState } from 'react';

export const FilterModal = ({ isOpen, handleModal }) => {
  const [rangeValues, setRangeValues] = useState([20, 80]);

  const renderCustomMarker = (value, index, step, markerProps) => {
    return (
      <View key={index} style={styles.marker}>
        <Text style={styles.markerText}>{value}</Text>
      </View>
    );
  };

  return (
    <Portal>
      <Modal visible={isOpen} onDismiss={() => handleModal(false)} contentContainerStyle={styles.containerStyle}>
        <View style={styles.selectors}>
          <Text style={styles.title}>성별</Text>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Chip style={{ backgroundColor: colors.turquoise }} onPress={() => console.log('Pressed')}>
              남성
            </Chip>
            <Chip style={{ backgroundColor: colors.turquoise }} onPress={() => console.log('Pressed')}>
              여성
            </Chip>
          </View>
          <Text style={styles.title}>대상</Text>
          <View style={styles.selector}>
            <RNPickerSelect
              style={{ fontSize: 24 }}
              placeholder={{ label: '대상을 선택하세요', value: null, color: colors.gray }}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: '정상 아동', value: '010' },
                { label: '가출인', value: '020' },
                { label: '시설보호 무연고자', value: '040' },
                { label: '지적장애인', value: '060' },
                { label: '지적장애인(18세 미만)', value: '061' },
                { label: '지적장애인(18세 이상)', value: '062' },
                { label: '치매질환자', value: '070' },
                { label: '불상(기타)', value: '080' },
              ]}
            />
          </View>
          <View>
            <Text style={styles.title}>당시 나이</Text>
            <MultiSlider
              isMarkersSeparated={true}
              values={rangeValues}
              sliderLength={280}
              onValuesChange={(values) => setRangeValues(values)}
              min={0}
              max={100}
              step={1}
              customMarker={renderCustomMarker}
            />
          </View>
          <View style={styles.btnsWrap}>
            <Button icon="refresh" mode="outlined" textColor={colors.navy}>
              초기화
            </Button>
            <Button icon="filter" mode="contained" buttonColor={colors.navy} style={{ flex: 1 }}>
              필터 적용
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  containerStyle: { backgroundColor: 'white', padding: 20 },

  selectors: { gap: 24, color: 'red' },
  selector: {
    backgroundColor: colors.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  btnsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: -12,
  },
});
