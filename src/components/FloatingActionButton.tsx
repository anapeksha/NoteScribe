import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import type {IFABprops} from '../types';

const FloatingActionButton: React.FC<IFABprops> = ({action}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fab: {
      borderRadius: 100,
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 0,
    },
  });
  return (
    <FAB
      icon="plus"
      onPress={() => action(true)}
      mode="elevated"
      customSize={65}
      style={styles.fab}
    />
  );
};

export default FloatingActionButton;
