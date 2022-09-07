function displayPetCards() {
    const petsDiv = document.getElementById("pets");

    petsDiv.innerHTML = ""; //clear the canvas

    //travel the array
    for(let i = 0; i < petSalon.pets.length; i++) {
        //get the pet
        let pet=petSalon.pets[i];

    //create the template
    let tmp= 
    `<div class ="pet">
        <p> Name : ${pet.name}</p>
        <p> Age : ${pet.age}</p>
        <p> Gender : ${pet.gender}</p>
        <p> Breed : ${pet.breed}</p>
        <p> Services : ${pet.service}</p>
        <p> Owner's Name : ${pet.name}</p>
        <p> Phone Number : ${pet.phone}</p>

        
    </div>
    `;
    console.log(tmp);
    
    //insert the template in to the HTML
    petsDiv.innerHTML += tmp;
    }


}

function displayPetTable(){
    

}