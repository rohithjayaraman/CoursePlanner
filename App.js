import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ScheduleScreen, CourseDetailScreen, CourseEditScreen} from './screens';
import {getUser, UserContext} from './utils';

const Stack = createStackNavigator();

function App(){
  const userDetails = getUser();
  return (
    <UserContext.Provider value={userDetails.user}><NavigationContainer><Stack.Navigator>
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} options={{ headerTitleAlign: 'center', title: 'Schedule'}}></Stack.Screen>
      <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} options={{ headerTitleAlign: 'center', title: 'Course detail'}}></Stack.Screen>
      <Stack.Screen name="CourseEditScreen" component={CourseEditScreen} options={{ headerTitleAlign: 'center', title: 'Course editor'}}></Stack.Screen>
      </Stack.Navigator></NavigationContainer></UserContext.Provider>
  );
}

export default App;
