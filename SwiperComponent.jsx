import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import FirstSVGComponent from './svg/first';
import SecondSVGComponent from './svg/second';
import ThirdSVGComponent from './svg/third';

const SwiperComponent = ({navigation}) => (
  <View style={styles.container}>
    <SwiperFlatList
      index={0}
      paginationStyle={styles.paginationStyle}
      paginationStyleItemActive={styles.paginationStyleItemActive}
      paginationStyleItemInactive={styles.paginationStyleItemInactive}
      showPagination>
      <View style={styles.child}>
        <FirstSVGComponent />
        <Text style={styles.title}>Gain total control of your money</Text>
        <Text style={styles.subtitle}>
          Become your own money manager and make every cent count
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.child}>
        <SecondSVGComponent />
        <Text style={styles.title}>Know where your money goes</Text>
        <Text style={styles.subtitle}>
          Track your transaction easily, with categories and financial report
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.child}>
        <ThirdSVGComponent />
        <Text style={styles.title}>Planning Ahead</Text>
        <Text style={styles.subtitle}>
          Setup your budget for each category so you're in control
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SwiperFlatList>
  </View>
);

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center', alignItems: 'center'},
  title: {
    width: 277,
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 39,
    textAlign: 'center',
    marginTop: 41,
    color: '#212325',
  },
  subtitle: {
    width: 272,
    fontWeight: '500',
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 19.36,
    color: '#91919F',
    textAlign: 'center',
    marginTop: 17,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#7F3DFF',
    borderRadius: 8,
    paddingVertical: 17,
    paddingHorizontal: 137.5,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: '#EEE5FF',
    borderRadius: 8,
    paddingVertical: 17,
    paddingHorizontal: 147,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Inter',
    lineHeight: 22,
  },
  loginButtonText: {
    color: '#7F3DFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Inter',
    lineHeight: 22,
  },
  buttonContainer: {
    paddingTop: 80,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 230,
    alignItems: 'center',
  },
  paginationStyleItemActive: {
    backgroundColor: '#7F3DFF',
    width: 16,
    height: 16,
  },
  paginationStyleItemInactive: {
    backgroundColor: '#EEE5FF',
    width: 8,
    height: 8,
  },
});

export default SwiperComponent;
