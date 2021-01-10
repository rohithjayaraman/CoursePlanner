import scheduleScreenStyles from './ScheduleStyles';
import courseDetailScreenStyles from './CourseDetailStyles';
import getSchedule from './Schedule';
import {getTermCourses, checkIfConflict, getCourseTerm, getCourseNumber, getCourseMeetsString, getSelectedCourseDetails} from './Course';

const styles = {
  scheduleScreen: scheduleScreenStyles,
  courseDetailScreen: courseDetailScreenStyles
}

export {
  styles,
  getSchedule,
  getTermCourses,
  checkIfConflict,
  getCourseTerm,
  getCourseNumber,
  getCourseMeetsString,
  getSelectedCourseDetails
};
