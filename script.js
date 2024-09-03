const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Começamos ecolhendo uma cor",
    alternativas: [
        {
            texto:"vermelho",
            afirmacao: "ferrari"
        },
        {
        texto:"azul",
        afirmacao: "Red Bull"
        }
    ]
},

{
    enunciado: "agora escolha um piloto.",
    alternativas: [
        {

        texto: "lecrec",
        afirmacao: "ferrari"
        },
        {
        texto:"verstapen",
        afirmacao: "ferrari"
        }
    ]
},

{
    enunciado: "agora uma pista",
    alternativas: [
        {
        texto:"GP de São paulo",
        afirmacao: "ferrari. Como resultado final escolha a Ferrari como scuderia"
        },
        {
        texto:"GP e Imola",
        afirmacao: "ferrari. Como resultado final escolha a Ferrari como scuderia"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
