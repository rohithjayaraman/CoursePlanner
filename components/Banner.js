import React from 'react';
import {Text} from 'react-native';
import {styles} from '../utils';

function Banner({ title }){ 
  return (
  <Text style={styles.scheduleScreen.banner}>{title || ['Loading...']}</Text>
)}

export default Banner;
