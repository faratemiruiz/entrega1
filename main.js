let jugador;
let compu;

function aleatoria() {
    return Math.ceil(Math.random()*3);
   
}


jugador = prompt( "Eleji : \n1.Piedra💎 \n2.Papel📃  \n3.Tijera✂")
compu = aleatoria();

alert("Elejiste:" + elejido (jugador));
alert("La compu elijio:" + elejido (compu));

if(jugador == compu){
    alert("Empate😑")
}else if(jugador==1 && compu==3){
    alert("Ganaste🤩")
}else if(jugador==2 && compu==1){
    alert("Ganaste😍")
}else if (jugador==3 && compu==2){
    alert("Ganaste😎")
}else{
    alert("Perdiste😖")
}

function elejido (juego){
    let = resultado = ""

    if (juego == 1){
        resultado = "Piedra"
    }else if (juego == 2){
        resultado="Papel"
    }else if (juego == 3){
        resultado="Tijera"
}else{
    resultado= "eleccion incorrecta"
}
return resultado
}
