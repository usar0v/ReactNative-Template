import {Clipboard, Insets} from 'react-native';

export const mustBeAtLeast = (fieldName: string, character = 2) =>
  `${fieldName} должно быть не менее ${character} символов`;

export const mustBeAtMost = (fieldName: string, character = 20) =>
  `${fieldName} должно быть не более ${character} символов`;

export const required = (fieldName: string) => `${fieldName} обязательно`;

export const copyToClipboard = (text: string) => () => {
  Clipboard.setString(text);
};

export const hitSlop = (size: number): Insets => ({
  left: size,
  top: size,
  bottom: size,
  right: size,
});
