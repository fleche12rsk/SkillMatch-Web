async function vagas() {

    let dadosVagas = [];

   try {

    const response = await fetch('./assets/dados/vagas.json');

    if (!response.ok) {
        throw new Error("Ops, não foi possível obter os dados!");
    }


    dadosVagas = await response.json();
    console.log(dadosVagas)
   } catch (error) {
        console.error("Falha ao carregar local JSON:", error);
   }

   return dadosVagas
}

export { vagas };



export function salvarPerfil(candidato) {
    localStorage.setItem("perfilCandidato", JSON.stringify(candidato));
}

export function carregarPerfil() {
    let perfilCandidato = localStorage.getItem("perfilCandidato");
    if (perfilCandidato === null) return null;
    return JSON.parse(perfilCandidato);
}