//8º FUNCTIONS & Methods

// FUNCTIONS DECLARATIONS
function greet(){
    console.log('hello there');
}
  
// FUNCTIONS EXPRESSIONS
const speak = function(){
    console.log('good day!');
};

// greet();
// greet();

speak();

//-----------

// ARGUMENTS & PARAMETERS

const speak = function(name = 'savier', time = 'night'){
    onsole.log(`good ${time}, ${name}!`);
};

// speak('susu', 'morning');
// speak();
speak('suan');

//-----------

// RETURN STATEMENS

// const speak = function(name, time){
//   console.log(`good ${time}, ${name}!`);
// };

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}

const area = calcArea(5);
console.log('area is:', area);

//-----------

// ARROW FUNCTIONS

// REGULAR FUNCTIONS
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// ARROW FUNCTION
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);

// practise ARROW FUNCTIONS

// const greet = function(){
//   return 'hello, world';
// }

const greet = () => 'hello, world';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(greet());
console.log(bill([10,15,30], 0.2));

//-----------

// FUNCTIONS & METHODS
const name = 'suan';

// function

const greet = () => {
  return 'hello';
};

let resultOne = greet();
console.log(resultOne);

// method

let resultTwo = name.toUpperCase();
console.log(resultTwo);

//-----------

// CALLBACKS & FOREACH
let people = ['susu', 'savier', 'esasuel', 'suan', 'siosel'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

people.forEach(logPerson);

//-----------

// CALLBACKS & FUNCTIONS 
const ul = document.querySelector('.people');

const people = ['susu', 'savier', 'esasuel', 'suan', 'siosel'];

let html = ``;

people.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;


//----------------------------