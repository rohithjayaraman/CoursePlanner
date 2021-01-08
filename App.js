import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Banner, CourseList} from './components';
import {schedule} from './utils';

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
  }
});

export default App;
