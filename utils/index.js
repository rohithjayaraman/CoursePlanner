import scheduleScreenStyles from './ScheduleStyles';
import courseScreenStyles from './CourseFormStyles';
import loginScreenStyles from './LoginFormStyles';
import getSchedule from './Schedule';
import {getUser, canEdit, SignInButton, userValidationSchema, getLoginSubmitAndErrorHandler} from './User';
import UserContext from './UserContext';
import {firebase} from './firebase';
import {getTermCourses, checkIfConflict, getCourseTerm, getCourseNumber, getCourseMeetsString, getSelectedCourseDetails, getSubmitAndErrorHandler, courseValidationSchema} from './Course';

const styles = {
  scheduleScreen: scheduleScreenStyles,
  courseDetailScreen: courseScreenStyles,
  courseEditScreen: courseScreenStyles,
  loginScreen: loginScreenStyles
}

export {
  styles,
  firebase,
  UserContext,
  getUser,
  canEdit,
  SignInButton,
  getSchedule,
  getTermCourses,
  checkIfConflict,
  getCourseTerm,
  getCourseNumber,
  getCourseMeetsString,
  getSelectedCourseDetails,
  getSubmitAndErrorHandler,
  getLoginSubmitAndErrorHandler,
  courseValidationSchema,
  userValidationSchema
};
