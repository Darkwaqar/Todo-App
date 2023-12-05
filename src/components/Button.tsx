import React from 'react';
import {
  Alert,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';
import tw from 'twrnc';
export interface btn {
  title: string;
  onPress: () => void;
  textStyle?: TextStyle;
  style?: ViewStyle;
}
const Btn = ({title, onPress, textStyle}: btn) => {
  const btn = () => {
    Alert.alert('Hello');
  };
  return (
    <TouchableOpacity
      style={[
        {width: 100, borderWidth: 1, alignItems: 'center', padding: 10},
        tw`w-20`,
      ]}
      onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Btn;
