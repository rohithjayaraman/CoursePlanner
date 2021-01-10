import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../utils';

function TermButton({ term, isActive, setSelectedTerm }) {
  return (
  <TouchableOpacity style={isActive ? styles.scheduleScreen.termButtonActive : styles.scheduleScreen.termButtonInactive} onPress={() => setSelectedTerm(term)}>
    <Text style={styles.scheduleScreen.termText}>{term}</Text>
  </TouchableOpacity>
)}

function TermSelector({terms, selectedTerm, setSelectedTerm}) {
  return (
  <View style={styles.scheduleScreen.termSelector}>
    {terms.map(term => (<TermButton key={term} term={term} isActive={term === selectedTerm} setSelectedTerm={setSelectedTerm}></TermButton>))}
  </View>
)}

export default TermSelector;
