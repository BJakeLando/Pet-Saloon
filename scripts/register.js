console.log("Registering");
//object literal
let petSalon={
    //attributes
    name:"The Penguin Saloon",
    phone:"555-555-5555",
    address: {
        state: "California",
        city: "San Diego",
        street:"Ave. University",
        zip: "91932"
    },
    pets:[]

}

//constructor
let c=0
function Pet(name,age,gender,breed,service,ownersName, contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owners=ownersName;
    this.phone=contactPhone;
    this.id=c++;
}

function displaySalonInfo(){
    document.getElementById("info").innerHTML=`
<p>${petSalon.name} is located in ${petSalon.address.state}, ${petSalon.address.city}</p>`;


}
// get the values from the inputs
let nameInput=document.getElementById("petName");
let ageInput=document.getElementById("petAge");
let genderInput=document.getElementById("petGender");
let breedInput=document.getElementById("petBreed");
let serviceSelect=document.getElementById("petService");
let ownerInput=document.getElementById("ownerName");
let phoneInput=document.getElementById("phoneNumber");
let searchInput=document.getElementById("petSearch");

function isValid(aPet){
    let valid= true;
    
    if(aPet.value == "" || aPet.service==""){
        valid=flase;
    }

    return valid;
}


function register(){
    console.log(nameInput.value,ageInput.value,genderInput.value,breedInput.value, serviceSelect.value, ownerInput.value, phoneInput.value);
// create an obj using object constructor
    let thePet = new Pet(nameInput.value,ageInput.value,genderInput.value,breedInput.value, serviceSelect.value, ownerInput.value,
        phoneInput.value);

    // push the objectg in the array
    if(isValid(thePet)){
        petSalon.pets.push(thePet);
        //display the obj in the console
        clearInputs();
        displayPetTable();
    }else{
        alert("Please add the required information.");
    }
    
}

function clearInputs(){
    nameInput.value="";
    ageInput.value="";
    genderInput.value="";
    breedInput.value="";
    serviceSelect.value="";

}

function deletePet(id){
    let removeIndex;
    console.log("delete pet" + id);
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet= petSalon.pets[i];
        if(pet.id==id){
            removeIndex = i;
        }

    }
        petSalon.pets.splice(removeIndex,1);
        document.getElementById(id).remove();

    
}

function search(){
    let searchInput=document.getElementById("petSearch").value;
    let searchIndex;
    console.log(searchInput);
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet= petSalon.pets[i];
        if(pet.name==searchInput){
            searchIndex = i;
            console.log("I found it!");
        }

    }

}    





function init(){
    console.log("Registering");
    displaySalonInfo();

    let scooby = new Pet("Scooby",60, "Male","Dane","Grooming","shaggy","666-666-6666");
    petSalon.pets.push(scooby);

    let scrappy = new Pet("Scrappy",30, "Male", "Lab",
    "Grooming","Shaggy","555-555-5555");
    petSalon.pets.push(scrappy);

    
    let sleepy = new Pet("Sleepy",2,"Male","Lab", "Grooming", "Brandon", "520-820-9498");
    
    petSalon.pets.push(sleepy);

    displayPetTable();


}

window.onload=init;

