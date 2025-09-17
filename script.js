
//Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.
//solution ---
// let arr = [1,2,3,4,5,6,7,8]
// let sqauareElement = arr.map((element) => element * element);
// console.log(sqauareElement)

//Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// let studentsScore = (score) => {
//   return score >= 90
//     ? " grade A"
//     : score >= 80
//     ? " grade B"
//     : score >= 70
//     ? " grade C"
//     : score >= 60
//     ? " grade D"
//     : " grade F";
// };

// console.log(studentsScore(90))
// console.log(studentsScore(40));


//Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.


//solution--

// const car = {
//   companyName: "Tata ratan",
//   model: "tata",
//   year: 2025,

//   changeYear(newyear) {
//     this.year = newyear;
//   }
// };

// car.changeYear(2030)

// let { companyName, model, year, changeYear } = car;
// console.log(year)
// console.log(model)

//Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let primeNumbers = numbers.filter((prime) => {
//   return prime % 2=== 0;
// });
// console.log(primeNumbers);

//qQ5 -  State different use cases of map, filter and reduce functions.
// map()--------

// Purpose: Creates a new array by applying a function to each element of the original array (length stays the same).
// Use cases:
// Doubling or squaring numbers
// Converting strings to uppercase
// Extracting specific properties from objects (like names from a list of users)
// -- as you can see question 1

// filter() — Select Specific Elements

//  Creates a new array with only those elements that pass a condition (length may be shorter).
// Use cases:
// Selecting only even numbers
// Getting users with age ≥ 18
// Filtering out prime numbers
// example== quesstion 4

//  reduce() — Combine All Elements Into One Value
//  Reduces all elements of an array to a single value (like a number, string, or object).

// Calculating the sum or product of numbers
// Finding the maximum or minimum value
// s
// ex--
// const nums = [1, 2, 3, 4];
// const total = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(total);



//
//Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.


// let users = async (user) => {
//   try {
//     let data = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
//     data = await data.json();
//     console.log(data);
//   } catch (error) {
//     console.log(`fetching users data ${error}`);
//   }
// };
// users(1);





//Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.


// Nested object
const person1 = {
  name: "sinchan",
  address: {
    city: "noida",
    country: "India"
  },
  contact: {
    phone: "123-456-7890",
    email: "sinchan@example.com"
  }
};

const phoneNumber = person1.contact?.phone;

console.log("Phone Number:", phoneNumber);

const person2 = {
  name: "dora",
  address: { 
    city: "Paris" 
}
};

const phone = person2.contact?.phone;

console.log("Phone Number:", phone); 
