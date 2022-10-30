// Hot Topics of OOPS here: proto, prototype, class ....

const user = {
    firstName : "AdarsH",
    lastName : "Rawat",
    email : "Adarshrawat8304@gmail.com",
    age: 2, 
    address: "House Number, Colony, pincode, state", 
    about: function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18: function(){
        return this.age >= 18;
    }
}