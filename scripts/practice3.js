//js selectors
//ID it returns one element
let inputName = document.getElementById("petName");
console.log(inputName);

//Class
//class returns a collection of elements
let links = document.getElementsByClassName("link");

for(let i = 0; i < links.length; i++) {
    links[i].setAttribute("target", "_blank");
    links[i].style.display= "none";
    console.log(links);

}


//Tag returns a collection of elements

let inputs = document.getElementsByTagName("input");
for(let i = 0; i < inputs.length; i++) {
    inputs[i].style.display="none";

}

//query returns one element
//used for getting something that is very specific.
let home = document.querySelector("nav a.link");
console.log(home); 

//hiding the select using querySelector

let selectInput = document.querySelector("#petService");
selectInput.style.display="none";
