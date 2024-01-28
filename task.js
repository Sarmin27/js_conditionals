/***
 * Task-01

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let Burger=600; //Burger price
if(Burger>500){
    console.log('free coke')
}
else{
    console.log('Coke: 30tk')
}


/*** 
 * Task-02
BMI Calculator and Health Category
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

let weight=50 ; //weight (kg)
let height= 5; //height (m)
let BMI=( weight  / (height) ^ 2) ;
console.log('BMI' , BMI );
if(BMI < 18.5){
    console.log('you are underweight');
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log('you are normal')

}
else if(BMI >=25 && BMI <= 29.9){
    console.log('you are overweight')
}
else{
    console.log('Otherwise, you are obese')
}



/***
 * Task-03
Grade Calculator
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
let score=77;
let result;
if(score<=100 && score>=90){
    result='grade:A'
} 
else if(score<=89 && score>=80){
    result='grade:B'
}
else if(score<=79 && score>=70){
    result='grade:C'
}
else if(score<=69 && score>=60){
    result='grade:D'
}
else{
    result='grade:F'
}
console.log(result);

/***
 * Task-04
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
Note: 
use nested if-else-if-else
*/
let myScore=85;
let friendScore=40;
if(myScore>=80){
    console.log(friendScore);
   if(friendScore >=80 ){
    console.log('go for a lunch')
   } 
   else if((friendScore < 80) && (friendScore >=60)){
    console.log('good luck next time.')
   }
   else if((friendScore < 60 ) && (friendScore>=40)){
    console.log ('keep your friends message unseen. ')
   }
   else{
    console.log('block your friend')
   }
}
else{
    console.log('go to home and sleep and act sad')
}


/***
 * Task-05
you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
write a simple if-else. 
also, write it using ternary operator.
 */
// write a simple if-else. 
let num1=20;
let num2=15;
//let number; //declare a variable called result. 
// if(num1 > num2){
//     number=2*num1;
//     console.log('result:' , number );
// }
// else{
//     number=num1+num2;
//     console.log('result', number);
// }
// write it using ternary operator.
let number =num1 > num2 ?  2*num1 : num1+num2;
console.log('result', number);

/***
 * Task-06
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let ticket=800;
let age=20;
if(age < 10){
    console.log('free')
}
else if(age>=10){
    let discount=ticket*(50/100);
    console.log( 'Student', discount);
}
else if(age >= 60){
    let discount=ticket*(15/100);
    console.log( 'Senior citizens', discount);

}
else{
    console.log( 'Otherwise', ticket);

}









