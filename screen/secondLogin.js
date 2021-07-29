import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from './components/button';
import Logo from './components/logo';
import CustomTextInput from './components/textInput';

const SecondLogin = () => {
  return (
    <SafeAreaView style={styles.contentContainer}>
      <StatusBar
        networkActivityIndicatorVisible={true}
        barStyle="light-content"
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.contentContainer}>
          <Logo secondary="#29d8a0" style={styles.logoStyle} />

          <CustomTextInput
            placeholder="Email"
            icon={<FontAwesome name="envelope-o" size={16} color="grey" />}
            style={styles.inputPadding}
          />

          <CustomTextInput
            placeholder="Password"
            secureTextEntry={true}
            icon={<EvilIcons name="lock" size={35} color="grey" />}
          />

          <View style={styles.checkboxWrapper}>
            <View style={styles.row}>
              <BouncyCheckbox
                size={20}
                fillColor="#29d8a0"
                unfillColor="#FFFFFF"
                iconStyle={styles.checkboxIcon}
              />
              <Text style={styles.black}>Remember me</Text>
            </View>
            <Text style={styles.green}>Forgot Password?</Text>
          </View>
          <Button text={'LOGIN'} />

          <View style={styles.footerWrapper}>
            <Text style={styles.black}>Don't have an account?</Text>
            <Text style={styles.footerText}>Signup here</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  inputPadding: {
    padding: 10,
  },
  logoStyle: {
    marginTop: '30%',
    marginBottom: 33,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '2%',
    marginVertical: 17,
    marginLeft: 15,
  },
  green: {color: '#29d8a0'},
  black: {color: 'black'},
  checkboxIcon: {
    borderColor: '#29d8a0',
    marginRight: -10,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 22,
  },
  footerText: {color: '#29d8a0', marginLeft: 7},
  row: {flexDirection: 'row'},
});

export default SecondLogin;
