import {Linking} from 'react-native';

export const phoneNumberCall = async (number: string) => {
  try {
    await Linking.openURL(`tel:${number}`);
  } catch (e) {
    console.log({e});
  }
};
