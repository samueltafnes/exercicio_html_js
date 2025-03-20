const form = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const box_resultado = document.querySelector('.resultado');

function MaiorValor (valor1, valor2){
    if (valor1 > valor2){
        return 1;
    }else if (valor1 < valor2){
        return 0;
    }else {
        return -1;
    }
}

function exibir_resultado(){
    box_resultado.style.display = 'block';
}
function ocultar_resultado(){
    box_resultado.style.display = 'none';
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const compararValor = MaiorValor(campoA.value, campoB.value);

    switch(compararValor){
        case 1: 
            mensagem = `O valor do campo B(${campoB.value}) é <b>menor</b> do que o campo A(${campoA.value})!`;
            break;
        case 0:
            mensagem = `O valor do campo B(${campoB.value}) é <b>maior</b> do que o campo A(${campoA.value})!`;
            break;
        default:
            mensagem = `Todos os campos possuem o mesmo valor!`;
    }
    box_resultado.innerHTML = mensagem;
    animar(true);
})

function animar(in_out){
    if(in_out){
        exibir_resultado();
        box_resultado.classList.remove('fadeout');
        box_resultado.classList.add('fadein');
    }else{
        box_resultado.classList.remove('fadein');
        box_resultado.classList.add('fadeout');
    }
}

campoA.addEventListener('keypress',function(tecla){
    
    if(tecla.key != 'Enter'){
        animar(false);
        setTimeout(() => {
            ocultar_resultado();
        }, 200); 
    }
})

campoB.addEventListener('keypress',function(tecla){
    if(tecla.key != 'Enter'){
        animar(false);
        setTimeout(() => {
            ocultar_resultado();
        }, 200); 
    }
})

