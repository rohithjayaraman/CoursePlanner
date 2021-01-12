import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native'
import {userValidationSchema, getLoginSubmitAndErrorHandler, styles} from "../utils";
import {Form} from '../components';

function LoginScreen({ navigation }) {
  const {signInError, handleSubmit} = getLoginSubmitAndErrorHandler(navigation);

  return (
    <SafeAreaView style={styles.loginScreen.container}>
      <ScrollView>
        <Form initialValues={{email: '', password: '', confirm: ''}} validationSchema={userValidationSchema} onSubmit={handleSubmit}>
          <Form.Field name="email" leftIcon="email" placeholder="Enter email" autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress"></Form.Field>
          <Form.Field name="password" leftIcon="lock" placeholder="Enter password" autoCapitalize="none" autoCorrect={false} secureTextEntry={true} textContentType="password"></Form.Field>
          <Text style={styles.loginScreen.registrationText}>Re-enter your password below if you are registering as a new user</Text>
          <Form.Field name="confirm" leftIcon="lock" placeholder="Confirm password" autoCapitalize="none" autoCorrect={false} secureTextEntry={true} textContentType="password"></Form.Field>
          <Form.Button title={values => values.confirm ? 'Register' :'Login'} navigation={navigation}></Form.Button>
          {<Form.ErrorMessage error={signInError} visible={true}></Form.ErrorMessage>}
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
