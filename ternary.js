// TERNARY 
/* 
three parts
1.condition
2.? (true)
3.:(false)
condition ? do something when true : do something when false.

*/

/*Normal if-else
const age=13;
if(age>=18){
    console.log('vote dite parbe');
}
else{
    console.log('vote dite parbe na')
}*/

// Ternary
// age>=18 ? console.log('vote dite parbe'):  console.log('vote dite parbe na') //use ternary


// use let, let mane er man change kora jai .

let price=500;
const isLeader=true;
if(isLeader===true){
    price=0;
}
else{
price= price+100;

} 
console.log(price);

//use ternary
// condition     ? true : false
price = isLeader === true ? 0 : price+100;


// normal nested if-else 
if(isLeader===true){
    if(price > 1000)
    price=price/2;
else{
    price=0;
}
}
else{
    price=price+100;
}

// semi-advanced ternary
price=isLeader===true ? price > 1000 ? price/2 : 0 : price+100;

