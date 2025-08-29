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

// EXPORT DELLA FUNZIONE NOMINATA
// export { createName }; 


// EXPORT DELLA FUNZIONE DEFAULT

export default createName; // (metodo 1)

/* (metodo 2 - non viene assegnato il nome alla funzione che però viene copiata per intero)

export default function createName(firstName, lastName) {
  const name = {};
  name.first_Name = firstName;
  name.last_Name = lastName;
  return name;
}

*/