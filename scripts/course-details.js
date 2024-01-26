 import {   createCourseDetails, addImageClickHandler, createCourseCard } from './dom.js';
import HttpClient from './http.js';
 
const aboutcourse = document.querySelector('#about-course');

const initPage=async()=> {
    // const loc = location;
    // console.log(loc.search );//få => ?id=1
  
    //get only id-digit

   const courseId = location.search.split('=')[1];
 
    console.log('id',courseId);
    //from DB
    const course = await displayCourseDetails(courseId);
    console.log('course', course );
    // html
    const courseDetails=createCourseDetails(course );
    console.log('html', courseDetails );
    aboutcourse.appendChild(courseDetails);
    // console.log('coursehtml',aboutcourse);
  
    
   
}

async function displayCourseDetails(id) {
  ///pages/course-details.html?id=1
  const url = 'http://localhost:3000/courses/'+id;  
  const http = new HttpClient(url);
  const course = await http.get();    
  return course; 
}

document.addEventListener('DOMContentLoaded', initPage);
