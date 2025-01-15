import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {setCurrency} from '../../utils/helpers';
import moment from 'moment';

const CardTransaction = ({transaction, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.text}>{transaction?.name}</Text>
        <Text style={styles.text}>{setCurrency(transaction?.amount)}</Text>
        <Text style={styles.text}>{transaction?.description}</Text>
        <Text style={styles.textDate}>
          {moment(transaction?.date).format('DD MMM YYYY - HH:mm')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardTransaction;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    color: '#000',
  },
  textDate: {
    textAlign: 'right',
    color: '#000',
    fontSize: 12,
  },
});
