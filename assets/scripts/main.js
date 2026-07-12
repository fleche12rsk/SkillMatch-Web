import { vagas, salvarPerfil, carregarPerfil } from "./dados.js";
import { VagaFrontEnd, calcularCompatibilidade, resultadoFinal, vagaCompativel, habilidadesFaltantes } from "./motor.js";
import { lerFormulario } from "./ui.js";
import { exibirInformacoesCandidato } from "./ui.js";
// export { candidatoSalvo };

const formulario = document.getElementById("formulario")


const candidatoSalvo = carregarPerfil();
exibirInformacoesCandidato(candidatoSalvo);


formulario.addEventListener("submit", (dados) => {
    dados.preventDefault();
    let candidato = lerFormulario();
    salvarPerfil(candidato);

});
