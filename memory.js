// testeando si esta bien vinculado
console.log("memory.js file reached");

// array con titulos
const titles_array = ["title1,title2,title3,title4,title5,title6,title7,title8,title9,title10"];

// los colores a usar
const color_array = ["red","blue","yellow","purple","black"];

// arrays titulos con colores
var red_array = [];
    blue_array = [];
    yellow_array = [];
    purple_array = [];
    black_array = [];

// los ultimos colores clickeados
var last_color = "";

// contar la cantidad de clicks del usuario cuanc clickea
var click = 0;

// clicks guardados en un array
var clicked_titles = [];

// si el usuario clickea el mismo color ambas veces (booleano)
var duplicate_click = false;

// empezar el juego, true o false
var game_start = false;