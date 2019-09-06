import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup( () => {} )











// class Person
// {
//   constructor(name = 'Anonymous', age = 0)
//   {
//     this.name = name;
//     this.age = age;
//   }
//   getGreeting()
//   {
//     //return 'Hi! I am ' + this.name + ".";
//     return `Hi I am ${this.name}.`;     //the key to the left of 1  back tick
//   }
//   getDescription()
//   {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// class Employee extends Person
// {
//   constructor(name, age, title)
//   {
//     super(name, age);
//     this.title = title;
//   }
//   hasJob()
//   {
//     return !!this.title;
//   }
//   getGreeting()
//   {
//     if(this.title){
//       return `Hi I am ${this.name}. I work as a ${this.title}`;
//     }else{
//       return super.getGreeting();
//     }
//   }
// }
// class Programmer extends Person
// {
//   constructor(name, age, language = "assembly")
//   {
//     super(name, age);
//     this.language = language;
//   }
//   getGreeting()
//   {
//     return `Hi I am ${this.name}. I am a(n) ${this.language} developer.`;
//   }
// }
// let me = new Programmer('Juntao', 26);
// console.log(me.getGreeting());
