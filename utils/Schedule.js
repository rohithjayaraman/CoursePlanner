import {useState, useEffect} from 'react';
import {firebase} from '../utils/firebase';

function fixCourseFormat(json){
  return {
    ...json,
    courses: Object.values(json.courses)
  }
}

function getSchedule(){
  const [schedule, setSchedule] = useState({title: '', courses: []});
  useEffect(() => {
    const db = firebase.database().ref();
    function handleData(snapshot) {
      if (snapshot.val()) setSchedule(fixCourseFormat(snapshot.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);
  //returning schedule since App.js requires schedule to send values to Banner, CourseList
  return schedule;
}

export default getSchedule;
