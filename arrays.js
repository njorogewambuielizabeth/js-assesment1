// 1. Write a function that takes in a string and returns it when reversed
// let food = “eating”
function reverseString(string) {
  return string.split("").reverse().join("");
}

let food = "eating";
let reversedFood = reverseString(food);

console.log(reversedFood); 

//2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function getTarget(num,target){
    if(num.includes(target)){
      console.log(target);
    }
    else{
       console.log(null);
    }

}
let num = [2,8,0,23,5,45,76];
let Target = 23
getTarget(num,Target)

//3. Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// if(2000:){

// }


//4. Given a range of numbers from 0 to 100, console”Fizz” if 
//the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” 
//if divisible by both 3 and 5.

//div by 3= Fizz
//div by 5 = Buzz
//div by 3 and 5 = FizzBuzz
//begin by div by both



for(let x = 0; x <= 100; x++){
    if(x % 3 === 0 && x % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(x % 3 === 0){
        console.log("Fizz");
    }
    else if(x % 5 === 0){
        console.log("Buzz");
    }
   else{
    console.log(x)
   }
}
//5. Write a function that takes in an array of numbers and
// returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]

function multipliedElements(){
    
}
  

  

  

