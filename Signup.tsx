import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LeftArrow from './svg/leftArrow';
import {TextInput} from 'react-native-gesture-handler';
import Eye from './svg/eye';
import CheckBox from '@react-native-community/checkbox';
import GoogleIcon from './svg/googleIcon';

interface SignupProps {
  navigation: NavigationProp<ParamListBase>;
}

const Signup: React.FC<SignupProps> = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <LeftArrow />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={'#91919F'}
          autoCapitalize="words"
          autoCorrect={false}
        />
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
        <View style={styles.checkboxWrapper}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>
            By signing up, you agree to the{' '}
            <Text style={styles.checkboxTextLink}>
              Terms of Service and Privacy Policy
            </Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.p}>Or with</Text>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => navigation.navigate('Signup')}>
            <GoogleIcon />
            <Text style={styles.googleButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>
          <Text style={styles.lastText}>
            Already have an account?{' '}
            <Text
              style={styles.loginRedirect}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
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
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
    width: 32,
    height: 32,
  },
  checkboxText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'left',
    width: 291,
    height: 36,
  },
  checkboxTextLink: {
    color: '#7F3DFF',
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'left',
    width: 291,
    height: 36,
  },
  button: {
    backgroundColor: '#7F3DFF',
    borderRadius: 8,
    paddingVertical: 17,
    paddingHorizontal: 137.5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Inter',
    lineHeight: 22,
  },
  p: {
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 18,
    textAlign: 'left',
    color: '#91919F',
    paddingVertical: 12,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  googleButton: {
    paddingVertical: 17,
    paddingHorizontal: 137.5,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    width: 343,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: '#212325',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'left',
    marginLeft: 10,
    width: 177,
    height: 22,
  },
  lastText: {
    width: 244,
    height: 19,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'left',
    color: '#91919F',
    marginTop: 19,
  },
  loginRedirect: {
    color: '#8B50FF',
    textDecorationLine: 'underline',
  },
});

export default Signup;
