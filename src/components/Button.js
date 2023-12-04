import React from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Btn = ({ title, onPress, style, textStyle, icon }) => {
  const btn = () => {
    Alert.alert('Hello');
  };
  return (
    <TouchableOpacity
      style={[
        { width: 100, borderWidth: 1, alignItems: 'center', padding: 10 },
        tw`w-20`,
      ]}
      onPress={onPress}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Btn;
