//4º Data Types at a Glance - Number - String - Boolean - Null - Undefined - Object - Symbol

// STRINGS
console.log('hello, world');

let email = 'luckystoned@high.af';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log('index of the @ sign:', index);

// common string methods

let email = 'luckystoned@high.af';

//let result = email.lastIndexOf('n');

//let result = email.slice(0,5);

//let result = email.substr(5,12);

//let result = email.replace('m', 'w');

let result = email.replace('n', 'w');

console.log(result);

//-----------

// NUMBERS

let radius = 10;
let pi = 3.14;

// console.log(radius, pi);

// math operators - +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// shorthands
let likes = 10;

// likes = likes + 1;
// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

//-----------

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

let result = 'the blog has ' + likes + ' likes.';
console.log(result);


//-----------

// template strings
const title = 'Best reads of 2020';
const author = 'Luck';
const likes = 30;

// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates

let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);

//-----------

// ARRAYS

let developers = ['suan', 'esasuel', 'siosel'];

// developers[1] = 'ken';
// console.log(developers[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['suan', 'cristal', 30, 20];

// array length
// console.log(developers.length);

// array methods

// let result = developers.join(',');
// let result = developers.indexOf('siosel');
// let result = developers.concat(['ken', 'cristal']);
let result = developers.push('ken');
let result = developers.pop();

console.log(result);
console.log(developers);

//-----------

// NULL & UNDEFINED
let age = null;

console.log(age, age + 3, `the age is ${age}`);

//-----------
  
// BOOLEANS & COMPARATIONS

// console.log(true, false, 'true', 'false');

// methods can return booleans
// let email = 'luckystoned@high.af';
// let names = ['susu', 'savier', 'toad'];

// let result = email.includes('@');
// let result = names.includes('savier');

// console.log(result);

//-----------

// COMPARISION OPERATORS
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = 'suan';

console.log(name == 'suan');
console.log(name == 'suan');
console.log(name > 'cristal');
console.log(name > 'suan');
console.log(name > 'cristal');


let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//-----------

// TYPE CONVERSION
// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean(0);
// let result = Boolean('0');
let result = Boolean('');

console.log(result, typeof result);

//----------------------------