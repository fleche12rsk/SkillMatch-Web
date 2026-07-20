import { buscarVagas, salvarPerfil, carregarPerfil } from "./dados.js";
import { VagaFrontEnd, calcularCompatibilidade, resultadoFinal, vagaMaisCompativel, pontosEstudar, criarContador } from "./motor.js";
import { lerFormulario, exibirInformacoesCandidato, renderizarVagas, menuHabilidades, menuAreas, adicionarMaisContador } from "./ui.js";
// export { candidatoSalvo };

const formulario = document.getElementById("formulario")
const vagas = await buscarVagas();
let botaoHabilidades = document.getElementById("btn-habilidades");
let botaoArea = document.getElementById("btn-areas")
let contador = criarContador();

const candidatoSalvo = carregarPerfil();
exibirInformacoesCandidato(candidatoSalvo);


formulario.addEventListener("submit", (dados) => {
    dados.preventDefault();
    let candidato = lerFormulario();
    salvarPerfil(candidato);
    let resultados = resultadoFinal(vagas, candidato);
    renderizarVagas(resultados);
    vagaMaisCompativel(resultados);
    adicionarMaisContador(contador());
});

botaoHabilidades.addEventListener("click", menuHabilidades);
botaoArea.addEventListener("click", menuAreas);