import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {getCourseNumber, getCourseMeetsString, styles} from '../utils';

function Course({course, view, isSelected, isDisabled, select}) {
  return (
<TouchableOpacity style={isSelected? styles.scheduleScreen.courseButtonSelected : isDisabled? styles.scheduleScreen.courseButtonDisabled : styles.scheduleScreen.courseButtonUnselected} onPress={() => {if(!isDisabled)select(course)}} onLongPress={() => view(course)}>
    <Text style={styles.scheduleScreen.courseText}>{`CS ${getCourseNumber(course)}\n${getCourseMeetsString(course)}`}</Text>
</TouchableOpacity>
)};

export default Course;
