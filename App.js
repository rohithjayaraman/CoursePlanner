import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ScheduleScreen, CourseDetailScreen, CourseEditScreen, LoginScreen} from './screens';
import {getUser, UserContext, SignInButton, styles} from './utils';

const Stack = createStackNavigator();

function App(){
  const userDetails = getUser();
  //setting schedule screen title alignment as left to optimise UI on mobile when logged in user email ID is displayed
  return (
    <UserContext.Provider value={userDetails.user}><NavigationContainer><Stack.Navigator>
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} options={({navigation}) => ({ headerTitleAlign: 'left', headerRightContainerStyle: styles.loginScreen.signInHeader, title: 'Schedule', headerRight: () => (<SignInButton navigation={navigation} user={userDetails.user}></SignInButton>)})}></Stack.Screen>
      <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} options={{ headerTitleAlign: 'center', title: 'Course detail'}}></Stack.Screen>
      <Stack.Screen name="CourseEditScreen" component={CourseEditScreen} options={{ headerTitleAlign: 'center', title: 'Course editor'}}></Stack.Screen>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerTitleAlign: 'center', title: 'Login/Register'}}></Stack.Screen>
      </Stack.Navigator></NavigationContainer></UserContext.Provider>
  );
}

export default App;
