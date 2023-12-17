import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import uuid from 'react-native-uuid';
import {Card, FloatingActionButton, Modal} from '../components';
import {INotes} from '../types';
import dataOperation from '../utils/DataOperation';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState<INotes[]>([]);
  const [data, setData] = useState<INotes | null>(null);
  const {save, getAllItems, getAllKeys} = dataOperation;
  const saveNote = () => {
    save(String(uuid.v4()), data!);
  };
  useEffect(() => {
    getAllKeys().then(keys => {
      console.log(keys);
      getAllItems(keys as string[]).then(results => setNotes(results as any[]));
    });
  }, []);
  return (
    <>
      <ScrollView scrollEnabled={!open}>
        {notes &&
          notes.map((value, index) => {
            return <Card key={index} />;
          })}
      </ScrollView>
      <FloatingActionButton action={setOpen} />
      <Modal isVisible={open} setVisibility={setOpen} onSave={saveNote} />
    </>
  );
};

export default Home;
