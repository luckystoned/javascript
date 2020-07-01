//9º OBJETCS LITERALS

let user = {
    name: 'cristal',
    age: 30,
    email: 'cristal@high.af',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.age);

user.age = 35;
console.log(user.age);

console.log(user['name']);
user['name'] = 'siosel';
console.log(user['name']);

console.log(typeof user);

//-----------

// OBJETCS LITERALS & METHODS
let user = {
    name: 'cristal',
    age: 30,
    email: 'cristal@high.af',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        // access the blogs here
    }
};
  
user.login();
user.logout();

const name = 'suan';
name.toUpperCase();

//-----------

// THIS (KEYWORD)

let user = {
    name: 'cristal',
    age: 30,
    email: 'cristal@high.af',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){
      // access the blogs here
      // console.log(this);
      console.log('this user has written these blogs:');
      this.blogs.forEach(blog => {
        console.log(blog);
      })
    }
};
  
// console.log(this);
user.logBlogs();

//-----------

// OBJETCS IN ARRAYS
// const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs[0].title);

let user = {
    name: 'cristal',
    age: 30,
    email: 'cristal@high.af',
    location: 'berlin',
    blogs: [
      {title: 'why mac & cheese rules', likes: 30},
      {title: '10 things to make with marmite', likes: 50}
    ],
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){
      // access the blogs here
      // console.log(this);
      console.log('this user has written these blogs:');
      this.blogs.forEach(blog => {
        console.log(`${blog.title} has ${blog.likes} likes`);
      })
    }
};
  
// console.log(this);
user.logBlogs();

//-----------

// MATH OBJETC

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

//-----------

// PRIMITIVE VAUES

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// REFERENCE VAUES

userOne = { name: 'esasuel', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'siosel';
console.log(userOne, userTwo);