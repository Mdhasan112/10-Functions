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

/*
////////////////////////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

//Call method
lufthansa.book(630, 'hasan');
lufthansa.book(555, 'David Jonas');
console.log(lufthansa);

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'HN',
  bookings: [],
};
lufthansa.book.call(euroWings, 255, 'jonas');
lufthansa.book.call(lufthansa, 255, 'vinal');
console.log(euroWings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
lufthansa.book.call(swiss, 542, 'Warner');
console.log(swiss);

//Apply method
const flightData = [578, 'George Cooper'];
lufthansa.book.apply(swiss, flightData); //bad way
console.log(swiss);

//or
lufthansa.book.call(swiss, ...flightData); //best way

//Bind method
const book = lufthansa.book;
// book.call(euroWings, 255, 'jonas');

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(254, 'Smith');

const bookMN = book.bind(euroWings, 23);
bookMN('William');
bookMN('Stock');
bookMN('Warner');

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
///////////////////////////////////////
*/

/*
///////////////////////////////////////
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log('This will never run again');
})();

//or
(() => console.log('This will also never run again'))();
////////////////////////////////////////
*/
