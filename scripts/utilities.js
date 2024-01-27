export const convertFormDataToJson = (formData) => {
  const data = Object.fromEntries(formData.entries());
 

  return data;
};


//______________Local Storage

// add to Local Storage
export const addToLocalStorage = (user) => {
  const users = getFromLocalStorage();
  users.push(user);
  //setItem som tar 2 argument key:value
  localStorage.setItem('westcoast users', JSON.stringify(users));

};
// get from Local Storage

export const getFromLocalStorage = () => {
  let users;
  if (localStorage.getItem('westcoast users') === null) {
      users = [];
  } else {
     users = JSON.parse(localStorage.getItem('westcoast users'));
  }
  return users;
};

 