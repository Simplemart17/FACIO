import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Logo = ({primary, secondary, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={{...styles.firstText, color: primary}}>FACI</Text>
      <Text style={{...styles.secondText, color: secondary}}>O</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  firstText: {
    fontWeight: 'bold',
    fontSize: 35,
    marginRight: 2,
    letterSpacing: 4,
  },
  secondText: {
    fontWeight: 'bold',
    fontSize: 35,
    marginRight: 2,
  },
});

export default Logo;
