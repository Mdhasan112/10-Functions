'use strict';

/*
///////////////////////////////////////////
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 90;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
////////////////////////////////////////////
*/

/*
////////////////////////////////////////////
const flight = 'LH123';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 125458754,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 125458754) {
    alert('Checked in');
  } else {
    alert('Wrong Passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(jonas);
checkIn(flight, jonas);
////////////////////////////////////////////
*/

/*
////////////////////////////////////////////
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

console.log(upperFirstWord('my name is Hasan'));
//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

//js uses callback all the time
const high5 = function () {
  console.log('❤');
};
document.body.addEventListener('click', high5);
/////////////////////////////////////////
*/

/*
////////////////////////////////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHay = greet('Hey');
greeterHay('Jonas');
greeterHay('milton');

greet('Hello')('Jonas');

//Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');
/////////////////////////////////////////
*/
