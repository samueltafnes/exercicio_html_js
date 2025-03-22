const form = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const box_resultado = document.querySelector('.resultado');


function getMaiorCampo (valor1, valor2){
    if (valor1 > valor2){
        return 1;
    }else if (valor1 < valor2){
        return 0;
    }else {
        return -1;
    }
}

function getMensagem(){
    const msg = {
        1: `O valor do campo B(${campoB.value}) é <b>menor</b> do que o campo A(${campoA.value})!`,
        0: `O valor do campo B(${campoB.value}) é <b>maior</b> do que o campo A(${campoA.value})!`
    }; 
    return msg[getMaiorCampo(campoA.value, campoB.value)] || "Todos os campos possuem o mesmo valor!";
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    box_resultado.innerHTML = getMensagem();
    box_resultado.style.display = 'block';
    animar(true);
})


function animar(entrada_saida){
    if (entrada_saida){
        box_resultado.classList.remove('fadeout');
        box_resultado.classList.add('fadein');
    }
    else{
        box_resultado.classList.remove('fadein');
        box_resultado.classList.add('fadeout');
    }
}

campoA.addEventListener('keydown',function(tecla){
    if(tecla.key != 'Enter'){
        animar(false);
        setTimeout(() => {
            box_resultado.style.display = 'none';
        }, 200);
    }
})

campoB.addEventListener('keydown',function(tecla){
    if(tecla.key != 'Enter'){
        animar(false);
        setTimeout(() => {
            box_resultado.style.display = 'none';
        }, 200);
    }
})
