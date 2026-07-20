async function buscarVagas() {

    let dadosVagas = [];

   try {

    const response = await fetch('./assets/dados/vagas.json');

    if (!response.ok) {
        throw new Error("Ops, não foi possível obter os dados!");
    }


    dadosVagas = await response.json();
   } catch (error) {
        console.error("Falha ao carregar local JSON:", error);
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