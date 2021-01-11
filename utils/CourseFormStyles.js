import { StyleSheet } from 'react-native';

const container = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#66b0ff',
  width: '100%'
}

const field = {
  height: 40,
  width: 300,
  padding: 5,
  backgroundColor: 'white',
  textAlign: 'center',
  fontSize: 15
}

const fieldContainer = {
  marginBottom: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
  alignItems: 'center'
}

const label = {
  fontWeight: 'bold',
  fontSize: 15
}

const formField = {
  width: 300,
  fontSize: 16,
  textAlign: 'center'
}

export default StyleSheet.create({
  container,
  field,
  fieldContainer,
  label,
  formField
});