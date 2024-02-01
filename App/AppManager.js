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
                 //create {user}
                const user = new User(
                    data.id,
                    data.firstName, 
                    data.lastName, 
                    data.email,  //som i JSON
                    data.telephone ,
                     
                    );  
                 return user; 
               
                     
            } catch (error) {     
                throw new Error(`problem to get data ${response.status} ${response.statusText}`);
              }
             
    }
    // async addUser(){ 
    //     const url='http://localhost:3000/users';
        
    //     try{
    //         const http = new HttpClient(url);
    //         //prepear data packet  ?????????
    //         const user  
    //         //= new FormData(form);
    //           =data.map(data => {
    //             return new User(
    //                  data.id,
    //                  data.firstName, 
    //                  data.lastName, 
    //                  data.email,  //som i JSON
    //                  data.telephone ,
    //                  );
    //         });            
            
    //         await http.add(user);  
            
    //     } catch (error) {     
    //         throw new Error(`problem to get data ${response.status} ${response.statusText}`);
    //       }
    // }
}
