import React from 'react';
import {ScrollView, View} from 'react-native';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import {getTermCourses, styles} from '../utils';

const CourseList = ({ courses }) => {
  const {termCourses, terms, selectedTerm, setSelectedTerm} = getTermCourses(courses);
  return (
    <View style={styles.courseListContainer}>
  <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}></TermSelector>
  <ScrollView>
    <CourseSelector courses={termCourses}></CourseSelector>
  </ScrollView>
  </View>
)}

export default CourseList;
