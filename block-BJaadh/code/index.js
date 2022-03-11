// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers

console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push("Called"));
console.log(strings.push( "sentence"));

// console.log(strings.push("Called", "sentence"));

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '));

// - Remove the first word in the array (strings)
console.log(strings.unshift());

// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter((strings) => strings.includes("is"));


// - Find all the words that contain 'is' use string method 'indexOf'
let allIsWell= strings.filter((string)=>
string.indexOf("is")!== -1);

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every ((num)=> num% 3 === 0);

// -  Sort Array from smallest to largest
[...numbers].sort((a,b) => a-b );

// - Remove the last word in strings
console.log(strings.pop());

// - Find largest number in numbers
let largest = [...numbers].sort((a,b) => a-b).pop();

// - Find longest string in strin;
let smallest = [...strings].sort((a,b) => a-b);

// - Find all the even numbers)

let evenNumbers = [...numbers].filter((num) => num % 3 === 0);
console.log(evenNumbers);

// - Find all the odd numbers
let oddNumbers = [...numbers].filter((num) => num % 3 !== 0);
console.log(oddNumbers);

// - Place a new word at the start of the array use (unshift)
console.log(strings.unshift("new word"));

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.splice(3,6)) 

// - Make a subset of strings array ['a','collection']

console.log(strings.splice(1,3));
// - Replace 12 & 18 with 1221 and 1881
number.map ((num) => {
  if (num === 12){
    return 1221;
  }else if(num === 0){
    return 1881;
  }else{
    return num;
  }
});

// - Replace words in strings array with the length of the word
let stringLength = strings.map((num) => strings.length);

// - Find the sum of the length of words using above question
stringLength.reduce((acc,length) => {
  acc = acc+length;
  return acc;
},0)

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filterCustomer =customers.filter((customer)=>
customer.firstname.startsWith( 'j'));

// - Create new array with only first name
let firstNameCustomers= customers.map((customer)=> customer.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")
let fullNameCustomers= customers.map((customer)=> 
`${customer.firstname} ${customer.lastname}`);


// - Sort the array created above alphabetically
[...fullNameCustomers].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer = customers.filter((customer)=> {
  if( customer.firstname.toLowerCase().includes("a")||
  customer.firstname.toLowerCase().includes("e") ||
  customer.firstname.toLowerCase().includes("i")||
  customer.firstname.toLowerCase().includes("o")||
  customer.firstname.toLowerCase().includes("u")
  ) { return true ;
}else{
  return false;
}
});
