import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from '../../styles';

export default class TextField extends Component {
  render(){
    const { input: { value, onChange }, ...otherProps } = this.props;
    return (
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => onChange(value)}
        value={value}
        {...otherProps}
      />
    );
  }
}
