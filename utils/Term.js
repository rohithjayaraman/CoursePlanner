import {useState} from 'react';

function getCourseTerm(course) {
  return termMap[course.id.charAt(0)];
}

const termMap = {
  F: 'Fall',
  S: 'Spring',
  W: 'Winter'
};

const terms = Object.values(termMap);

function getTermCourses(courses) {
  const [selectedTerm, setSelectedTerm] = useState('Winter');

  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return {
    terms,
    termCourses,
    selectedTerm,
    setSelectedTerm
  }
}

export default getTermCourses;

