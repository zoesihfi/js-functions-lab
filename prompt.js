//Prompt 1: Write a function, using function keyword, named greeting. 
//When invoked, greeting should print the string 'hey there'
console.log("Prompt 1: ")
function greeting () {
    return('hey there')
}
console.log(greeting())
//Prompt 2: Write a function that can reverse a number.
console.log("Prompt 2: ")
function reverse(n) {
    n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse(23))
//Prompt 3: Write a function that checks whether the passed 
//string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward ex: madam
console.log("Prompt 3: ")
function isPalindromic(str) {
    return str == str.split('').reverse().join('');
}
console.log(isPalindromic('racecar'))
//Prompt 4:
//function alphaOrder( 'webmaster')
//Output : 'abeemrstw'
console.log("Prompt 4: ")
function alphaOrder(str) {

}
//Prompt 5: Create a function named changeToLowerCase that accepts a 
//string as a parameter and converts letters of each word of the string 
//to lowercase.
console.log("Prompt 5: ")
function changeToLowerCase(str) {
   return str.toLowerCase()
}
console.log(changeToLowerCase('SaLly SeLls SeA ShelLs'))

//Prompt 6: Make a function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase.
    //Example:
        //function changeToUpperCase('sally sells sea shells')
        //output: 'Sally Sells Sea Shells'
        console.log("Prompt 6: ")
        function changeToUpperCase(str) {
            return(str.toUpperCase())
        }
        console.log(changeToUpperCase('sally sells sea shells'))

//Prompt 7: Make a function that accepts a string as a parameter and find the longest word within the string.
    //"Welcome to the developmental shop provided by Code Differently".
    //Longest Word: "developmental"
    console.log("Prompt 7: ")
        function longestWordInString(str) {
            var strSplit = str.split(' ');
            var longestWordLength = 0;
                for(var i = 0; i < strSplit.length; i++){
                    if(strSplit[i].length > longestWordLength){
                        longestWordLength = strSplit[i].length;
                        longestWord = strSplit[i]
                    }
                }
            return longestWord;
        }
    console.log(longestWordInString('Welcome to the developmental shop provided by Code Differently'))
//Prompt 8: Create a function that takes two parameters: a and b. 
//When called, multiply a times b. Print the answer to the console.
console.log("Prompt 8: ")
function multiply(a, b) {
    return  a * b
}
console.log(multiply(4, 5))
//Prompt 9: Make an array of your choosing and write a function that 
//returns the array.
console.log("Prompt 9: ")
var elements = ['Code', 'Differently']
function array(arr) {
    return arr
}
console.log(array(elements))

//Prompt 10: Write a function to find the repeated character in a string.
console.log("Prompt 10: ")
function repeatedChar(str) {
    const result = [];
  const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
  
  if (strArr != null) {
    strArr.forEach((elem) => {
      result.push(elem[0]);
    });
  }
  return result;
}     
console.log(repeatedChar('Happy Birthday'))

//Write a function named calculateDogAge that:
//takes 1 argument: your puppy's age.
//calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//outputs the result to the screen like so: "Your doggie is _ years old in dog years!"
//Call the function three times with different sets of values. 
console.log("Prompt 11: ")
function calculateDogAge(age) {
    return (`Your doggie is ${age * 7} years old in dog years!`)
    
}

console.log(calculateDogAge(8))
console.log(calculateDogAge(3))
console.log(calculateDogAge(11))

