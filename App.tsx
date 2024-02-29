import React from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const App = () => (
  <View style={styles.container}>
    <SwiperFlatList
      index={0}
      paginationStyle={styles.paginationStyle}
      paginationStyleItemActive={styles.paginationStyleItemActive}
      paginationStyleItemInactive={styles.paginationStyleItemInactive}
      showPagination>
      <View style={[styles.child]}>
        <Image source={require('./assets/Illustrationfirst.jpg')} />
        <Text style={styles.title}>Gain total control of your money</Text>
        <Text style={styles.subtitle}>
          Become your own money manager and make every cent count
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Sign up pressed')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => console.log('Sign up pressed')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={[styles.child, {backgroundColor: 'thistle'}]}>
        <Text>2</Text>
      </View>
      <View style={[styles.child, {backgroundColor: 'skyblue'}]}>
        <Text>3</Text>
      </View> */}
    </SwiperFlatList>
  </View>
);

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', marginTop: 50},
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
    paddingTop: 100,
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

export default App;
