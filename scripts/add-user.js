import HttpClient from './http.js';
import {
  createUserHTMLCard
} from '../forms/html-forms.js';

import {
  convertFormDataToJson
} from './utilities.js';

const form = document.querySelector('#newUserForm');
const cardUser = document.querySelector('#user-form');

const initPage = () => {
  cardUser.appendChild(createUserHTMLCard());
}

const addUser = async (e) => {
  e.preventDefault(); //do not refresh
  // const newuser= await new AppManager().addUser();
  const user = new FormData(form);
  // console.log(...user);
  const obj = convertFormDataToJson(user);
  saveUser(obj);
}

async function saveUser(user) {
  const url = 'http://localhost:3000/users';
  const http = new HttpClient(url);
  await http.add(user);
  location.href = './sign.html'
}

document.addEventListener('DOMContentLoaded', initPage);
//add submit to form 
form.addEventListener('submit', addUser);