// testeando si esta bien vinculado
console.log("memory.js esta vinculado");

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

// haciendo los event listeners a los botones
// boton COMENZAR JUEGO
const start_game = () => {
    console.log("Comenzo el juego");
    //esta funcion se usar para jugar y reiniciar el juego
    reset_var_shallow()
}
//BOTON REINICIAR JUEGO DE FORMA RANDOM
const reset_game = () => {
    console.log("Se reinició el juego");
    //esta funcion se usar para jugar y reiniciar el juego
    reset_var_shallow()
}

document.querySelector("#start").addEventListener("click", start_game);

document.querySelector("#reset").addEventListener("click", reset_game);

// Reiniciar variables si hiciste click en jugar o reiniciaste el juego
const reset_var_shallow = () =>{
    //resetear el ultimo color clickeado
    last_color = "",
        click= 0,
        clicked_titles = [],
        duplicate_click = false;
        //start game si la variable es verdadera
    game_start = true;
    for(var i=1; i<11; i++){
        var element = "title"+ i;
        document.getElementById(element).style.backgroundColor = "greenyellow";
    }
}


// Reiniciar variables que deberian ser reseteadas si matcheaste mal o reiniciaste 












// ID title eventListener (click)
const titles = (title) => {
    console.log(title);
}

document.querySelector("#title1").addEventListener("click",function(){
    titles("title1");
});
document.querySelector("#title2").addEventListener("click",function(){
    titles("title2");
});
document.querySelector("#title3").addEventListener("click",function(){
    titles("title3");
});
document.querySelector("#title4").addEventListener("click",function(){
    titles("title4");
});
document.querySelector("#title5").addEventListener("click",function(){
    titles("title5");
});
document.querySelector("#title6").addEventListener("click",function(){
    titles("title6");
});
document.querySelector("#title7").addEventListener("click",function(){
    titles("title7");
});
document.querySelector("#title8").addEventListener("click",function(){
    titles("title8");
});
document.querySelector("#title9").addEventListener("click",function(){
    titles("title9");
});
document.querySelector("#title10").addEventListener("click",function(){
    titles("title10");
});

