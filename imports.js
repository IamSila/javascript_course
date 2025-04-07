// mathConstants.js
export const pi = 3.14;
export const exp = 2.7;
export const alpha = 0.35;

// .................

// myFile.js
import { pi, exp } from './mathConstants.js' //Named import
console.log(pi); // 3.14
console.log(exp); // 2.7

// mySecondFile.js
import * as constants from './mathConstants.js'
console.log(constants.pi);
console.log(constants.exp);

// Default import exports
// coolNumber.js
const ultimateNumber = 42;
export default ultimateNumber;

// ---------

// myFile.js
import number from './coolNumber'
console.log(number);