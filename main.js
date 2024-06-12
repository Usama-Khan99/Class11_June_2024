// Revision of for loop 
// Assignment (While loop)
// while loop
var i = 0;
// while (i > 0){
//     console.log('Inside while loop');
// }
// do while loop
// jbb koi kam bar bar karna ho lkn first time uska krna laxmi ho tou do while loop use karygy
do {
    console.log("Inside do while");
} while (i > 0);
// for or while loop pehly condition check karty h phr kam karty h
//  do while pehly kam karta h phr condition check karta h
// 5 star ka pattern banana h using do while loop // Assignment (nested do whhile loop use hoga)
// Assignment For-of Loop 
// Distructuring of array 
var grocery = ['Atta', 'Cheeni', 'CHawal', 'Basin'];
// agr hum chahty h k is list m sy koi item nikal k us ko seperate deal kary
// let item1 = grocery[0]; // agr chota array h tou ye method use kar sakty h
//lkn agr hamary paas array m 100 elements h or hum chahty h k shuru k 3 elements ko alag variable m deal kary
var item1 = grocery[0], item2 = grocery[1], item3 = grocery[2];
console.log(item1);
console.log(item2);
console.log(item3);
console.log(grocery);
// Objects (slide no 237)
// Additional information of value of array 
// Objects m value curly brackets m di jati h 
// here name is a attribute/property of a person 
// Objects k ander order matter nh karta, array k ander order matter karta h
// types k ander ek value dusri value sy seperate hoti h using semicolon ;
// Objects and array both are called data structure 
var person = {
    name: "Usama",
    age: 25,
    home: "B540",
    mostLovedCity: 'Karachi'
};
// value m value seperate hoti h using coma ,
console.log(person);
// agr hum chahty h k is object m sy koi ek attribute access kary tou 
console.log(person.home); //ye kehlata h . notation k xariye value access karna
console.log(person['name']); // ye kehlata h square bracket notation k xariye value access karna
// agr kisi property ki value ko overwrite/update/modify karna ho tou 
person.name = 'Usama Javed Khan';
console.log(person.name);
// agr 2 value access karna ho tou 
console.log(person.name, person.age, person.mostLovedCity);
// array k ander agr kisi aysi property ko access kary jou mojood na ho tou error nh ayga undefined dyga
// Object m error dyga
// agr object ki her property ko access karna ho tou 
// tou for in loop use hoga 
// (for in object ki iteration chalata h)
// for of array ki iteration chalat h 
// second assignment for in loop 
// Type Alias in TypeScript (Important topic related to Exams)
// Here we use Alias as a nickname 
//Is topic ka javascript sy koi talluq nh h ye srf typescript m h
var person1 = {
    name: "Usama",
    age: 25,
    height: 5,
};
var person2 = {
    name: "Javed",
    age: 44,
    height: 6,
};
var person3 = {
    name: "Khan",
    age: 52,
    height: 5,
};
var person4 = {
    name: "Usama",
    age: 52,
    height: 5
};
var person5 = {
    name: "Javed",
    age: 52,
    height: 5
};
var person6 = {
    name: "Khan",
    age: 52,
    height: 5
};
// Type Alias in Function 
var add = function (num1, num2) { return num1 + num2; };
var subtract = function (num1, num2) { return num1 - num2; };
add(1, 4);
var add1 = function (num1, num2) { return num1 + num2; };
var subtract1 = function (num1, num2) { return num1 - num2; };
var result = add1(1, 4);
var result1 = subtract(1, 4);
console.log(result, result1);
