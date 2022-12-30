// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement("div");
body.append(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const parrafo = document.createElement("p");
newDiv.append(parrafo);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divLoop = document.createElement("div");

for (let i = 0; i < 6; i++){
   const newparrafo = document.createElement("p");
   divLoop.append(newparrafo);
}
console.log(divLoop);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const dinamicP = document.createElement("p");
   dinamicP.innerText = 'Soy dinánmico!';
   document.body.append(dinamicP);

console.log(dinamicP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const insert = document.getElementsByClassName("fn-insert-here");
console.log(insert);

const textInsert = (insert[0].innerText = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
//const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const list = document.createElement("ul");
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

for (let i = 0; i < apps.length; i++) {
   const redes = apps[i];
   const listApp = document.createElement("li");
   listApp.innerText = redes;
   list.append(listApp);
   document.body.append(list);
}
console.log(list);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const delateElem = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < delateElem.length; i++) {
   delateElem[i].remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.

const midel = document.createElement("p"),
midel.innerText = 'Voy en medio!';


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const midelP = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < midelP.length; i++) {
   midelP[i].innerHTML = '<p>Voy dentro!</p>';
}
