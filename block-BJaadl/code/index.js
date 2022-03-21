let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(array) {
  return [...array].sort((a,b) => a.length - b.length).pop();
}
findLongestWord(words);

// - Convert the above array "words" into an array of length of word instead of word.
let newLength = words.map((w) => w.length);

console.log(newLength);

// - Create a new array that only contains word with atleast one vowel.
function checkVowel(words){
  return words.toLowerCase().includes("a")||words.toLowerCase().includes("e")||words.toLowerCase().includes("a")||
  words.toLowerCase().includes("i")||words.toLowerCase().includes("u")
}
let vowelFilter = words.filter((w) => checkVowel(w));

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.

function checkVowel(elm) {
  return elm.toLowerCase().includes("a") || elm.toLowerCase().includes("e") ||elm.toLowerCase().includes("i") ||elm.toLowerCase().includes("o") ||elm.toLowerCase().includes("u") 
}
let newVowel = words.filter( elm => checkVowel(elm[elm.lenth -1]));
// - Create a new array that contianse   words not ending with vowel
let notENdingWithVowel = words.filter((w) => !checkVowel(w)[w.length-1]);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

let  sumArray = numbers.reduce((acu,cv) =>  acu+cv ,0 )

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let newArray = numbers.map((num) => num  * 3 )

// - Create a new array that contains only even numbers
let evenNum = numbers.filter((num) => num % 2 === 0);

// - Create  a new array that contains only odd numbers.
let OddNum = numbers.filter((num) => num % 2 !== 0);

// - Create a new array that should have true for even number and false for odd numbers.
let againArray = numbers.map(num => num % 2 === 0 ? true : false);

// - Sort the above number in assending order.
let sortArray = numbers.sort((a,b) => a-b)
// [...numbers].sort((a, b) => a - b )

// - Does sort mutate the original array?
// yes

// - Find the sum of the numbers in the array.
let sum = numbers.reduce((a,b) => a+b,0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(array){
return(
  array.reduce((acc,cv)=> {
    acc = acc + cv;
    return acc;
  },0)/ array.length
)

}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];


// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(array){
return(words.map((w) => w.length).reduce
 ((acc,cv)=> {
  acc = acc + cv;
  return acc;
},0)/ array.length
);
}