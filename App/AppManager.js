import HttpClient from "../scripts/http.js";
import User from "../Models/User.js";

export   default class AppManager{
    async listUsers(){ 
        const url='http://localhost:3000/users';
        
        try{
            const http = new HttpClient(url);          
            const data = await http.get();
           
            //prepear data packet 
            const users = data.map(data => {
                return new User(
                     data.id,
                     data.firstName, 
                     data.lastName, 
                     data.email,  //som i JSON
                     data.telephone ,
                     data.order
                     );
                     
                     
            });
            
            
             return users;
            
        } catch (error) {     
            throw new Error(`problem to get data ${response.status} ${response.statusText}`);
          }
    }
    async findUser(userId){
        const url=`http://localhost:3000/users/${userId}`;
            try{
                 const http = new HttpClient(url);
                 const data = await http.get();
                // return data ;  
                const user = new User(
                    data.id,
                    data.firstName, 
                    data.lastName, 
                    data.email,  //som i JSON
                    data.telephone ,
                    data.order
                    );  
                 return user; 
                 console.log(user);
                     
            } catch (error) {     
                throw new Error(`problem to get data ${response.status} ${response.statusText}`);
              }
             
    }
}
