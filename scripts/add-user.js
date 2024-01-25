import HttpClient from './http.js';
import { createUser } from '../forms/registrate.js';
 

// const form = document.querySelector('#addCourseForm');
const cardUser=document.querySelector('#user-form'); 
function initPage() { 
  cardUser.appendChild(createUser());  
  }
 
  function addUser(e) {
      e.preventDefault();//do not refresh

  //  create new object (user)..
  const user={         
     firstName : user.firstName ,
     lastName:user.lastName  ,
     telephone:user.telephone,
     street:user.street,
     postIndex : user.postIndex,
     city:user.city,
     email : user.email,
     password : user.password,        
  };
  console.log('add',user);
     saveUser(user);
}

async function saveUser(user) {
  const url = 'http://localhost:3000/users/';
  // console.log('url',url);
  const http = new HttpClient(url);

  const newUser = await http.add(user);
  // console.log(newCourse);
}

document.addEventListener('DOMContentLoaded', initPage);
//add submit to form 
// form.addEventListener('submit', addCourse);
