// MULTI-LEVEL CONDITION : 
const price= 8000;
if( price>=10000){
    // 10% discount
    const discount=(price*(10/100));
    console.log(discount);
    const pay_Amount=(price-discount);
    console.log(pay_Amount);
    
}
else{
    console.log(price);
}

// -------------------------------------Exam Greading---------------------
const mark=58;
if(mark>=80){
    console.log('A+')
}
else if(mark>=70){
    console.log('A')

}
else if( mark>=60){
    console.log('A-')
}
else if( mark>=50){
    console.log('B')
}
else if( mark>=40){
    console.log('C')
}
else if( mark>=33){
    console.log('D')
}
else{
    console.log('F');
}

// --------------------------------------------Another Example-------------------
const age=60;
const foodPrice=300;
if(age<=12){
    console.log('Free food')
}
else if(age>=60){
    // 10%discount 
    const discount=(foodPrice*(10/100));
    console.log(discount);
    const amount=(foodPrice-discount);
    console.log(amount);

}
else{
    console.log(foodPrice);
}









