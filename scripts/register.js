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
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owners:"shaggy",
            phone:"555-555-5555"
        
        },
        {
            name:"Scrappy",
            age:40,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owners:"shaggy",
            phone:"555-555-5555"
            
        },
        {
            name:"Sleepy",
            age:45,
            gender:"Female",
            breed:"Labrador",
            service:"Grooming",
            owners:"shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Poopy",
            age:2,
            gender:"Male",
            breed:"Terrier",
            service:"Cleaning",
            owners:"shaggy",
            phone:"555-555-5555"
        }
    

        

    ]//pet's array
}
console.log(petSalon.pets);
console.log(petSalon.address.street);

function displaySalonInfo(){
    document.getElementById("info").innerHTML=`
<p>${petSalon.name} is located in ${petSalon.address.state}, ${petSalon.address.city}</p>`;

}

function displayPetsNames(){
    //use alert to display the amount of pets (alert()),length)
    //display names on array
    let pets = ["Scooby","Scrappy","Sleepy", "Poopy"];

    //display on the console
    for( let i=0;i < pets.length;i++){ //for loop!!
        console.log(pets[i]);};

}



