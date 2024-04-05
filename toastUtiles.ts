import Toast from 'react-native-toast-message';

export const successToast = (message: string) => {
  Toast.show({
    type: 'success',
    text1: message,
    text1Style: {fontSize: 16, fontWeight: 'bold', color: '#464A4D'},
    visibilityTime: 1000,
  });
};

export const errorToast = (message: string) => {
  Toast.show({
    type: 'error',
    text1: message,
    text1Style: {fontSize: 16, fontWeight: 'bold', color: '#464A4D'},
    visibilityTime: 1000,
  });
};
