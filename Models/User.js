 


export   default class  User{
//private 
#id = 0;
#firstName ='';
#lastName ='';
#email  ='';
#telephone ='';
#order=[];

constructor(id ,firstName, lastName,email ,telephone ,order){
    this.#id = id;
    this.#firstName =firstName;
    this.#lastName =lastName;
    this.#email =email;
    this.#telephone =telephone;
    this.#order= order;
}
get id(){return this.#id; }
get firstName(){return this.#firstName;}
get lastName(){ return this.#lastName;}
get email(){ return this.#email;}
get telephone(){ return this.#telephone;}
get order(){ return this.#order;}
}