 import {   createCourseDetails } from './dom.js';
 import HttpClient from './http.js';
 import {   getFromLocalStorage } from './utilities.js';


 const aboutcourse = document.querySelector('#about-course');
 const  orderButton = document.getElementById('order-btn');
 

 const initPage = async () => {
   const courseId = location.search.split('=')[1];
   //from DB
   const course = await displayCourseDetails(courseId);
   // html
   const courseDetails = createCourseDetails(course);
   aboutcourse.appendChild(courseDetails);


   // kan inte anropa det in course Details
   const users = course.users;
   users.forEach(user => {
     const studentName = `${user.firstName} ${user.lastName}`;
     console.log('s---', studentName);
     return studentName;

   })
   console.log('', orderButton);
   orderButton.addEventListener('click', OrderAction);
 }
 async function displayCourses() {
   const url = 'http://localhost:3000/courses ';
   const http = new HttpClient(url);
   const courses = await http.get();
   return courses;
 }
 async function displayCourseDetails(id) {
   ///pages/course-details.html?id=1
   const url = 'http://localhost:3000/courses/' + id;
   const http = new HttpClient(url);
   const course = await http.get();
   return course;
 }


 const OrderAction = async (e) => {
   e.preventDefault();
   const userfinns = getFromLocalStorage();
   if (userfinns) {
     console.log(userfinns)
   } else {
     //redirect  /pages/gallery.html
     location.href = '../pages/user/sign.html'
   }


 }

 document.addEventListener('DOMContentLoaded', initPage);
 