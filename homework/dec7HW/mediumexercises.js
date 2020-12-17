
//MEDIUM EXERCISES





//#1 MADLIB

// function madlib (name, subject){
//     return (`${name}'s favorite subjec in school is ${subject}.`)
// }

// console.log(madlib("Jacob", "P.E."));



//#2 TIP CALCULATOR



// function tipCalc (billAmount, levelService){
//     if (levelService == "good"){
//         return .20 * billAmount
//     }
//     else if (levelService == "fair"){
//         return .15 *billAmount
//     }
//     else if (levelService == "bad"){
//         return .10 * billAmount
//     }
//     else{
//         return "Please enter valid Level of service ranking"
//     }

// }

// var tipAmount = tipCalc(100, "good")

// console.log(tipAmount);




//#3 TIP CALCULATOR 2


// function totalAmount(billAmount, levelService){
//     if (levelService == "good"){
//                 return (.20 * billAmount) + billAmount
//             }
//             else if (levelService == "fair"){
//                 return (.15 * billAmount) + billAmount
//             }
//             else if (levelService == "bad"){
//                 return (.10 * billAmount) + billAmount
//             }
//             else{
//                 return "Please enter valid Level of service ranking"
//             }
// }
// var finalBill = totalAmount(120, "bad");

// console.log(`Your total including gratuity is ${finalBill}`);





//#4 PRINT NUMBERS

// function printNumbers(startNum, endNum){
//     while (startNum <= endNum){
//         console.log(startNum);
//         startNum++;
//     }
// }

// console.log(printNumbers(-9, 4));



// function printNumbers(startNum, endNum){
//     for (startNum; startNum <= endNum; startNum ++){
//         console.log(startNum);
//     }
// }

// printNumbers(3, 12)




//#5 PRINT SQUARE


// function printSquare(num){
//     height = 0;
//     while (height <= num){
//         console.log(num * "*");
//         height ++;
//     }
    
// }

// printSquare(9)





//#6 PRINT BOX


// function printBox(x,y) {
//     console.log(` ${"-".repeat(x)} `);
//     var i = 1;
//     while (i <= (y-2)) {
//         console.log(`|${" ".repeat(x)}|`);
//         i++;
//     }
//     console.log(` ${"-".repeat(x)} `);
// }
// printBox(20,10);




//LEETSPEAK


// var str = "Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string."
// function leetspeak(text) {
//     let leet = {
//         a: 4,
//         e: 3,
//         g: 6,
//         i: 1,
//         o: 0,
//         s: 5,
//         t: 7};
//         let newText = "";
//     for (let char of text) {
//         if (Object.keys(leet).includes(char.toLowerCase())) {
//             char = leet[char].toString();
//         }
//         newText = newText.concat(char);
//     }
//     return newText
// }
// console.log(leetspeak(str));





//LONGLONG


// function longLong(word){
//     let vowels = ['a','e','i','o','u']
//     let newWord = ''
//     let prevChar = ''
//     for (let char of word){
//         if (char.toLowerCase() === prevChar && vowels.includes(char)){
//             newWord = newWord + char.repeat(4)
//         } else {
//             newWord = newWord + char
//         }
//         prevChar = char.toLowerCase()
//     }
//     return newWord
// }
// console.log(longLong('Cheese'))