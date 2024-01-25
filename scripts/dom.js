/*******************************************************************************/
// DOM Manipulering
/*******************************************************************************/
//Card for gallery display
const createCard = (course) => {
  const div = document.createElement('div');
  div.classList.add('course-image');
  div.appendChild(createImage(course.imageUrl, course.id));
  div.appendChild(createCourseInfo(course));

  return div;
};
//card for 1 course
const createCourseCard = (course) => {
  const div = document.createElement('div');
  div.classList.add('course-image');
  // div.appendChild(createImage(course.imageUrl, course.id));
  div.appendChild(createCourseInfo(course));

  return div;
};
const createImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', `../content/images/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const createCourseInfo = (course) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(`${course.title} - ${course.type} - start ${course.start}`)
  );

  return paragraph;
};
// courses list desing in administration
const createCoursesList = (courses,element) => {
  courses.forEach(course=>{     
    const container= createDiv();
    container.setAttribute('kursId',course.id);
    container.appendChild(createSpan(course.title));
    container.appendChild(createSpan(course.type));
    container.appendChild(createSpan(`Start: ${course.start}`));
    container.appendChild(createSpan(`Lenght: ${course.days} dags `));
    element.appendChild(container); 
    });  
};
const createUsersList = (users,element)=>{ 
  users.forEach(user=>{    
    const container= createDiv();
    container.setAttribute('userId',user.id);
    container.appendChild(createSpan(`student:  ${user.firstName} ${user.lastName} --`));
    container.appendChild(createSpan( user.email));
    container.appendChild(createSpan( ` -- tel:  ${user.telephone} `));
    // container.appendChild(createSpan(` Adress: ${user.street} ${user.city} ${user.postIndex} -- `)); 
     container.appendChild(createSpan(`-- bokad kurs: ${user.order[0].title   }   `));
    // console.log(user.order[0].title  );
    
    element.appendChild(container); 
    });  
  };  
const createDiv=( )=>{   
  return document.createElement('div');;
};
const createSpan = (text) => {
  const span = document.createElement('span');
  span.innerText = text;
  return span;
}
//event on image click
const addImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute('src');
    const courseId = image.getAttribute('id');

    image.addEventListener('click', () => {         
      //  console.log(location);// click =>  href:"/pages/gallery.html"
       //query string
        location.href = `/pages/course-details.html?id=${courseId}`;
    });
  });
};

// Exportera createCard och addImageClickHandler
// namngiven export
export { createCard, addImageClickHandler, createCoursesList, createCourseCard, createUsersList  };
