import {   createCourseDetails } from './dom.js';
import HttpClient from './http.js';
import {   getAllUsers,   getFromLocalStorage } from './utilities.js';
 

 const aboutcourse = document.querySelector('#about-course');
 const orderButton = document.querySelector('#order-btn');


 const initPage = async () => {
   const courseId = location.search.split('=')[1];
   //from DB
   const course = await displayCourseDetails(courseId);
   // html
   const courseDetails = createCourseDetails(course);
   aboutcourse.appendChild(courseDetails);
   //ska lägga till inloggat user till course-> .append(user)
   
  //  await addUsertoCourse(courseId); 

   // Display Users som ordered course
   //kan inte anropa det in course Details  ?????
   const users = course.users;
   users.forEach(user => {
     const studentName = `${user.firstName} ${user.lastName}`;
     console.log('student:', studentName);
     return studentName;
   })
  //  orderButton.addEventListener('submit', OrderAction);
   console.log('btn', orderButton);

  // await  OrderAction(courseId);
  // await addUsertoCourse(courseId); 




  const user =  await foundUserbyEmail();
  console.log('user', user);
//course      
  const url = `http://localhost:3000/courses/${courseId}`;
  const http = new HttpClient(url);
  // const course = await http.get();
  console.log('course', course.users);
  const courseAddUser = course.users.push(user); ///////////error
  console.log('courseadd', courseAddUser);
  const obj = JSON.stringify(courseAddUser);  
   
  
  await http.update(obj);







 }
 async function displayCourseDetails(id) {
   ///pages/course-details.html?id=1
   const url = 'http://localhost:3000/courses/' + id;
   const http = new HttpClient(url);
   const course = await http.get();
   return course;
 }

 const OrderAction = async (courseId) => {
   const userfinns = getFromLocalStorage();
   if (userfinns) {
     console.log(userfinns[0]);
     await addUsertoCourse(courseId); 
   } else {
     //redirect  /pages/gallery.html
     location.href = '../pages/user/sign.html'
   }
 }

 const addUsertoCourse = async (id) => {
   //userID???
        const user = await foundUserbyEmail();
        console.log('user', user);
   //course      
        const url = `http://localhost:3000/courses/${id}`;
        const http = new HttpClient(url);
        const course = await http.get();
        console.log('user', course);
        const courseAddUser= course.users.push(user); /////////ERORRR
        const obj = JSON.stringify(courseAddUser);  
         
        
        await http.update(obj);
     //redirect  
     //  location.href = './admin.html';


 }
 const foundUserbyEmail = async () => {
   const users = await getAllUsers();
    // console.log('',users);  

   const userfinns = getFromLocalStorage();

   if (userfinns) {
      //  console.log(userfinns[0]);
       const foundUser = users.find(
       (u) => u.email.trim() === userfinns[0]);
      //  console.log('foundUser',foundUser   );
       return foundUser;
     }
   }


 
 document.addEventListener('DOMContentLoaded', initPage);
