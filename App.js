import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ScheduleScreen, CourseDetailScreen} from './screens';

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer><Stack.Navigator>
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} options={{ headerTitleAlign: 'center', title: 'Schedule'}}></Stack.Screen>
      <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} options={{ headerTitleAlign: 'center', title: 'Course detail'}}></Stack.Screen>
    </Stack.Navigator></NavigationContainer>
  );
}

export default App;
