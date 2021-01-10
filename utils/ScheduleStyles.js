import {StyleSheet} from 'react-native';

const container = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 10
}

const banner = {
  color: '#888',
  fontSize: 32
}

const courseListContainer = {
  alignItems: 'center'
}

const courseButton = {
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  padding: 10,
  //adding min and max width, min and max height (instead of just height and width) to avoid auto-resizing in few cases
  minHeight: 100,
  maxHeight: 100,
  minWidth: 100,
  maxWidth: 100,
  //width and height set as 100 based on visual layout on iOS
}

const courseButtonUnselected = {
  ...courseButton,
  backgroundColor: '#66b0ff'
}

const courseButtonSelected = {
  ...courseButton,
  backgroundColor: '#004a99'
}

const courseButtonDisabled = {
  ...courseButton,
  backgroundColor: '#d3d3d3'
}

const courseText = {
  color: '#fff',
  // font size set to 11 since it gives best visual output across web and iOS app
  fontSize: 11,
  textAlign: 'center'
}

const courseSelector =  {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const termButton = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 50,
  padding: 10,
  minWidth: 90,
  maxWidth: 90
}

const termSelector = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 350,
}

const termButtonActive = {
  ...termButton,
  backgroundColor: '#105f25',
}
const termButtonInactive = {
  ...termButton,
  backgroundColor: '#4f9f64',
}

const termText = {
  color: '#fff',
  fontSize: 15,
}

export default StyleSheet.create({
  banner,
  container,
  courseButtonSelected,
  courseButtonUnselected,
  courseButtonDisabled,
  courseText,
  courseSelector,
  courseListContainer,
  termSelector,
  termButtonActive,
  termButtonInactive,
  termText
})
