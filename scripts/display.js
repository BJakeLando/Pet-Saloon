/*function displayPetCards() {
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


}*/

function displayPetTable(){
<<<<<<< HEAD

    const petTable = document.getElementById("petTable");
    
    for(let i = 0; i < petSalon.pets.length; i++) {
        //get the pet
        let pet=petSalon.pets[i];
    
    
=======
    const pets2Div = document.getElementById("pets");

    pets2Div.innerHTML = "";

>>>>>>> 43805fac321c20b882ac6cb95e47b6319d42eba3

    let tr =`
    <tr id="${pet.id}">
        <td>${pet.name} </td>  
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td>${pet.ownersName}</td>
        <td>${pet.phone}</td>
        <td> <button onclick="deletePet(${pet.id})">🗑️
        </td>
    </tr>
    `;
petTable.innerHTML += tr;
    }
    
}