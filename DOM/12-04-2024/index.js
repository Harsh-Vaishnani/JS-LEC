 // Ans=1


 let income = +prompt("Enter the Income => ");
 let tax;
 if (income >= 0 && income <= 10000) {
     tax = income * 5 / 100;
     console.log("Your TAX is => ", tax);
 }
 else if (income >= 10001 && income <= 20000) {
     tax = income * 10 / 100;
     console.log("Your TAX is => ", tax);

 }
 else if (income >= 20001 && income <= 30000) {
     tax = income * 15 / 100;
     console.log("Your TAX is => ", tax);

 }
 else {
     tax = income * 20 / 100;
     console.log("Your TAX is => ", tax);

 }




 // Ans=2


 let month = +prompt("Enter the Month => ");
 switch (month) {
     case 1: {
         console.log("January");
         break;
     }
     case 2: {
         console.log("February");
         break;
     }
     case 3: {
         console.log("March");
         break;
     }
     case 4: {
         console.log("April");
         break;
     }
     case 5: {
         console.log("May");
         break;
     }
     case 6: {
         console.log("June");
         break;
     }
     case 7: {
         console.log("July");
         break;
     }
     case 8: {
         console.log("August");
         break;
     }
     case 9: {
         console.log("September");
         break;
     }
     case 10: {
         console.log("October");
         break;
     }
     case 11: {
         console.log("November");
         break;
     }
     case 12: {
         console.log("December");
         break;
     }
     default: {
         console.log("Invalid Month");
     }

 }


 // Ans=3

 let cost = +prompt("Enter the Cost of Product => ");
 let discounts;
 if (cost >= 0 && cost <= 100) {
     discounts = cost * 5 / 100;
     console.log("Discount is => ", discounts);
     console.log("Final Cost is => ", cost - discounts);
 }
 else if (cost >= 101 && cost <= 500) {
     discounts = cost * 10 / 100;
     console.log("Discount is => ", discounts);
     console.log("Final Cost is => ", cost - discounts);
 }
 else {
     discounts = cost * 15 / 100;
     console.log("Discount is => ", discounts);
     console.log("Final Cost is => ", cost - discounts);

 }



 // Ans=4

 let weight = +prompt("Enter the Body Weight => ");
 let height = +prompt("Enter the Body Height In Meter => ");
 let BMI = weight / (height * height);
 console.log(BMI);
 if (BMI < 18.5) {
     console.log("Under Weigth");
 }
 else if (BMI > 18.5 && BMI <= 24.9) {
     console.log("Normal 👍");
 }
 else if (BMI >= 25 && BMI <= 29.9) {
     console.log("Over Weight");
 }
 else {
     console.log("Obese");
 }
