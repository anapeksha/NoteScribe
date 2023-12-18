import React from 'react';
import {ScrollView} from 'react-native';
import {List, Switch} from 'react-native-paper';

const Settings = () => {
  return (
    <ScrollView>
      <List.Section>
        <List.Item title="Dark Mode" />
        <Switch aria-label="Hello" />
      </List.Section>
    </ScrollView>
  );
};

export default Settings;
