import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

function getCourseNumber(course){
  return course.id.substring(1);
}

function getCourseMeetsString(course){
  const meetingDetails = course.meets.split(' ');
  return `${meetingDetails[0]}\n${meetingDetails[1]}`
}

const schedule = {
  title: "CS Courses for 2020-2021",
  courses: [
    {
      id: "W101",
      name: "Fundamentals of Computer Programming",
      meets: "TuTh 15:30-16:20"
    },
    {
      id: "W174",
      name: "Data Structures",
      meets: "MWF 12:00-13:00"
    },
    {
      id: "W213",
      name: "Design and Analysis of Algorithms",
      meets: "TuTh 10:30-11:20"
    },
    {
      id: "W312",
      name: "Advanced Approximation Algorithms",
      meets: "MWF 14:30-15:50"
    }
  ]
};

const Course = ({course}) => (
  <TouchableOpacity style={styles.courseButtonStyle}>
    <Text style={styles.courseTextStyle}>
      {`CS ${getCourseNumber(course)}\n${getCourseMeetsString(course)}`}
    </Text>
  </TouchableOpacity>
);

const CourseList = ({courses}) => (
  <ScrollView>
  <View style={styles.courseListStyle}>
    {courses.map(course => <Course key={course.id} course={course}></Course>)}
  </View>
  </ScrollView>
)

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title}</Text>
)

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title}></Banner>
      <CourseList courses={schedule.courses}></CourseList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32
  },
  courseListStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  courseButtonStyle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    //adding min and max width, min and max height to avoid auto-resizing in few cases
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

export default App;
