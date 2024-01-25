 import { createCourseCard, addImageClickHandler } from './dom.js';
import HttpClient from './http.js';
 
const aboutcourse = document.querySelector('#about-course');

function initPage() {
    // const loc = location;
    // console.log(loc.search );//få => ?id=1

    //get only id-digit
  const courseId = location.search.split('=')[1];
  const courseCard= displayCourseDetails(courseId);    
      
  console.log(  courseCard);
  aboutcourse.appendChild(createCourseCard(courseCard));
    
   
}

async function displayCourseDetails(id) {
  ///pages/course-details.html?id=1
  const url = 'http://localhost:3000/courses/'+id;
    //  console.log('url',url);
  const http = new HttpClient(url);
  const course = await http.get();    
  console.log('course',course);
  
}

document.addEventListener('DOMContentLoaded', initPage);
