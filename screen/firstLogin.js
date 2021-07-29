import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from './components/button';
import Logo from './components/logo';

const FirstLogin = () => {
  return (
    <SafeAreaView style={styles.wrapperContainer}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0.8)" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.contentContainer}>
          <ImageBackground
            style={styles.imageWrapper}
            resizeMode="cover"
            source={{
              uri: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
            }}>
            <View style={styles.container}>
              <Logo
                primary="#fff"
                secondary="#29d8a0"
                style={styles.logoStyle}
              />

              <View style={{...styles.inputWrapper, ...styles.inputPadding}}>
                <FontAwesome name="envelope-o" size={16} color="#fff" />
                <TextInput style={styles.input} placeholder="Email" />
              </View>

              <View style={{...styles.inputWrapper, ...styles.marginTop}}>
                <EvilIcons name="lock" size={35} color="#fff" />
                <TextInput
                  style={styles.input}
                  placeholder="password"
                  secureTextEntry={true}
                />
              </View>

              <View style={styles.checkbox}>
                <BouncyCheckbox
                  size={20}
                  fillColor="#29d8a0"
                  unfillColor="#FFFFFF"
                  iconStyle={styles.checkboxIcon}
                />
                <Text style={styles.white}>Keep me logged in</Text>
              </View>
              <Button text={'LOGIN'} />
              <View style={styles.footerWrapper}>
                <Text style={styles.white}>Forgot password?</Text>
                <Text style={styles.footerText}>Recover here</Text>
              </View>
              <View style={{...styles.footerWrapper, ...styles.signUpMargin}}>
                <Text style={styles.white}>Don't have an account?</Text>
                <Text style={styles.footerText}>Signup here</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  contentContainer: {
    flex: 1,
  },
  logoStyle: {
    marginTop: '30%',
    marginBottom: 33,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    marginHorizontal: '2%',
    width: '96%',
    paddingVertical: 2,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(37,37,37,255)',
  },
  input: {
    color: '#fff',
    marginLeft: '2%',
    width: '80%',
  },
  marginTop: {
    marginTop: 22,
  },
  inputPadding: {
    padding: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '2%',
    marginVertical: 17,
  },
  white: {color: '#fff'},
  checkboxIcon: {
    borderColor: '#29d8a0',
    marginRight: -10,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  footerText: {color: '#29d8a0', marginLeft: 7},
  signUpMargin: {
    marginTop: '30%',
  },
});

export default FirstLogin;
