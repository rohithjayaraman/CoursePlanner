import React, {useState, useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import {firebase} from './firebase';
import loginStyles from './LoginFormStyles';
import * as Yup from 'yup';

const userValidationSchema = Yup.object().shape({
  email: Yup.string().required('Please enter a valid email').email().label('Email'),
  password: Yup.string().required().min(6, 'Password must have at least 6 characters').label('Password'),
  confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Confirmation password must match password'),
});

function getUser() {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      function handleData(snapshot) {
        setUser({uid: auth.uid, ...snapshot.val()});
      }
      db.on('value', handleData, error => alert(error));
      return () => { db.off('value', handleData); };
    } else {
      setUser(null);
    }
  }, [auth]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  return {
    user,
    setUser
  }
}

function canEdit(user){
  return user && user.role === 'admin';
}

function SignInButton({navigation, user}){
  if(user && user.uid){
    return (
    <View>
      <Text>Hi,{firebase.auth().currentUser?.email}</Text>
      <Button style={loginStyles.signInButton} title="Logout" color="#448aff" onPress={() => firebase.auth().signOut()}></Button>
    </View>)
  }
  else{
    return <Button style={loginStyles.signInButton} title="Sign In" color="#448aff" onPress={() => navigation.navigate('LoginScreen')}></Button>
  }
}

function getLoginSubmitAndErrorHandler(navigation){
  const [signInError, setSignInError] = useState('');

  async function handleLogin(values) {
    const { email, password } = values;
    setSignInError(null);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('ScheduleScreen');
    } catch (error) {
      setSignInError(error.message);
    }
  }
  
  async function handleSignUp(values) {
    const { email, password } = values;
    setSignInError(null);
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('ScheduleScreen');
    } catch (error) {
      setSignInError(error.message);
    }
  }
  
  function handleSubmit(values) {
    return values.confirm ? handleSignUp(values) : handleLogin(values);
  }

  return {
    signInError,
    handleSubmit
  }
}

export {
  getUser,
  canEdit,
  SignInButton,
  userValidationSchema,
  getLoginSubmitAndErrorHandler
};
