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
import {Formik} from 'formik';
import {loginSchema} from './validationSchema';
import {errorToast, successToast} from './toastUtiles';

interface LoginProps {
  navigation: NavigationProp<ParamListBase>;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const [togglePassword, setTogglePassword] = React.useState(true);

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={loginSchema}
      onSubmit={async values => {
        try {
          const response = await fetch(
            'http://10.1.3.88/expense-tracker/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            },
          );

          const responseData = await response.json();
          if (responseData.success) {
            successToast(responseData.message);
            setTimeout(() => {
              navigation.navigate('Dashboard');
            }, 1000);
          } else {
            errorToast(responseData.error);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      }}>
      {formikProps => (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <LeftArrow />
            </TouchableOpacity>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[
                styles.input,
                formikProps.errors.email && formikProps.touched.email
                  ? styles.inputErrorStyle
                  : null,
              ]}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor={'#91919F'}
              autoCapitalize="none"
              onChangeText={formikProps.handleChange('email')}
              onBlur={formikProps.handleBlur('email')}
              value={formikProps.values.email}
            />
            {formikProps.errors.email && formikProps.touched.email && (
              <Text style={styles.errorText}>{formikProps.errors.email}</Text>
            )}
            <View style={styles.inputPassword}>
              <TextInput
                style={[
                  styles.input,
                  formikProps.errors.password && formikProps.touched.password
                    ? styles.inputErrorStyle
                    : null,
                ]}
                placeholder="Password"
                placeholderTextColor={'#91919F'}
                secureTextEntry={togglePassword}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={formikProps.handleChange('password')}
                onBlur={formikProps.handleBlur('password')}
                value={formikProps.values.password}
              />
              <View style={styles.eyeIconWrapper}>
                <Eye onPress={() => setTogglePassword(!togglePassword)} />
              </View>
            </View>
            {formikProps.errors.password && formikProps.touched.password && (
              <Text style={styles.errorText}>
                {formikProps.errors.password}
              </Text>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => formikProps.handleSubmit()}>
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
      )}
    </Formik>
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
    marginTop: 75,
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
    paddingTop: 25,
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
  inputErrorStyle: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginTop: -15,
    marginBottom: 20,
  },
});

export default Login;
