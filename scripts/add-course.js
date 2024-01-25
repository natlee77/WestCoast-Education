import HttpClient from './http.js';
import { createCourse } from '../forms/editCourses.js';
import { convertFormDataToJson} from "./utilities.js";
 
const form = document.querySelector('#addCourseForm');
const card=document.querySelector('#contact-form')
function initPage() { 
  card.appendChild(createCourse());  
  }
 
  function addCourse(e) {
      e.preventDefault();//do not refresh
    
  //  create new object (course)..
  const course = new FormData(form);
    // console.log(...course);
  const obj = convertFormDataToJson(course);   
     saveCourse(obj);
}

async function saveCourse(course) {
  const url = 'http://localhost:3000/courses/';
  // console.log('url',url);
  const http = new HttpClient(url);

    await http.add(course);
  // redirect
  location.href='./admin.html'
}

document.addEventListener('DOMContentLoaded', initPage);
//add submit to form 
 form.addEventListener('submit', addCourse);
