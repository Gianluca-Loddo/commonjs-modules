//VERSIONE ESM
// funzione createHobbies da esportare

function createHobbies(hobbyOne, hobbyTwo, hobbyThree) { // la funzione crea un array di hobby inserendo tre argomenti
  const hobbies = []; // le quadre indicano un array

  hobbies.push(hobbyOne, hobbyTwo, hobbyThree); // aggiunge i tre hobby all'array
  return hobbies; 



  /* 
  
  OPPURE

  const hobbiesList = [hobbyOne, hobbyTwo, hobbyThree];
  return hobbiesList;


  OPPURE DIRETTAMENTE

  return [hobbyOne, hobbyTwo, hobbyThree];

  */

}

export { createHobbies }; // EXPORT DELLA FUNZIONE NOMINATA
