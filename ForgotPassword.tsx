import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LeftArrow from './svg/leftArrow';

interface ForgotPassword {
  navigation: NavigationProp<ParamListBase>;
}

const ForgotPassword: React.FC<ForgotPassword> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <LeftArrow />
        </TouchableOpacity>
        <Text style={styles.title}>Forgot Password</Text>
      </View>
      <Text style={styles.middleText}>
        Don't worry. {'\n'}
        Enter your email and we'll send you a link to reset your password.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={'#91919F'}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginLeft: 16,
    marginTop: 60,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
    color: '#212325',
    marginLeft: 100,
  },
  middleText: {
    width: 343,
    height: 116,
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 29,
    textAlign: 'left',
    color: '#0D0E0F',
    marginTop: 69,
    alignSelf: 'center',
  },
  input: {
    width: 343,
    height: 56,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    marginTop: 46,
    marginBottom: 32,
    fontSize: 16,
    fontFamily: 'Inter',
    lineHeight: 18,
    color: '#91919F',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#7F3DFF',
    borderRadius: 8,
    paddingVertical: 17,
    alignSelf: 'center',
    width: 343,
  },
  buttonText: {
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Inter',
    lineHeight: 22,
  },
});

export default ForgotPassword;
