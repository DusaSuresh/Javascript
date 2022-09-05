
// Event Listerns in js
let welcomeBtn = document.querySelector('button');
welcomeBtn.addEventListener('click', showMsg);
welcomeBtn.addEventListener('click', inputMsg);

function showMsg(){
    alert("Welcome Javascript");
}

function inputMsg(){
    let name = prompt("Enter Name");
    welcomeBtn.textContent = name;
}

 // typeof function to check the type of variables
 var bool = true;
 var num = 10;
 var str = "javascript";
 var nul = null;
 var und;
 console.log("Boolean: "+typeof bool+"  Number: "+typeof num+ " String: "+typeof str);
 console.log("Null: "+typeof nul+" Undefined: "+ und);

 //Naming convensions
 let firstName = "Suresh" //camel case
 let LastName = "Dusa" // pascal case
 let middle_name = "" // snake casse

 //Objects
 let animal = {
    name: "cow",
    legs: 4
 }
 console.log(animal);