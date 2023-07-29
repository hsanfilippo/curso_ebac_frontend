const comparador = document.getElementById('form-compara');
const numbX = document.getElementById('num-x');
const numbY = document.getElementById('num-y');

function compAB() {
    const compX = numbX.value;
    const compY = numbY.value;
    resultComp = (compX > compY);
    return resultComp;
}; //funcao OK. comparando campo A com B e retornando true ou false

//Event Listener no botão para executar a function "compAB()" e escrever na página o resultado:
comparador.addEventListener('submit', function(e) {
    e.preventDefault();//a página não atualiza toda hora que aperta submit
    
    const msgSuc = `O número B(${numbX.value}) <b>é maior</b> que o número A(${numbY.value})!`;
    const msgFail = `O número B(${numbX.value}) <b>não é maior</b> que o número A(${numbY.value})!`;
    
    function mensFailClr() {
        const contMsgFail = document.querySelector('.msg-menor');
        contMsgFail.innerHTML = msgFail;
        contMsgFail.style.display = 'none';
    }
    
    function mensSucClr() {
        const contMsgSuc = document.querySelector('.msg-maior');
        contMsgSuc.innerHTML = msgSuc;
        contMsgSuc.style.display = 'none';
    }

    if (compAB() != false) {
        mensFailClr();
        const contMsgSuc = document.querySelector('.msg-maior'); //cria a var. "contMsgSuc" e atribui o id #msg-maior à ela
        contMsgSuc.innerHTML = msgSuc; //dentro da var. "contMsgSuc" será escrito o que está contido na var. "msgSuc"
        contMsgSuc.style.display = 'block'; //será exibido em bloco

        numbX.value = ' ';
        numbY.value = ' ';
    } else {
        mensSucClr();
        const contMsgFail = document.querySelector('.msg-menor');
        contMsgFail.innerHTML = msgFail;
        contMsgFail.style.display = 'block';

        numbX.value = ' ';
        numbY.value = ' ';
    }
});

comparador.addEventListener('reset', function(f) {
    f.preventDefault();
        const msgSuc = 0;
        const msgFail = 0;
        const contMsgSuc = document.querySelector('.msg-maior');
        contMsgSuc.innerHTML = msgSuc;
        contMsgSuc.style.display = 'none';
        const contMsgFail = document.querySelector('.msg-menor');
        contMsgFail.innerHTML = msgFail;
        contMsgFail.style.display = 'none';
        numbX.value = ' ';
        numbY.value = ' ';
});