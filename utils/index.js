import scheduleScreenStyles from './ScheduleStyles';
import courseScreenStyles from './CourseFormStyles';
import getSchedule from './Schedule';
import {getUser, canEdit} from './User';
import UserContext from './UserContext';
import {getTermCourses, checkIfConflict, getCourseTerm, getCourseNumber, getCourseMeetsString, getSelectedCourseDetails, courseValidationSchema} from './Course';

const styles = {
  scheduleScreen: scheduleScreenStyles,
  courseDetailScreen: courseScreenStyles,
  courseEditScreen: courseScreenStyles
}

export {
  styles,
  UserContext,
  getUser,
  canEdit,
  getSchedule,
  getTermCourses,
  checkIfConflict,
  getCourseTerm,
  getCourseNumber,
  getCourseMeetsString,
  getSelectedCourseDetails,
  courseValidationSchema
};
