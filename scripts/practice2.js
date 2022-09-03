//object literal
let lion={
    name:"simba"
    food: "Carnivore",
    isTheKingOfJungle: true
}

//object constructor
//left side is internal right side is external
function Animal(name,food,isTheKingOfJungle){
    this.name = name;
    this.food=food;
    this.king=isTheKingOfJungle;

}

let obj1 = new Animal("simba", "Carnivore", "true");
let obj2 = new Animal("Rafiki", "Fruits", false);



function Fighter(name,age, isTheChampion){

    this.name= name;
    this.age=age;
    this.champion=isTheChampion;
}

let object1 = new Fighter("Israel Adesanya", 34 , true);
let object2 = new Fighter("Leon Edwards", 35, true);