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
    box_resultado.style.display = 'block';
    box_resultado.classList.add('fadein');
})

campoA.addEventListener('keydown',function(){
    box_resultado.style.display = 'none';
    
})
campoB.addEventListener('keydown',function(){
    box_resultado.style.display = 'none';
})

