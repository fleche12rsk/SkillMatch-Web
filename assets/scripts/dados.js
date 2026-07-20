import { VagaFrontEnd } from "./motor.js";
import { mostrarStatus } from "./ui.js";

async function buscarVagas() {

    let dadosVagas = [];
    mostrarStatus("Carregando vagas...");

   try {
    const response = await fetch('./assets/dados/vagas.json');
    
    if (!response.ok) {
        throw new Error("Ops, não foi possível obter os dados!");
    }


    dadosVagas = await response.json();

    dadosVagas = dadosVagas.map(vaga => new VagaFrontEnd(
        vaga.empresa,
        vaga.cargo,
        vaga.area,
        vaga.requisitos,
        vaga.salario,
        vaga.modalidade,
        vaga.experienciaMes
    ));

    if (dadosVagas.length === 0) {
        mostrarStatus("Nenhuma vaga encontrada")
    } else {
        mostrarStatus("")
    }
   } catch (error) {
        mostrarStatus("Erro ao carregar as vagas");
        console.error(error)
   }

   return dadosVagas
}

export { buscarVagas };



export function salvarPerfil(candidato) {
    localStorage.setItem("perfilCandidato", JSON.stringify(candidato));
}

export function carregarPerfil() {
    let perfilCandidato = localStorage.getItem("perfilCandidato");
    if (perfilCandidato === null) return null;
    return JSON.parse(perfilCandidato);
}