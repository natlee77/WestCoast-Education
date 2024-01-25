export const createUser = () => {
    const form1 = document.createElement('form');
    const form1Id = document.createAttribute('id');
    form1Id.value = 'newUserForm';
    form1.setAttributeNode(form1Id);

    //________FirstName
    const divFirstName = document.createElement('div');
    divFirstName.classList.add('form-control');
    const labelFirstName = document.createElement("label");
    labelFirstName.htmlFor = "firstName";
    labelFirstName.textContent = "FirstName";
    const input1 = document.createElement("input");
    input1.type = "firstName";
    input1.name = "firstName";
    input1.id = "firstName";
    input1.placeholder = 'First Name'
    form1.appendChild(divFirstName);
    divFirstName.appendChild(labelFirstName);
    divFirstName.appendChild(input1);

    //________LastName
    const divLastName = document.createElement('div');
    divLastName.classList.add('form-control');
    const labelLastName = document.createElement("label");
    labelLastName.htmlFor = 'lastName';
    labelLastName.textContent = "LastName";
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.name = "lastName";
    input2.id = "LastName";
    input2.placeholder = 'LastName'
    form1.appendChild(divLastName);
    divLastName.appendChild(labelLastName);
    divLastName.appendChild(input2);
    //________Email
    const divEmail = document.createElement('div');
    divEmail.classList.add('form-control');
    const labelEmail = document.createElement("label");
    labelEmail.htmlFor = 'email';
    labelEmail.textContent = "Email";
    const input3 = document.createElement("input");
    input3.type = "text";
    input3.name = "email";
    input3.id = "email";
    input3.placeholder = 'Email'
    form1.appendChild(divEmail);
    divEmail.appendChild(labelEmail);
    divEmail.appendChild(input3);
    
    //_________Telephone   
    const divTelephon = document.createElement('div');
    divTelephon.classList.add('form-control');
    const labelTelephon = document.createElement("label");
    labelTelephon.htmlFor = 'telephone';
    labelTelephon.textContent = "Telephone";
    const input6 = document.createElement("input");
    input6.type = "text";
    input6.name = "telephone";
    input6.id = "telephone";
    input6.placeholder = 'Telephone'
    form1.appendChild(divTelephon);
    divTelephon.appendChild(labelTelephon);
    divTelephon.appendChild(input6);
//_________adress street    
const divStreet = document.createElement('div');
divStreet.classList.add('form-control');
const labelStreet = document.createElement("label");
labelStreet.htmlFor = 'street';
labelStreet.textContent = "Street";
const input7 = document.createElement("input");
input7.type = "text";
input7.name = "street";
input7.id = "street";
input7.placeholder = 'Street'
form1.appendChild(divStreet);
divStreet.appendChild(labelStreet);
divStreet.appendChild(input7);
//_________adress   Postindex
const divPostindex = document.createElement('div');
divPostindex.classList.add('form-control');
const labelPostindex = document.createElement("label");
labelPostindex.htmlFor = 'postindex';
labelPostindex.textContent = "Postindex";
const input8 = document.createElement("input");
input8.type = "text";
input8.name = "postindex";
input8.id = "postindex";
input8.placeholder = 'Postindex'
form1.appendChild(divPostindex);
divPostindex.appendChild(labelPostindex);
divPostindex.appendChild(input8);
//_________adress   City
const divCity = document.createElement('div');
divCity.classList.add('form-control');
const labelCity = document.createElement("label");
labelCity.htmlFor = 'city';
labelCity.textContent = "City";
const input9 = document.createElement("input");
input9.type = "text";
input9.name = "city";
input9.id = "city";
input9.placeholder = 'City'
form1.appendChild(divCity);
divCity.appendChild(labelCity);
divCity.appendChild(input9);
 //________border
const border = document.createElement('div');
border.classList.add('outset');
 form1.appendChild(border);
    //________Login
    const divLogin = document.createElement('div');
    divLogin.classList.add('form-control');
    const labelLogin = document.createElement("label");
    labelLogin.htmlFor = 'login';
    labelLogin.textContent = "Login";
    const input4 = document.createElement("input");
    input4.type = "text";
    input4.name = "login";
    input4.id = "login";
    input4.placeholder = 'Create login'
    form1.appendChild(divLogin);
    divLogin.appendChild(labelLogin);
    divLogin.appendChild(input4);
    //____Password
    const divPassword = document.createElement('div');
    divPassword.classList.add('form-control');
    const labelPassword = document.createElement("label");
    labelPassword.htmlFor = 'password';
    labelPassword.textContent = "Password";
    const input5 = document.createElement("input");
    input5.type = "text";
    input5.name = "password";
    input5.id = "password";
    input5.placeholder = 'Create password'
    form1.appendChild(divPassword);
    divPassword.appendChild(labelPassword);
    divPassword.appendChild(input5);
    //button
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.type = "submit";
    btn.textContent = "Send";
    form1.appendChild(btn);
    return form1;
   
};
 

 