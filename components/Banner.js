import React from 'react';
import {Text} from 'react-native';
import {styles} from '../utils';

const Banner = ({ title }) => (
  <Text style={styles.banner}>{title || ['Loading...']}</Text>
)

export default Banner;
