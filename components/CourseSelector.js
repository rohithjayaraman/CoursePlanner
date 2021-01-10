import React from 'react';
import {View} from 'react-native';
import Course from './Course';
import {getSelectedCourseDetails, checkIfConflict, styles} from '../utils';


const CourseSelector = ({courses}) => {
  const {selectedCourses, toggleSelection} = getSelectedCourseDetails()

  return (
    <View style={styles.courseSelector}>
      { 
        courses.map(course => (
          <Course key={course.id} course={course} select={toggleSelection} isDisabled={checkIfConflict(course, selectedCourses)} isSelected={selectedCourses.some(selectedCourse => selectedCourse.id === course.id)}></Course>
        ))
      }
    </View>
  );
};
export default CourseSelector;