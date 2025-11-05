// função de enviar email
function enviarEmail() {
    const mensagem = encodeURIComponent(document.getElementById('mensagem').value) // pega mensagem
    const email = 'involucre@outlook.com' // email do involucre
    const assunto = encodeURIComponent('Dúvida sobre o sistema Involucre') // automatiza assunto do email
    window.location.href = `mailto:${email}?subject=${assunto}&body=${mensagem}` // manda email
}


// Função para alterar plano

// pega os planos
const controlePlanos = document.querySelector('.controle');

function atualizarPrecos() {
    //pega o valor e faz a verificação
    const planoSelecionado = document.querySelector('input[name="plano"]:checked');
    const valor = planoSelecionado ? planoSelecionado.value : 'mensal';

    //pega as divs do plano
    const precoStandard = document.getElementsByClassName('preco')[0];
    const precoPro = document.getElementsByClassName('preco')[1];
    const precoPremium = document.getElementsByClassName('preco')[2];

    // se ele não existirem para
    if (!precoStandard || !precoPro || !precoPremium) return;

    //muda conforme o modo
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

// para ir mudando conforme o botão
if (controlePlanos) {
    controlePlanos.addEventListener('change', atualizarPrecos);
}

// Lógica para trocar de modo

// "conectando" o js com hmtl
const body = document.body;
const botaoModo = document.getElementById("bnt-modo");
const img = document.getElementById('divisor');
const icone = document.getElementById('icone-modo')

//  Função que atualiza o ícone conforme o modo atual
function atualizarIcone() {

    //adiciona o modo escuro e muda as imagens para ficar certo
    if (body.classList.contains("modo-escuro")) {
        body.classList.add('modo-escuro');
        img.src = "divisorEscuro.png";
        icone.src = 'sol.png'
    } else {
        //remove o modo escuro
        body.classList.remove('modo-escuro');
        img.src = `divisor.png`;
        icone.src = 'luaEscura.png'
    }
}

//  Carrega o modo salvo no localStorage
if (localStorage.getItem("modo") === "modo-escuro") {
    body.classList.add("modo-escuro");
}
atualizarIcone(); // atualiza o ícone logo ao carregar

// ️ Alterna o modo e salva no localStorage
botaoModo.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");

    if (body.classList.contains("modo-escuro")) {
        localStorage.setItem("modo", "modo-escuro");
    } else {
        localStorage.setItem("modo", "claro");
    }

    atualizarIcone(); // atualiza o ícone após a troca
});

document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.getElementById('loading-overlay');
    const mainContent = document.getElementById('main-content');

    // Função para simular um processo de carregamento assíncrono (ex: fetch de API)
    function simularCarregamento() {
        // 1. Mostrar o overlay (se já não estiver visível)
        loadingOverlay.classList.remove('hidden');
        mainContent.style.display = 'none';

        // Simula uma espera de 3 segundos
        setTimeout(() => {
            // 2. Ocultar o overlay após o "carregamento"
            loadingOverlay.classList.add('hidden');

            // 3. Mostrar o conteúdo principal
            mainContent.style.display = 'block';

        }, 3000); // 3000 milissegundos = 3 segundos
    }

    // Chamamos a função de carregamento ao iniciar a página
    simularCarregamento();
});

// Em um cenário real, você chamaria:
// 1. loadingOverlay.classList.remove('hidden');
// 2. Faria sua chamada de rede (fetch, axios, etc.)
// 3. No .then() ou no bloco finally da sua chamada, faria: loadingOverlay.classList.add('hidden');