import React from 'react';
import {ScrollView, View} from 'react-native';
import {Course,TermSelector} from './';
import {getTermCourses, styles} from '../utils';

const CourseList = ({ courses }) => {
  const {termCourses, terms, selectedTerm, setSelectedTerm} = getTermCourses(courses);
  return (
    <View style={styles.courseListContainer}>
  <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}></TermSelector>
  <ScrollView>
    <View style={styles.courseList}>
      {termCourses.map(course => <Course key={course.id} course={course}></Course>)}
    </View>
  </ScrollView>
  </View>
)}

export default CourseList;
