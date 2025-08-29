import { createName } from "./names.js";
import { createHobbies } from "./hobbies.js";  

//console.log(createName("Mario", "Rossi"));
//console.log(createHobbies("Calcio", "Cucina", "Lettura"));


function createPerson(firstname, lastname, [hobbyOne, hobbyTwo, hobbyThree]) { // la funzione crea un oggetto con nome, cognome e hobby
  const Full_Person = {
    Full_Name: createName(firstname, lastname/*"Mario", "Rossi"*/), //chiave, valore: valore dato dalla funzione richiamata
    Full_Hobbies: createHobbies(hobbyOne, hobbyTwo, hobbyThree/*"Calcio", "Musica", "Cucina"*/) //chiave, valore: valore dato dalla funzione richiamata
  }
  return Full_Person;
}
//console.log(createPerson());

console.log(createPerson("Gianluca", "Loddo", ["Sport", "Coding", "Music"]));