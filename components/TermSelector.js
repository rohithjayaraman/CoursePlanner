import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../utils';

const TermButton = ({ term, isActive, setSelectedTerm }) => (
  <TouchableOpacity style={isActive ? styles.termButtonActive : styles.termButtonInactive} onPress={() => setSelectedTerm(term)}>
    <Text style={styles.termText}>{term}</Text>
  </TouchableOpacity>
);

const TermSelector = ({terms, selectedTerm, setSelectedTerm}) => (
  <View style={styles.termSelector}>
    {terms.map(term => (<TermButton key={term} term={term} isActive={term === selectedTerm} setSelectedTerm={setSelectedTerm}></TermButton>))}
  </View>
);

export default TermSelector;
