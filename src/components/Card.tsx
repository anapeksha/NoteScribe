import React from 'react';
import {StyleSheet} from 'react-native';
import {Card as RNCard, Text} from 'react-native-paper';

const Card: React.FC = () => {
  const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
  });
  return (
    <RNCard mode="elevated" style={styles.container}>
      <RNCard.Title title="Card Title" />
      <RNCard.Content>
        <Text>Hello</Text>
      </RNCard.Content>
    </RNCard>
  );
};

export default Card;
