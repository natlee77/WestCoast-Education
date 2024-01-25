import HttpClient from "./http.js";
import {createCoursesList } from "./dom.js";

const initPage = async() => {
    
    const url='http://localhost:3000/courses';
    const http =  new HttpClient(url);
    const courses= await http.get();
   //element by id from HTML
   const coursesList = document.querySelector('#courses-list');
    createCoursesList(courses , coursesList)
   ;
   //add click event in list
   const cardsList=document.querySelectorAll('#courses-list div ');//=>nodelist
   cardsList.forEach(card=>{
       card.addEventListener('click',selectedCard)
   })
};
const selectedCard = (event)=>{
    let kursId = 0;
    //target- localName  === div||span
    //   console.log(event.target.localName);

    if (event.target.localName === 'div'){
        kursId = event.target.getAttribute('kursId');
         console.log(kursId);
    }else if (event.target.localName === 'span'){
        kursId = event.target.parentElement.getAttribute('kursId');
        console.log(kursId);
    }
     //redirect => to edit.html
     location.href = `./edit-course.html?id=${kursId}`;
}


document.addEventListener('DOMContentLoaded',initPage);