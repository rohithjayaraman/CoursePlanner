import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function getCourseNumber(course){
    return course.id.substring(1);
  }
  
function getCourseMeetsString(course){
const meetingDetails = course.meets.split(' ');
return `${meetingDetails[0]}\n${meetingDetails[1]}`
}

const Course = ({course}) => (
<TouchableOpacity style={styles.courseButtonStyle}>
    <Text style={styles.courseTextStyle}>
    {`CS ${getCourseNumber(course)}\n${getCourseMeetsString(course)}`}
    </Text>
</TouchableOpacity>
);

const styles = StyleSheet.create({
  courseButtonStyle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    //adding min and max width, min and max height (instead of just height and width) to avoid auto-resizing in few cases
    minHeight: 100,
    maxHeight: 100,
    minWidth: 100,
    maxWidth: 100,
    //width and height set as 100 based on visual layout on iOS
    backgroundColor: '#66b0ff'
  },
  courseTextStyle: {
    color: '#fff',
    // font size set to 11 since it gives best visual output across web and iOS app
    fontSize: 11,
    textAlign: 'center'
  }
});

export default Course;
