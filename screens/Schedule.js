import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {Banner, CourseList} from '../components';
import {getSchedule, styles, UserContext, canEdit} from '../utils';

function Schedule ({navigation}) {
  const user = useContext(UserContext);

  const schedule = getSchedule();

  function viewCourse(course){
      navigation.navigate(canEdit(user)? 'CourseEditScreen' : 'CourseDetailScreen', {course});
  }

  return (
    <SafeAreaView style={styles.scheduleScreen.container}>
      <Banner title={schedule.title}></Banner>
      <CourseList courses={schedule.courses} view={viewCourse}></CourseList>
    </SafeAreaView>
  );
}

export default Schedule;