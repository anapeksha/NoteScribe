import React from 'react';
import {StyleSheet} from 'react-native';
import {Card as RNCard, Text} from 'react-native-paper';
import {ICardProps} from '../types';

const Card: React.FC<ICardProps> = ({title, createdAt}) => {
  const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
    text: {
      color: 'rgb(150, 142, 152)',
      fontStyle: 'italic',
    },
  });
  return (
    <RNCard mode="elevated" style={styles.container}>
      <RNCard.Title title={title} titleVariant="headlineLarge" />
      <RNCard.Content>
        <Text variant="labelSmall" style={styles.text}>
          Created - {createdAt.toLocaleString()}
        </Text>
      </RNCard.Content>
    </RNCard>
  );
};

export default Card;
