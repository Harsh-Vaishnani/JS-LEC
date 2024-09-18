let header = document.getElementById("myHeading");

header.style.backgroundColor = "lightGreen";
header.style.paddingBlock = "20px";
header.style.textAlign = "center";

console.log(header.innerHTML);
console.log(header.innerText);



let main = document.getElementsByClassName("main");
for (const ele of main) {
    ele.style.padding="0px";
  console.log(ele.innerHTML);
}




let child = document.getElementsByClassName("child");
for (const ele of child) {

  ele.style.backgroundColor = "lightBlue";
  ele.style.textAlign = "center";
  ele.style.listStyle = "none";
  ele.style.paddingBlock = "10px";
  ele.style.fontSize="20px";

  console.log(ele.innerHTML);
}


let myName = document.getElementsByTagName("h5");
for (const ele of myName) {
    ele.style.backgroundColor="lightgreen";
    ele.style.paddingBlock="3%";
    ele.style.textAlign="center";
    ele.style.fontSize="20px";
}


let myClass=document.querySelector(".myClass");       //  Class hoy toh
// let myClass=document.querySelector("#myClass");    //  ID hoy toh
myClass.innerText="My Class Name is Red and White Multimedia Eduaction";
myClass.style.fontSize="20px";
myClass.style.backgroundColor="lightblue";
myClass.style.paddingBlock="2%";
myClass.style.textAlign="center";





