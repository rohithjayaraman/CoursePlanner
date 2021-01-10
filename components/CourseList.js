import React from 'react';
import {ScrollView, View} from 'react-native';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import {getTermCourses, styles} from '../utils';

function CourseList({ courses, view }) {
  const {termCourses, terms, selectedTerm, setSelectedTerm} = getTermCourses(courses);
  return (
    <View style={styles.scheduleScreen.courseListContainer}>
  <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}></TermSelector>
  <ScrollView>
    <CourseSelector courses={termCourses} view={view}></CourseSelector>
  </ScrollView>
  </View>
)}

export default CourseList;
