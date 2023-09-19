function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentRoman = s[i];
        const currentVal = romanToIntMap[currentRoman];

        if (currentVal < prevValue) {
            result -= currentVal;
        } else {
            result += currentVal;
        }

        prevValue = currentVal;
    }

    return result;
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
const romanNumeral = "MCMXCIV"; // Example Roman numeral
const intValue = convertToRoman(romanNumeral);
console.log(intValue);

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
