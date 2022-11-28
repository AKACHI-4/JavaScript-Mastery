export class Person{ 
    constructor(fname,lname,age){
        this.firstName = fname; 
        this.lastName = lname; 
        this.age = age;
    }

    info(){ 
        console.log(this.firstName, this.lastName, this.age); 
    }
}

export class Person2{ 
    constructor(fname,lname,age){
        this.firstName = fname; 
        this.lastName = lname; 
        this.age = age;
    }

    info(){ 
        console.log(this.firstName, this.lastName, this.age); 
    }
}

const hare = "Hare Krishna"; 
export default hare;