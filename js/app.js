'use strict';

var userName = prompt('What is your name?');
// console.log('The user name is ' + userName + '!');

alert('Hello ' + userName + '!');

var codeName = prompt('Is the maker of this website\'s name Jason?').toLowerCase();
// console.log(codeName);

if(codeName === 'yes' || codeName === 'y'){
  alert('Ding! Ding! Ding! We have a winner!');
}

// question two
// DONE - ask question y/n -normalize case
var homeTown = prompt('Do I live in Seattle?').toLowerCase();

// console.log(homeTown);

if(homeTown === 'yes' || homeTown === 'y'){
  // DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  // DONE - if it works, comment out console.log, send alert to user
  // console.log('Yes I live in Seattle.' + userName + ' answered ' + homeTown);
  alert('That\'s Correct!');
} else{
  alert('You\'re wrong!');
}

// question two
// TODO - ask question with yes or no answer, normalize case
// TODO - console.log the answer in a string concatenation IF IT IS CORRECT
// TODO - if it works, comment out console.log, send alert to user

// TODO - change alert: thank user, give meaning message with their name







// var iceCream = prompt('What is your favorite flavour of ice cream?');
// console.log(userName + ' likes ' + iceCream + ' ice cream!');

// alert('Hello ' + userName + ', who loves ' + iceCream + ' ice cream!');

// var topping = prompt('What is your favorite topping?');
// console.log(userName + ' likes ' + iceCream + ' ice cream with ' + topping + '!');

// alert('Hello ' + userName + ', who loves ' + iceCream + ' ice cream with ' + topping + '!');

// var visit = prompt('Where have you always wanted to travel to?');
// console.log(userName + ' likes ' + iceCream + ' ice cream with ' + topping + ' when in ' + visit + '!');

// alert('Hello ' + userName + ', who has always wanted to eat ' + iceCream + ' ice cream with ' + topping + ' in an ice cream shop in ' + visit + '!');
