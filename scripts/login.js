const loginButton = document.getElementById('login_button');
//login_form
const initPage = () => {
    console.log('init');
}

const logInHandler = async (e) => {
    e.preventDefault();
    // console.log('login');
    const users = await getAllUsers();
    console.log('users', users
    );

    const foundEmail  = users.find(
        (u ) => u.email.trim().toLowerCase() === `${ email.value}`);

    if (foundEmail) {
        console.log("found user email");
       
        const foundPassword = users.find(
            (user) => user.password.trim().toLowerCase() === `${ password.value}` );
            if (foundPassword) {
                console.log("found user password");
                //redirect  /pages/gallery.html
                location.href = '../gallery.html'   
            } else {
                console.log('not found user password');
            }    
    } else {
        console.log('not found user email');
    }
};
const getAllUsers = async () => {
    try {
        const url = 'http://localhost:3000/users';

        const response = await fetch(url);

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            console.log('error');
        }
    } catch (error) {
        console.log(error);
    }
};



document.addEventListener('DOMContentLoaded', initPage);
loginButton.addEventListener('click', logInHandler);