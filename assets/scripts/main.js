import { buscarVagas, salvarPerfil, carregarPerfil } from "./dados.js";
import { VagaFrontEnd, calcularCompatibilidade, resultadoFinal, vagaCompativel } from "./motor.js";
import { lerFormulario, exibirInformacoesCandidato, renderizarVagas, menuHabilidades, menuAreas } from "./ui.js";
// export { candidatoSalvo };

const formulario = document.getElementById("formulario")
const vagas = await buscarVagas();
let botaoHabilidades = document.getElementById("btn-habilidades");
let botaoArea = document.getElementById("btn-areas")

const candidatoSalvo = carregarPerfil();
exibirInformacoesCandidato(candidatoSalvo);


formulario.addEventListener("submit", (dados) => {
    dados.preventDefault();
    let candidato = lerFormulario();
    salvarPerfil(candidato);
    let resultados = resultadoFinal(vagas, candidato);
    renderizarVagas(resultados);
});

botaoHabilidades.addEventListener("click", menuHabilidades);
botaoArea.addEventListener("click", menuAreas);