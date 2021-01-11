import {useState} from 'react';
import * as Yup from 'yup';

const courseValidationSchema = Yup.object().shape({
  id: Yup.string()
    .required()
    .matches(/^(F|W|S)\d{3}(\-\d){0,1}$/, 'Must be a term followed by 3-digit number (and a hypen plus digit for courses that have multiple parts)')
    .label('ID'),
  meets: Yup.string()
    .required()
    .matches(/^(M|Tu|W|Th|F)+ +\d{1,2}:\d{2}\-\d{1,2}:\d{2}$/, 'Must be weekdays followed by start and end time')
    .label('Meeting times'),
  title: Yup.string()
    .required()
    .label('Title'),
});

const termMap = {
  F: 'Fall',
  S: 'Spring',
  W: 'Winter'
};

const terms = Object.values(termMap);

const days = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];

function getTimeInMinutes(time){
  const timeUnits = time.split(':');
  return timeUnits[0]*60 + timeUnits[1];
}

function setCourseTime(course){
  course.days = days.filter(day => course.meets.includes(day));

  const timing = course.meets.split(' ')[1].split('-');
  course.timing = {
    start: getTimeInMinutes(timing[0]),
    end: getTimeInMinutes(timing[1])
  }
}

function checkDayOverlap(days1, days2){
  return days1 && days2 && days2.some(day => days1.includes(day));
}

function checkHourOverlap(timing1, timing2){
  return timing1 && timing2 && Math.max(timing1.start, timing2.start) < Math.min(timing1.end, timing2.end)
}
function checkTimingOverlap(course1, course2){
  return checkDayOverlap(course1.days, course2.days) && checkHourOverlap(course1.timing, course2.timing)
}

function checkCourseConflict(course1, course2){
  return course1.id!==course2.id && getCourseTerm(course1) === getCourseTerm(course2) && checkTimingOverlap(course1, course2);
}

function checkIfConflict(course, selectedCourses){
  if(!course.days){
    setCourseTime(course)
  }
  return selectedCourses.some(selectedCourse => checkCourseConflict(course, selectedCourse))
}

function getCourseTerm(course) {
  return termMap[course.id.charAt(0)];
}

function getCourseNumber(course){
  return course.id.substring(1);
}

function getCourseMeetsString(course){
const meetingDetails = course.meets.split(' ');
return `${meetingDetails[0]}\n${meetingDetails[1]}`
}

function getSelectedCourseDetails(){
  const [selectedCourses, setSelectedCourses] = useState([]);

  function toggleSelection(course){
    setSelectedCourses(selectedCourses.some(selectedCourse => selectedCourse.id === course.id) ? selectedCourses.filter(selectedCourse => selectedCourse.id !== course.id) : [...selectedCourses, course])
  }

  return {
    selectedCourses,
    toggleSelection
  }
}

function getTermCourses(courses) {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return {
    terms,
    termCourses,
    selectedTerm,
    setSelectedTerm
  }
}

export {
  getTermCourses,
  checkIfConflict,
  getCourseTerm,
  getCourseNumber,
  getCourseMeetsString,
  getSelectedCourseDetails,
  courseValidationSchema
};

