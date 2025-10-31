// função de enviar email
function enviarEmail() {
    const mensagem = encodeURIComponent(document.getElementById('mensagem').value) // pega mensagem
    const email = 'involucre@outlook.com.br' // email do involucre
    const assunto = encodeURIComponent('Dúvida sobre o sistema Involucre') // automatiza assunto do email
    window.location.href = `mailto:${email}?subject=${assunto}&body=${mensagem}` // manda email
}


// Função para alterar plano

const controlePlanos = document.querySelector('.controle');

function atualizarPrecos() {
    const planoSelecionado = document.querySelector('input[name="plano"]:checked');
    const valor = planoSelecionado ? planoSelecionado.value : 'mensal';

    const precoStandard = document.getElementsByClassName('preco')[0];
    const precoPro = document.getElementsByClassName('preco')[1];
    const precoPremium = document.getElementsByClassName('preco')[2];

    if (!precoStandard || !precoPro || !precoPremium) return;

    if (valor === 'mensal') {
        precoStandard.textContent = 'R$199,99';
        precoPro.textContent = 'R$269,99';
        precoPremium.textContent = 'R$399,99';
    } else if (valor === 'anual') {
        precoStandard.textContent = 'R$1.919,99';
        precoPro.textContent = 'R$2.591,99';
        precoPremium.textContent = 'R$3.839,99';
    }
}

if (controlePlanos) {
    controlePlanos.addEventListener('change', atualizarPrecos);
}

// Lógica para trocar de modo
const body = document.body;

const themeRadios = document.querySelectorAll('input[name="cor-tema"]');

function changeTheme(event) {
    const selectedTheme = event.target.value; 

    if (selectedTheme === 'escuro') {
        body.classList.add('modo-escuro');
        const img = document.getElementById('divisor');
        img.src = 'Untitled (17).png'
    } else { 
        body.classList.remove('modo-escuro');
    }
    
}

themeRadios.forEach(radio => {
    radio.addEventListener('change', changeTheme);
});