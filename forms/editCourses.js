 
export const editCourse = () => {
    const form = document.querySelector('#editCourseForm');     
      
    form.appendChild(creatediv('title'));
    form.appendChild(creatediv('number'));
    form.appendChild(creatediv('days'));
    form.appendChild(creatediv('price'));
    form.appendChild(creatediv('type'));
    form.appendChild(createImg());       
    form.appendChild(createDesc()); 
    form.appendChild(createBtn('Update'));
   
    return form;
};
export const createCourse = () => {
    const form = document.querySelector('#addCourseForm');
    form.appendChild(creatediv('title'));
    form.appendChild(creatediv('number'));
    form.appendChild(creatediv('days'));
    form.appendChild(creatediv('price'));
    form.appendChild(creatediv('type'));
    form.appendChild(createImg());       
    form.appendChild(createDesc()); 
    form.appendChild(createBtn('Add'));
   
    return form;
}
const createBtn=(text)=> {
    const divbtn=document.createElement("div");   
    divbtn.classList.add('form-control');  
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.type = "submit";
    btn.textContent = text;
     
    divbtn.appendChild( btn);
    
    return divbtn;
}
const creatediv=(text)=>{
    const div  = document.createElement('div');
    div .classList.add('form-control');
    const label  = document.createElement(text);
    label.htmlFor = text;
    label.textContent = text;
    //<span class="errorField">Fältet är ej korrekt ifylld!</span>
    const span = document.createElement('span');
    span.classList.add('errorField');
    span.textContent = "The field is not filled in correctly!";
    const input = document.createElement("input");
    input.type = "text";
    input.name = text;
    input.id = text;
    input.placeholder = text;
    
    div.appendChild(label);
    div.appendChild(input);
    return div;
}
const createImg = ( )=>{
    //_________Image     
    const divImg = document.createElement('div');
    divImg.classList.add('form-control');
    const label = document.createElement("label");
    label.htmlFor = 'imageUrl';
    label.textContent = "Image";
    const input = document.createElement("input");
    input.type = "text";
    input.name = "imageUrl";
    input.id = "imageUrl";
    input.value='no-bild.jpg';
   
    divImg.appendChild(label);
    divImg.appendChild(input);

    return divImg;
}
const createDesc=( )=>{
    //__________description   
    const divDescription = document.createElement('div');
    divDescription.classList.add('form-control');
    const labelDescription = document.createElement("label");
    labelDescription.htmlFor = 'description';
    labelDescription.textContent = "Description";
    const textarea = document.createElement("textarea");     
    textarea.name = "description";   
    textarea.id = "description";
    textarea.cols ="30";
    textarea.rows ="10";    
    textarea.placeholder = 'course description';
    divDescription.appendChild(labelDescription);
    divDescription.appendChild(textarea); 
    return divDescription;
}
 