// 1.1 Usa querySelector para mostrar por consola el boton con clase .showme

const botonShowMe = document.querySelector(".showme");
console.log(botonShowMe);

// 1.2

const pillado = document.querySelector("#pillado");
console.log(pillado);

// 1.3

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

// 1.4

const todosPokemon = document.querySelectorAll(".pokemon");
console.log(todosPokemon)

// 1.5

const todosTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(todosTestMe);

// 1.6 . innerText imprime el nombre de la posicion 3 

console.log(todosTestMe[3].innerText);