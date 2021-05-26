var totalTime = 3;

function burro(){
   document.innerHTML = '<audio src="../src/sounds/burro.mp3" autoPlay></audio>';
    document.querySelector('#caballo').classList.add('mostrar')
    document.querySelector('#perro').classList.add('mostrar')
    document.querySelector('#marrano').classList.add('mostrar')
    document.querySelector('#gallina').classList.add('mostrar')
    document.querySelector('#burro').addEventListener('click', function burroSelected(){
        document.querySelector('#aviso').innerHTML = 'Es correcto!'
    })
}

function game(){
    document.querySelector('#count').classList.remove('mostrar');
    document.querySelector('#count').innerHTML = totalTime + '<audio> <source src="pito.mp3" type="audio/mpeg" /></audio>';
    var counter = setTimeout(game, 1000);
    totalTime = totalTime - 1;
    if (totalTime == (-1)){
        clearTimeout(counter);
        document.querySelector('#count').classList.add('mostrar');
        document.querySelector('#alerta1').classList.add('mostrar')
        document.querySelector('#screen').classList.remove('mostrar');
        burro()
    }
}

export default game