import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Banner} from 'react-native-paper';

const Trash = () => {
  const [visible, setVisibility] = useState(true);
  const styles = StyleSheet.create({
    banner: {
      margin: 5,
      padding: 10,
    },
  });
  return (
    <View>
      <Banner
        visible={visible}
        style={styles.banner}
        elevation={5}
        actions={[
          {
            label: 'Dismiss',
            onPress: () => setVisibility(false),
          },
        ]}
        icon="trash-can">
        Items in trash will be automatically deleted after 30 days.
      </Banner>
    </View>
  );
};

export default Trash;
