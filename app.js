/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//iniciar variables en 0
/*
scores es un arreglo que contiene lo que contiene en total de ambos jugadores
roundscore el valor de cada ronda
activePlayer un booleano que indica si esta jugando el player 1 o 2
game playing una variable que indica cuando termina el juego


cuando inicias tienes ue poner todos los valores en cero
y desaparecer el dado

boton roll

este boton tiene que dar un numero del 1 al 6 
se le pone block y se cambia la imagen de dado para que corresponda con dicho numero
si el dado es distinto de 1 se aumenta el roundscore lo que tenga almacenado y el valor del dado y se muestra en pantalla ese numero del respectivo jugador

si no se pasa al siguiente jugador

que dependiendo que si el active player es el 1 o el se cambia
y se resetea  el valor del round score del jugador se muestra el activo
se elimina el dado 


tecla hold

se suma el valor que llevaba el usuario y se muestra en pantalla
si el score llega a 100 o mas se le cambia al correspondiente ganador el nombre a ganador
se elimina el dado
se le anade la clase winne y se le remueve la active
si no se va al siguiente jugador


*/



//iniciar variables en 0
/*
scores es un arreglo que contiene lo que contiene en total de ambos jugadores
roundscore el valor de cada ronda
activePlayer un booleano que indica si esta jugando el player 1 o 2
game playing una variable que indica cuando termina el juego


cuando inicias tienes ue poner todos los valores en cero
y desaparecer el dado */

var scores, roundScore, activePlayer, gamePlaying;

//

init();


//boton roll

document.querySelector(".btn-roll").addEventListener("click", function(){
       /* boton roll

este boton tiene que dar un numero del 1 al 6 
se le pone block y se cambia la imagen de dado para que corresponda con dicho numero
si el dado es distinto de 1 se aumenta el roundscore lo que tenga almacenado y el valor del dado y se muestra en pantalla ese numero del respectivo jugador

si no se pasa al siguiente jugador

que dependiendo que si el active player es el 1 o el se cambia
y se resetea  el valor del round score del jugador se muestra el activo
se elimina el dado  */
    
    if(gamePlaying){
    var dice= Math.floor(Math.random() * 6) + 1;
    
    
    document.querySelector(".dice").style.display="block";
    
    document.querySelector(".dice").src="dice-" + dice + ".png";
    

   
    if(dice !== 1 ){
        
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
        
    }else{
        
        nextPlayer();
        
    }
    
    
    }

    
    
});


document.querySelector(".btn-hold").addEventListener("click", function(){

       //boton hold
   /*se suma el valor que llevaba el usuario y se muestra en pantalla
si el score llega a 100 o mas se le cambia al correspondiente ganador el nombre a ganador
se elimina el dado
se le anade la clase winne y se le remueve la active
si no se va al siguiente jugador*/
    if(gamePlaying){
    
    scores[activePlayer] += roundScore;
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer]>=100){
        document.querySelector("#name-"+activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active");
        document.querySelector(".player-"+ activePlayer +"-panel").classList.add("winner");
        gamePlaying = false;
         
        
    }else{
        
        nextPlayer();
        
    }
    
    }
});



//boton new game
/*
reiniciar todo igual que el comienzo 
como hay un ganador y no sabremos cual hay que poner otra vez ambos nombres en player 1 y 2
removes la clase winner de ambos
el activo de ambos y poner al jugador 1 como el activo
*/

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer(){
    
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        
        roundScore=0;
        
        
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display = "none";
    
}

function init(){
        scores=[0,0];
        roundScore=0;
        activePlayer=0;
        gamePlaying=true;
        document.querySelector(".dice").style.display="none";
        document.querySelector("#score-0").textContent="0";
        document.querySelector("#score-1").textContent="0";
        document.querySelector("#current-0").textContent="0";
        document.querySelector("#current-1").textContent="0";
        document.querySelector("#name-0").textContent = "player 1";
        document.querySelector("#name-1").textContent = "player 2";
        document.querySelector(".player-0-panel").classList.remove("winner");
        document.querySelector(".player-1-panel").classList.remove("winner");
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.remove("active");
        document.querySelector(".player-0-panel").classList.add("active");
    
}

