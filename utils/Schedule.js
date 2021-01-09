import React, {useState, useEffect} from 'react';

function getSchedule(){
  const [schedule, setSchedule] = useState({title: '', courses: []});
  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';
  useEffect(() => {
    async function fetchSchedule() {
      const response = await fetch(url);
      if (!response.ok) {
        throw response;
      }
      const scheduleJSON = await response.json();
      setSchedule(scheduleJSON);
    };
    fetchSchedule();
  })
  //returning schedule since App.js requires schedule to send values to Banner, CourseList
  return schedule;
}

export default getSchedule;
