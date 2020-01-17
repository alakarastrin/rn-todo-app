import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const AppText = props => {
  const { style = {}, children } = props;
  const textStyles = { ...styles.default, ...style };

  return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
  },
});
