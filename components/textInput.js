import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const CustomTextInput = props => {
  const {style, icon, inputStyle} = props;
  const [focusColor, setFocusColor] = useState('grey');
  const onFocusHandler = () => {
    setFocusColor('#29d8a0');
  };
  const onBlurHandler = () => {
    setFocusColor('grey');
  };

  return (
    <View
      style={{
        ...styles.inputWrapper,
        ...styles.marginTop,
        borderBottomColor: focusColor,
        ...style,
      }}>
      {icon}
      <TextInput
        {...props}
        style={{...styles.input, ...inputStyle}}
        onFocus={() => onFocusHandler()}
        onBlur={() => onBlurHandler()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    marginHorizontal: '2%',
    marginTop: 12,
    width: '96%',
    paddingVertical: 2,
    alignItems: 'center',
    borderRadius: 8,
    borderBottomWidth: 1,
  },
  input: {
    color: 'black',
    marginLeft: '2%',
    width: '80%',
  },
  marginTop: {
    marginTop: 22,
  },
});

export default CustomTextInput;
