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
            afirmacao: "Como resultado final"
        },
        {
        texto:"azul",
        afirmacao: "Como resultado final"
        }
    ]
},

{
    enunciado: "agora escolha um piloto.",
    alternativas: [
        {

        texto: " Leclerc",
        afirmacao: "escolha a Ferrari"
        },
        {
        texto:"Verstappen",
        afirmacao: "escolha a Ferrari"
        }
    ]
},

{
    enunciado: "agora uma pista",
    alternativas: [
        {
        texto:"GP de São paulo",
        afirmacao: "como scuderia"
        },
        {
        texto:"GP e Imola",
        afirmacao: "como scuderia"
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
