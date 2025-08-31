

const createName = require('./names.js');
const createHobbies = require('./hobbies.js');


function createPerson() {
    return {
        Full_Name: createName("Mario", "Rossi"),
        Full_Hobbies: createHobbies("Calcio", "Musica", "Cucina")
    };
}

console.log(createPerson());

/*
// ARROW FUNCTION (uso parentesi tonde RETURN IMPLICITO)
const createPerson = () => ({
  Full_Name: createName("Mario", "Rossi"),
  Full_Hobbies: createHobbies("Calcio", "Musica", "Cucina")
});

//🔎 Nota: uso le parentesi tonde (...) intorno all’oggetto, 
// altrimenti JavaScript pensa che le parentesi graffe siano 
// il corpo della funzione invece del valore restituito.


// ARROW FUNCTION (RETURN ESPLICITO)
const createPerson = () => {
  return {
    Full_Name: createName("Mario", "Rossi"),
    Full_Hobbies: createHobbies("Calcio", "Musica", "Cucina")
  };
};
*/