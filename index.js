
// const {generateRandomNumber, celciusToFahreinheit} = require('./utils')

// console.log(`Random Number: ${generateRandomNumber()}`)
// console.log(`Celcius to fahreinheit: ${celciusToFahreinheit(0)}`)

import getPosts, {getPostsLength} from "./PostController.js";
console.log(getPosts());
console.log(`posts length: ${getPostsLength()}`)