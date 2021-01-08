import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Course from './Course';

const CourseList = ({ courses }) => (
  <ScrollView>
    <View style={styles.courseListStyle}>
      {courses.map(course => <Course key={course.id} course={course}></Course>)}
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  courseListStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default CourseList;
