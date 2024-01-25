import HttpClient from './http.js';
import {
    editCourse
} from '../forms/editCourses.js';
import {
    convertFormDataToJson
} from "./utilities.js";

const editcard = document.querySelector('#contact-form');
const form = document.querySelector('#editCourseForm');
let kursid= 0;
const deletebtn=document.querySelector('#delete');
const initPage = () => {
    editcard.appendChild(editCourse());

    // console.log(location.search); //?id=7
    const courseId = location.search.split('=')[1];
    getById(courseId);
};

const getById = async (id) => {
    kursid=id;
    const url = `http://localhost:3000/courses/${id}`;
    const http = new HttpClient(url);
    const course = await http.get();
    //id editCourseForm
    loadDataToForm(course);
};
// URLSearchParams()-generate query parameters(string)
const loadDataToForm = (course) => {
    // console.log('form-elements', form.elements );

    const entries = new URLSearchParams(course).entries();
    // console.log('ent', ...entries);

    // console.log('entries', ...entries);
    for (let [key, value] of entries) {
        if (key !== 'id') {
            const inne = form.elements[key];
            inne.value = value;
            // console.log(key);
            // console.log(value);
        }
    }
};
const updateCourse = async (e) => {
    e.preventDefault();
    // console.log('uppdaterar');
    const course = new FormData(form);
    console.log(...course);

    const obj = convertFormDataToJson(course);
    //in httpClient.update() for response need URL
    //id ????
    const url = `http://localhost:3000/courses/${kursid}`;
    const http = new HttpClient(url);
    console.log('',url);
    
    await http.update(obj);
    //redirect  
     location.href = './admin.html';
}
const deleteCourse = async () =>{
    const url = `http://localhost:3000/courses/${kursid}`;
    const http = new HttpClient(url);
    await http.delete( );
    //redirect  
    location.href = './admin.html';
}
document.addEventListener('DOMContentLoaded', initPage);
form.addEventListener('submit', updateCourse);
deletebtn.addEventListener('click', deleteCourse);