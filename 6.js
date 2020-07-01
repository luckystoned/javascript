//6º CONDITIONALS
// IF STATEMENTS
// const age = 25;

// if(age > 20){
//   console.log('you are over 20 years old');
// }

// const developers = ['suan', 'esasuel', 'siosel', 'yoshi'];

// if(developers.length > 3){
//   console.log("that's a lot of developers!");
// }

const password = 'p@ssword';

if(password.length >= 8){
    console.log('that password is long enough');
}

//-----------


//LOGICAL OPERATORS

// ELSE IF STATEMENTS
const password = 'p@ssword123456';

if(password.length >= 12){
  console.log('that password is mighty strong');
} else if(password.length >= 8){
  console.log('that password is long enough');
} else {
  console.log('password should be at least 8 characters long');
}

const password = 'p@ss12';

if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
  console.log('that password is strong enough');
} else {
  console.log('that password is not strong enough');
}

//-----------

// LOGICAL NOT
const user = false;

if(!user){
  // do something
  console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

//-----------

// BREAK & CONTINUE

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue;
  }

  console.log('your score:', scores[i]);

  if(scores[i] === 100){
    console.log('congrats, you got the top score!');
    break;
  }

}


//-----------

// using if statements
// if(grade === 'A'){

// } else if(grade === 'B'){

// } else if(grade === 'C'){

// } else if(grade === 'D'){

// } else if(grade === 'E'){

// } else {

// }

// SWITCH STATEMENTS
const grade = 'D';

switch(grade){
  case 'A':
    console.log('you got an A!');
    break;
  case 'B':
    console.log('you got a B!');
    break;
  case 'C':
    console.log('you got a C!');
    break;
  case 'D':
    console.log('you got a D!');
    break;
  case 'E':
    console.log('you got an E!');
    break;
  default:
    console.log('not a valid grade');
}

//-----------