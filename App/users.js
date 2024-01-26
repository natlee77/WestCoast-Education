import AppManager from "./AppManager.js";
import { createUsersList } from "../scripts/dom.js";

const initPage = async() => {        
    const users= await new AppManager().listUsers();
    // const user= await new AppManager().findUser(1);     
   //element by id from HTML
   const usersList = document.querySelector('#users-list'); 
   createUsersList(users , usersList) ;
  
};


document.addEventListener('DOMContentLoaded', initPage);