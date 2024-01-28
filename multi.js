// variable var or const 
// var variable change kora jai but const variable fixed er man change kora jai na.
// (=) one single equal mane hocche man set kora for example, height=60;
//(==) mane compare kora . for example, hasCar==false;
const mangoPrice=200;
const bananaPrice=50;
const orangePrice=250;
const applePrice=200;
if(mangoPrice<150 || (orangePrice<200) || (applePrice>300)){
    console.log('i will buy it');
}
else{
    console.log('i will not buy it.');
}   // ans: i will not buy it.

//and mane sobgulo condition true hote hobe .
//or mane j kono ekta true hote hobe.
if(mangoPrice>150 && (orangePrice>200) || (applePrice>300)){
    console.log('i will buy it');
}
else{
    console.log('i will not buy it.');
} //ans: i will buy it.