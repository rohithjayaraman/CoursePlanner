import { StyleSheet } from 'react-native';

const container = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#66b0ff'
}

const field = {
  height: 40,
  width: 300,
  padding: 5,
  backgroundColor: 'white',
  textAlign: 'center'
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
  fontWeight: 'bold'
}

export default StyleSheet.create({
  container,
  field,
  fieldContainer,
  label,
});