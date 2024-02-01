import { createCard, addImageClickHandler } from './dom.js';
import HttpClient from './http.js';

const gallery = document.querySelector('#courses-gallery');

async function initPage() {
  const courses = await loadCourses();   
  
  courses.forEach((course) => {
    gallery.appendChild(createCard(course));
  });

  // Hämta in alla bilder 
  const images = document.querySelectorAll('.course-image img');
  // knyt en klick händelse till varje bild..
  addImageClickHandler(images); 
}

const loadCourses = async () => {
  const url = 'http://localhost:3000/courses/';
  // Skapat en instans av HttpClient class(http.js)
  const http = new HttpClient(url);
  //   http.get() -- med await/(err-Promise {<pending>}-glömt  await)
  const courses = await http.get();
    
    return courses;
};

document.addEventListener('DOMContentLoaded', initPage);
