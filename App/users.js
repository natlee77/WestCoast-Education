import AppManager from "./AppManager.js";
import { createUsersList } from "../scripts/dom.js";

const initPage = async() => {    
    
    const users= await new AppManager().listUsers();
    const user= await new AppManager().findUser(1);
    console.log('users',users);   
    console.log('user',user);  
   //element by id from HTML
   const usersList = document.querySelector('#users-list');
   console.log('users',usersList);
   createUsersList(users , usersList)

   ;
   //add click event in list
//    const cardsList=document.querySelectorAll('#users-list div ');//=>nodelist
//    cardsList.forEach(card=>{
//        card.addEventListener('click',selectedCard)
//    })
};


document.addEventListener('DOMContentLoaded', initPage);