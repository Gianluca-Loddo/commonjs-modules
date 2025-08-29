//VERSIONE ESM
// funzione createName da esportare

function createName(firstName, lastName) { // la funzione crea un oggetto con nome e cognome
 
 const name = {}; // le graffe indicano un oggetto
 name.first_Name = firstName; // assegna il nome
 name.last_Name = lastName; // assegna il cognome
 return name;

 // oppure si può scrivere in un'unica riga
 // return { firstName, lastName };


 /*
     OPPURE

     const fullName = {
        first_Name: firstName,
        last_Name: lastName,
    }
    return fullName;

    */


}

export { createName };
