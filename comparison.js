/* 
COMPARISON
1.bigger: >
2.less:<
3.equal:==
4.greater than or equal:>=
5.less than or equal: <=
6.not equal:!=

-------------------------
7.and: && >>all condition is true
8.or : ||  >>at least one condition is true

*/
console.log(10==10);//true
console.log(10==10.0);//true
console.log(10<=10);//true
console.log(20<10);//false
console.log(100<=90);//false
console.log(120>=100);//true

//----------------------------------------variable type---------------------
var applePrice=250;
var bananaPrice=40;
console.log(applePrice<=bananaPrice);



//------------------ == or === ----------------------
console.log(10==10);
console.log(10=='10');// ekhetre sudu man ta k tulona kore ...type tulona korena.(true)
console.log(10===10);
console.log(10==='10');//ekhetre man + type o check kore tai  eta false
console.log(10!='10');
console.log(10!=='10');




//conditional gula kno proijon ...
// 1.control behavior
// 2.detarmine whether or not pieces of code can run 

let x = 5;
 if (x < 10) 
 { x = x + 3; } 
 else { x = x - 2; }
  console.log(x);
  let result = 10 < "5";
console.log(6 != 6);
let score = 75;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
}
console.log(grade);