// import User from "../Models/User";
export default class HttpClient {
  // private
  #url = '';

  constructor(url) {
    this.#url = url;
  }

  // Generell metod     
  async get() {   
    try {         
      // Försöka kontakta vårt api 
      const response = await fetch(this.#url);
        
      if (response.ok) {
        // Läser in datat  ifrån response{o}- async             
         const result = await response.json();
         return result;        
          
      } else {
        //if bad request 400-fysisk
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {     
      throw new Error(`Error in  get(): ${error}`);
    }
  }
//
  async add(data) {     
    try {
        const response = await fetch(this.#url, {
          //post metod--skapa fetch paket
          method: 'POST',
          //vi tala att vi skicka till server Json formaterat
         headers: {
          'Content-Type': 'application/json',
         },
         //skicka   data som string
         body: JSON.stringify(data),
        });

      if (response.ok) {
          const result = await response.json();
        
        //  return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Error in add metod : ${error}`);
      
    }
  }
  async update(data) {
    try {       
      const response = await fetch(this.#url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
          const result = await response.json();
        
          return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Error in update metod: ${error}`);
    }
  }
  async updatePatch(course,user) {
    
    const updatedCourse   =  course.users.includes(user)
    
    ? course.users
    : [  course.users  ,   user  ]; 
   console.log('user--- ', ...course.users  ) 
   
    try {       
      const response = await fetch(this.#url, {
       
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCourse ),
      });
      if (response.ok) {
          const result = await response.json();        
         
          return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Error in update metod: ${error}`);
    }
  }
  async delete(data) {
    try {
      const response = await fetch(this.#url, {
        method: 'DELETE',
      });
      // if (response.ok) {
      //    const result = await response.json();
      //   //
      //     return result;
      // } else {
      //   throw new Error(`${response.status} ${response.statusText}`);
      // }
    } catch (error) {
      throw new Error(`Error in delete metod: ${error}`);
    }
  }
 
}
