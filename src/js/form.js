const formulario = document.getElementById('formulario');
const inputsDoFormulario = document.querySelectorAll('.campo');
const mensagemDeErro = document.querySelectorAll('.campo-obrigatorio');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    inputsDoFormulario.forEach((input, index) => {
        const verificarConteudoInputs = input.value.trim();
    
        if(verificarConteudoInputs === ''){
            input.classList.add('campo-null');
            input.classList.remove('campo-correto')
            mensagemDeErro[index].classList.add('mensagem-erro');
        }else{
            input.classList.remove('campo-null')
            input.classList.add('campo-correto')
            mensagemDeErro[index].classList.remove('mensagem-erro');


        }if(input.classList.contains('campo-null')){
            setTimeout(() => input.style.animation = 'vibration 0.1s', 100)
            input.style.animation = '';
        }
    }); 
})



