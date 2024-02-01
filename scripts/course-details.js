import {
  createStudentsDetails,
  createCourseDetails
} from './dom.js';
import HttpClient from './http.js';
import {
  getAllUsers,
  getFromLocalStorage
} from './utilities.js';


const aboutcourse = document.querySelector('#about-course');
const orderBtn = document.getElementById('order-btn');
const students = document.getElementById('students');

const initPage = async () => {
  const courseId = location.search.split('=')[1];
  //from DB
  const course = await displayCourseDetails(courseId);
  // html
  const courseDetails = createCourseDetails(course);
  aboutcourse.appendChild(courseDetails);
  //  lägga till inloggat user till course   
  await OrderAction(courseId);
  await UsersOrderedCourse(courseId);
}


async function displayCourseDetails(id) {
  ///pages/course-details.html?id=1
  const url = `http://localhost:3000/courses/${id}`;
  const http = new HttpClient(url);
  const course = await http.get();
  return course;
}

const OrderAction = async (courseId) => {
  const userfinns = getFromLocalStorage();
  if (userfinns) {
    await addUsertoCourse(courseId);
  } else {
    //redirect  /pages/gallery.html
    location.href = '../pages/user/sign.html'
  }
}

const addUsertoCourse = async (id) => {
  try {
    //userID 
    const user = await foundUserbyEmail();
    //fetch course      
    const url = `http://localhost:3000/courses/${id}`;
    const http = new HttpClient(url);
    const course = await http.get();
    // Update course with user
    // const updatedCourse = { ...course, users: [...course.users, user] };
    const res = await http.updatePatch(course, user);
    console.log('Updated course:', res);
    return res;
    //redirect  
    location.href = './admin/listUser.html';
  } catch (error) {
    console.error('Error adding user to course:', error);
    throw error;
  } 
}

const foundUserbyEmail = async () => {
  const users = await getAllUsers();
  const userfinns = getFromLocalStorage();
  if (userfinns) {
    const foundUser = users.find(
      (u) => u.email.trim() === userfinns[0]);
    return foundUser;
  } else {
    location.href = './admin/sign.html';
  }
}

// Display Users som ordered course
const UsersOrderedCourse = async (id) => {
  const url = `http://localhost:3000/courses/${id}`;
  const http = new HttpClient(url);
  const course = await http.get();
  const users = course.usersBokade
  users.forEach(user => {
   createStudentsDetails(user, students)
  })
}


console.log('btn', orderBtn);
document.addEventListener('DOMContentLoaded', initPage);
orderBtn.addEventListener('submit', OrderAction);