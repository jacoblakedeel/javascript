//#1 POSITIVE NUMBERS

// var myArr = [-6, 78, -99, 123, -45];

// var posArr = myArr.filter(function(num){

//     return num >= 0;
// })
// console.log(posArr);





//#2 EVEN NUMBERS

// var myArr1 = [1, 45, 65, 76, 89, 100];

// var evenArr = myArr1.filter(function(num){

//     return num % 2 === 0;
// })

// console.log(evenArr);




//#3 SQUARE THE NUMBERS


// var myArr2 = [3, 6, 7, 9];

// var squareArr = myArr2.map(function(num){

//     return num * num;
// })

// console.log(squareArr);



//#4 CITIES 1

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];


// var cityTemps = cities.filter(function(obj){

//     return obj.temperature > 70;
// })

// console.log(cityTemps);




// //#5 CITIES 2 Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.


// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];



// var cityNames = cities.map(function(obj){

//     return obj.name;
// })

// console.log(cityNames);




//#6 GOOD JOB!

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var goodJob = people.map(function(obj){

//     return `Good Job ${obj}!`
// })

// console.log(goodJob);




//#7 SORT AN ARRAY


// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];


// var alphaPeople = people.sort();

// console.log(alphaPeople);



//REVERSE ALPHABETICAL

// var newPeople = people.sort(function(a, b){
//     if (a > b){
//         return -1;
//     }if (a < b){
//         return 1;
//     }else{
//     return 0;
//     }
//     })
// console.log(newPeople);






//#8 SORT AN ARRAY 2

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];


// var newPeople = people.sort(function(a, b){
//     if (a.length > b.length){
//         return -1;
//     }if (a < b){
//         return 1;
//     }else{
//     return 0;
//     }
//     })
// console.log(newPeople);








//#9 SORT AN ARRAY 3

//sort by the sum of the inner array
// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6],
//   ];
//   //arr = [4, 20, 9]
//   function sum(arr) {
//     let sumResult = arr.reduce(function (acc, currentValue) {
//       return acc + currentValue; // acc = acc + currentValue
//     }, 0);
//     return sumResult;
//   }
//   function sortArr(arr){
//       arr.sort(function(a, b){
//           return sum(a) - sum(b)  //a= 8,  b= 20
//       })
//   }
//   sortArr(arr)










//#10 3 TIMES

// function call3Times(fun){
//     fun(console.log("Hello World!");); fun(); fun(); }

// function fun(){
//     console.log("Hello World");
// }
// function callthreetimes(newfun){
//     newfun();
//     newfun();
//     newfun();
// }
// callthreetimes(fun);






    //#11 N TIMES

    // var callNTimes = 










    //#12 SUM AN ARRAY

    // sumArr = [3, 4, 6];




    







    //#13 ACRONYM

    var arr1 = ['very', 'important', 'person']
    var arr2 = ['national', 'aeronautics', 'space', 'administration']
    var acronym = arr1.reduce(function(acc, currentVal){
        lower =  acc + currentVal[0];
        upper = lower.toUpperCase();
        return upper
    }, '')
    console.log(acronym);


