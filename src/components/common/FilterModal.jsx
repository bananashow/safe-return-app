import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

export const FilterModal = ({ isOpen, handleModal }) => {
  return (
    <Portal>
      <Modal visible={isOpen} onDismiss={() => handleModal(false)} contentContainerStyle={containerStyle}>
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>
  );
};

const containerStyle = { backgroundColor: 'white', padding: 20 };
