import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import {styles} from '../utils';

function Field({label, value}) {
  return (
    <View style={styles.courseDetailScreen.fieldContainer}>
      <Text style={styles.courseDetailScreen.label}>{label}</Text>
      <Text style={styles.courseDetailScreen.field}>{value}</Text>
    </View>
  );
};

function CourseDetailScreen({route}) {
  const course = route.params.course;

  return (
    <SafeAreaView style={styles.courseDetailScreen.container}>
      <ScrollView>
        <Field label="ID" value={course.id} />
        <Field label="Meeting times" value={course.meets} />
        <Field label="Title" value={course.title} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;
