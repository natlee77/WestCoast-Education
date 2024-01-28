import { addToLocalStorage } from "./utilities.js";
import { getAllUsers } from "./utilities.js";
const loginButton = document.getElementById('login_button');
//login_form
const initPage = () => {
   
}

const logInHandler = async (e) => {
    e.preventDefault();     
    const users = await getAllUsers();  
    const foundEmail  = users.find(
        (u ) => u.email.trim()  === `${ email.value}`);

    if (foundEmail) {
        console.log("found user email");       
        const foundPassword = users.find(
            (user) => user.password.trim()  === `${ password.value}` );
            if (foundPassword) {
                console.log("found user password");
                addToLocalStorage(email.value);
                //redirect  /pages/gallery.html
                location.href = '../gallery.html'   
            } else {
                console.log('not found user password');
            }    
    } else {
        console.log('not found user email');
    }
};


document.addEventListener('DOMContentLoaded', initPage);
loginButton.addEventListener('click', logInHandler);