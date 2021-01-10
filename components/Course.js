import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {getCourseNumber, getCourseMeetsString, styles} from '../utils';

const Course = ({course, isSelected, isDisabled, select}) => (
<TouchableOpacity style={isSelected? styles.courseButtonSelected : isDisabled? styles.courseButtonDisabled : styles.courseButtonUnselected} onPress={() => {if(!isDisabled)select(course)}}>
    <Text style={styles.courseText}>{`CS ${getCourseNumber(course)}\n${getCourseMeetsString(course)}`}</Text>
</TouchableOpacity>
);

export default Course;
