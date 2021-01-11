import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Form} from '../components';
import {styles, courseValidationSchema} from '../utils';

function CourseEditScreen({ route }) {
  const course = route.params.course;

  return (
    <SafeAreaView style={styles.courseEditScreen.container}>
      <ScrollView>
        <Form initialValues={{id: course.id, meets: course.meets, title: course.title}} validationSchema={courseValidationSchema}>
          <Form.Field style={styles.courseEditScreen.formField} name="id" leftIcon="identifier" placeholder="F110" autoCapitalize="none" autoFocus={true}></Form.Field>
          <Form.Field style={styles.courseEditScreen.formField} name="meets" leftIcon="calendar-range" placeholder="MTh 12:00-13:50" autoCapitalize="none"></Form.Field>
          <Form.Field style={styles.courseEditScreen.formField} name="title" leftIcon="format-title" placeholder="Introduction to programming"></Form.Field>
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseEditScreen;
