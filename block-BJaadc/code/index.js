let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] ifs [length]`

console.log(`The length of "${message}" is ${message.length}.`);

// Log the character at index 0 of the variable message like `The first character of [message] is [character]`

let firstChar = message[0];
console.log(firstChar);

// Log the last character of message using length like `The last character of [message] is [character]`

console.log(message.charAt(message.length - 1));


// Log the index of word "you" in message

console.log(`Index of 'you' in the (${message}) is '${message.indexOf('you')}'`)

/*
undefined
let message = "If you are still thinking the answer is no!";
console.log(message.indexOf("you"));
VM3893:2 
*/

// Log the index of word "still" in message

console.log(`Index of 'Still' in the (${message}) is ${message.indexOf("still")}`);

// Log the index of word "answers" in message
let message = "If you are still thinking the answer is no!";
console.log(message.indexOf("answer")); // 30

// console.log(`Index of 'still' in the (${message}) is ${message.indexOf("answers")}`);

// Log true or false based on whether the word "answers" exist in message or not

console.log(message.includes('answer'));

// Log true or false based on whether the word "they" exist in message or not


console.log(message.includes('they'));

// Log true or false based on whether the word "is" exist in message or not

console.log(message.includes('is'));

// Log true or false based on whether the word "Is" exist in message or not


console.log(message.includes('Is'));

// Check and log whether the word from index 3 to 6 is "you" or not (use slice)


if(message.slice(3, 6) === "you"){
    console.log(message.slice(3, 6));
}

// Check and log whether the word from index 7 to 8 is "a" or not


if(message.slice(7,8) === "a"){
    console.log(message.slice(7,8));
}

// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)

if(message.slice(-3) === "no!"){
    console.log(message.slice(-3));
}
console.log(message.slice(-3) === "no!");

// Check and log whether the last 5 character in message is "no!" or not

if(message.slice(-5) === "no!"){
    console.log(message.slice(-5));
}


console.log(message.slice(-5) === "no!");
// Log the message variable, all in lowecase

console.log(message.toLowerCase(""));

// Log the message variable, all in uppercase

console.log(message.toUpperCase(""));

// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.

let newMessage = message.replace("are","can't")
console.log(newMessage);


// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

console.log(message.replace("still",""));


let newMessage = message.replace("still", "");
console.log(newMessage);

// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

let newMessage = message.replace("thinking", "decide");
console.log(newMessage);

// Log all the characters from the message variable (you can user for..of loop on string)

for (let msg of message.substring()) {
    console.log(msg);
}


// Split all the words in message (split by " " space) and store it in a variable messageArray

const newArray = message.split("");

// Log all the words of messageArray

for(let word of messageArray){
console.log(word);
}