let mark=+prompt("Enter Your Mark");
if(mark>35){
    if(mark>=35 && mark<=50){
        console.log("D Grade");
    }
    else if(mark>=51 && mark<=70){
        console.log("C Grade");
    }
    else if(mark>=71 && mark<=90){
        console.log("B Grade");
    }
    else if(mark>=91 && mark<=100){
        console.log("A Grade");
    }
    else{
        console.log("Invalid Mark")
    }
}
else{
    console.log("Fail");
}