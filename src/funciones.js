var totalTime = 3;

function game(){
    document.querySelector('#count').classList.remove('mostrar');
    document.querySelector('#count').innerHTML = totalTime + '<audio src="../src/sounds/pito.mp3" autoPlay></audio>';
    var counter = setTimeout(game, 1000);
    totalTime = totalTime - 1;
    if (totalTime == (-1)){
        clearTimeout(counter);
        document.querySelector('#count').classList.add('mostrar');
        document.querySelector('#alerta1').classList.add('mostrar')
        document.querySelector('#screen').classList.remove('mostrar');
    }
}

export default game