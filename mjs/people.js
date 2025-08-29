import { createName } from "./names.js";
import { createHobbies } from "./hobbies.js";  

//console.log(createName("Mario", "Rossi"));
//console.log(createHobbies("Calcio", "Cucina", "Lettura"));


function createPerson() {
  const Full_Person = {
    Full_Name: createName("Mario", "Rossi"), //chiave, valore: valore dato dalla funzione richiamata
    Full_Hobbies: createHobbies("Calcio", "Musica", "Cucina") //chiave, valore: valore dato dalla funzione richiamata
  }
  return Full_Person;
}
console.log(createPerson());