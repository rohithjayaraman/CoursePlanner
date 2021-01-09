import React from 'react';
import {SafeAreaView} from 'react-native';
import {Banner, CourseList} from './components';
import {getSchedule, styles} from './utils';

const App = () => {
  const schedule = getSchedule();
  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title}></Banner>
      <CourseList courses={schedule.courses}></CourseList>
    </SafeAreaView>
  );
}

export default App;
