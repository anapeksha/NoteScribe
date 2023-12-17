import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal, TextInput} from 'react-native-paper';
import {IModalProps} from '../types';

const Modal: React.FC<IModalProps> = ({isVisible, setVisibility}) => {
  const styles = StyleSheet.create({
    input: {
      marginBottom: 10,
    },
  });
  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={() => setVisibility(false)}>
        <Dialog.Title>Add a note</Dialog.Title>
        <Dialog.Content>
          <TextInput label="Title" mode="outlined" style={styles.input} />
          <TextInput label="Note" mode="outlined" multiline numberOfLines={4} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button mode="outlined" icon="content-save">
            Save
          </Button>
          <Button
            mode="contained"
            icon="close"
            dark
            buttonColor="red"
            onPress={() => setVisibility(false)}>
            Cancel
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default Modal;
