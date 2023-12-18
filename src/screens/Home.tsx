import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Card, FloatingActionButton, Modal} from '../components';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {saveNote, selectNotes} from '../redux/slice/noteSlice';
import {INotes} from '../types';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<INotes>();
  const tempNotes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();
  const save = (note: INotes) => {
    dispatch(saveNote(note));
  };
  return (
    <>
      <FlatList
        data={tempNotes}
        renderItem={({item}) => (
          <Card title={item.title} createdAt={new Date(item.createdAt)} />
        )}
        keyExtractor={item => item.id}
      />
      <FloatingActionButton action={setOpen} />
      <Modal
        isVisible={open}
        setVisibility={setOpen}
        onSave={save}
        data={data}
        dataSetter={setData}
      />
    </>
  );
};

export default Home;
