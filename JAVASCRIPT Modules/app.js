import {firstName} from './utils/fname.js';
import {age} from './utils/age.js';
import greet, {Person,Person2} from './utils/person.js'

console.log(firstName, age);

const p1 = new Person("Adarsh","Rawat",18); 
p1.info(); 
