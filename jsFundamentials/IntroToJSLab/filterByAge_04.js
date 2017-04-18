/**
 * Created by k.asenov on 17.2.2017 ã..
 */
/*function filterByAge(input){
    let refAge=Number(input[0]);
    let person={};
    let person2={}
    person.name = input[1];
    person.age = Number(input[2]);
    person2.name = input[3];
    person2.age = Number(input[4]);
    if(person.age > person2.age){
        if(person.age > refAge){
            console.log("{ name: "+"'"+person.name+"', age: "+person.age+" }");
        }else if(person2.age > refAge){
            console.log("{ name: "+"'"+person2.name+"', age: "+person2.age+" }");
        }

    }else if(person2.age > person.age){
        if(person2.age > refAge){
            console.log("{ name: "+"'"+person2.name+"', age: "+person2.age+" }");
        }else if(person.age>refAge){
            console.log("{ name: "+"'"+person.name+"', age: "+person.age+" }");
        }
    }
}*/

function filterByAge([minAge, nameA, ageA, nameB, ageB]) {
    let personA = {name:nameA, age:Number(ageA)};
    let personB = {name:nameB, age:Number(ageB)};
    if (personA.age >= minAge) console.log(personA);
    if (personB.age >= minAge) console.log(personB);
}
filterByAge(['19', 'Pesho', '119', 'Gosho', '20']);
filterByAge(['12', 'Ivan', '15', 'Asen', '9']);

