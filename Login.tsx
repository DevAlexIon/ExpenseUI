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
import Eye from './svg/eye';

interface LoginProps {
  navigation: NavigationProp<ParamListBase>;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <LeftArrow />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={'#91919F'}
          autoCapitalize="none"
        />
        <View style={styles.inputPassword}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#91919F'}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.eyeIconWrapper}>
            <Eye />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={styles.forgotPasswordText}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password?
        </Text>
        <Text style={styles.lastText}>
          Don't have an account yet?{' '}
          <Text
            style={styles.lastSpecialText}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </Text>
      </View>
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
    marginLeft: 135,
  },
  inputWrapper: {
    marginTop: 56,
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: 343,
    height: 56,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    marginBottom: 24,
    fontSize: 16,
    fontFamily: 'Inter',
    lineHeight: 18,
    color: '#91919F',
  },
  inputPassword: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeIconWrapper: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  buttonContainer: {
    paddingTop: 40,
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
  forgotPasswordText: {
    color: '#7F3DFF',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'left',
    marginTop: 33,
    marginBottom: 38,
  },
  lastText: {
    width: 271,
    height: 19,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'left',
    color: '#91919F',
  },
  lastSpecialText: {
    color: '#8B50FF',
    textDecorationLine: 'underline',
  },
});

export default Login;
