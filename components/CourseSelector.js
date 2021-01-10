import React from 'react';
import {View} from 'react-native';
import Course from './Course';
import {getSelectedCourseDetails, checkIfConflict, styles} from '../utils';


function CourseSelector({courses, view}) {
  const {selectedCourses, toggleSelection} = getSelectedCourseDetails()

  return (
    <View style={styles.scheduleScreen.courseSelector}>
      { 
        courses.map(course => (
          <Course key={course.id} course={course} view={view} select={toggleSelection} isDisabled={checkIfConflict(course, selectedCourses)} isSelected={selectedCourses.some(selectedCourse => selectedCourse.id === course.id)}></Course>
        ))
      }
    </View>
  );
};
export default CourseSelector;