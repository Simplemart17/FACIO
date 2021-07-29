import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: '2%',
    width: '96%',
    borderRadius: 8,
    backgroundColor: '#29d8a0',
    padding: 15,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Button;
