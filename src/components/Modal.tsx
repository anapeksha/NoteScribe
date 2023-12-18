import React, {useState} from 'react';
import {
  Button,
  Dialog,
  HelperText,
  Portal,
  TextInput,
} from 'react-native-paper';
import uuid from 'react-native-uuid';
import {IModalProps, INotes} from '../types';

const Modal: React.FC<IModalProps> = ({
  isVisible,
  setVisibility,
  dataSetter,
  onSave,
}) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const cancelAction = () => {
    setVisibility(false);
    setTitle('');
    setNote('');
  };
  const saveAction = () => {
    const data: INotes = {
      id: String(uuid.v4()),
      title: title,
      note: note,
      createdAt: new Date(),
      isArchived: false,
      isDeleted: false,
    };
    onSave(data);
  };
  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={cancelAction}>
        <Dialog.Title>Add a note</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <HelperText type="error" visible={false}>
            Title is required
          </HelperText>

          <TextInput
            label="Note"
            multiline
            numberOfLines={6}
            value={note}
            onChangeText={text => setNote(text)}
          />
          <HelperText type="error" visible={false}>
            Note is required
          </HelperText>
        </Dialog.Content>
        <Dialog.Actions>
          <Button mode="contained" icon="content-save" onPress={saveAction}>
            Save
          </Button>
          <Button
            mode="contained"
            icon="close"
            dark
            buttonColor="red"
            onPress={cancelAction}>
            Cancel
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default Modal;
