   // Using Normal Function 👇

   let number=+prompt("Enter Income => ");
   function fun(){
    if(number>=0 && number<=10000){
        console.log("Tax is => ",(number*5)/100);
    }
    else if(number>=10001 && number<=20000){
       console.log("Tax is => ",(number*10)/100);
    }
    else if(number>=20001 && number<=30000){
        console.log("Tax is => ",(number*20)/100)
    }
    else{
        console.log("Sorry 🙃")
    }
   }
   fun();




   // Using Function Expression 👇

   let month=+prompt("Enter the Month => ");
   let fun = function(){
       switch(month){
           case 1:{
               console.log("Jan");
               break;
           }
             case 2:{
               console.log("Feb");
               break;
           }
             case 3:{
               console.log("Mar");
               break;
           }
             case 4:{
               console.log("Apl");
               break;
           }
             case 5:{
               console.log("May");
               break;
           }
           default:{
               cosole.log("Sorry Invalid Month 🙃")
           }
       }
   }
   fun();





   // Using Arrow Function 👇

   let cost = +prompt("Enter the Cost => ");
   let fun = (number) => {
       if (number >= 0 && number <= 100) {
           return (number * 5) / 100;
       }
       else if (number >= 101 && number <= 500) {
           return (number * 10) / 100;
       }
       else if (number > 500) {
           return (number * 15) / 100;
       }
       else if (number > 0) {
           return number;
       }

   }
   let ans = fun(cost);
   console.log("Discount is 🍾 => ", ans);