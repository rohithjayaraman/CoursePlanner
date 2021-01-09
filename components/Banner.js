import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Banner = ({ title }) => (
  <Text style={styles.bannerStyle}>{title || ['Loading...']}</Text>
)

const styles = StyleSheet.create({
  bannerStyle: {
    color: '#888',
    fontSize: 32
  }
})

export default Banner;
