import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../utils';

function getCourseNumber(course){
    return course.id.substring(1);
  }
  
function getCourseMeetsString(course){
const meetingDetails = course.meets.split(' ');
return `${meetingDetails[0]}\n${meetingDetails[1]}`
}

const Course = ({course}) => (
<TouchableOpacity style={styles.courseButton}>
    <Text style={styles.courseText}>
    {`CS ${getCourseNumber(course)}\n${getCourseMeetsString(course)}`}
    </Text>
</TouchableOpacity>
);

export default Course;
