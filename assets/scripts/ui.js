export function lerFormulario() {
    const name = document.getElementById("name").value;
    const areas = document.querySelectorAll('input[name="areas"]:checked');
    const areasMarcadas = [...areas].map(area => area.value);
    const habilidades = document.querySelectorAll('input[name="habilidades"]:checked');
    const habilidadesMarcadas = [...habilidades].map(habilidade => habilidade.value);
    const experiencia = document.getElementById("experiencia").value;

    let candidato = {
        nome: name,
        area: areasMarcadas,
        habilidades: habilidadesMarcadas,
        experiencia: Number(experiencia)
    };
    
    return candidato;
};



export function exibirInformacoesCandidato(candidatoSalvo) {
    if (candidatoSalvo !== null) {
        document.getElementById("name").value = candidatoSalvo.nome;
        const checkboxesArea= document.querySelectorAll('input[name="areas"]');
            checkboxesArea.forEach(checkbox => {
            if (candidatoSalvo.area.includes(checkbox.value)) {
                checkbox.checked = true;
            }
        });
        const checkboxesHabilidades = document.querySelectorAll('input[name="habilidades"]');
        checkboxesHabilidades.forEach(checkbox => {
            if (candidatoSalvo.habilidades.includes(checkbox.value)) {
                checkbox.checked = true;
            }
        });
        document.getElementById("experiencia").value = candidatoSalvo.experiencia;
    };
}

export function renderizarVagas(resultados) {
    let vagasContainer = document.getElementById("vaga-empresas");
    let vagaCard = document.createElement("div")

    resultados.forEach(vaga => {

        let resultadoVagaIndex = document.getElementById("vaga-empresas");
        let vagaCard = document.createElement("div");
        let tituloVagaCard = document.createElement("h3");
        let cargo = document.createElement("p");
        let area = document.createElement("p");
        let sobre = document.createElement("p");
        let requisitosAtendidos = document.createElement("ul");
        let requisitosFaltantes = document.createElement("ul");
        vaga.requisitosAtendidos.forEach(requisito => {
            let valorListaAtendidos = document.createElement("li");
            valorLista.textContent = requisito;
            requisitosAtendidos.appendChild(valorLista);
        });
        vaga.requisitosFaltantes.forEach(requisito => {
            let valorListaFaltantes = document.createElement("li");
            valorLista.textContent = requisito;
            requisitosFaltantes.appendChild(valorLista);
        });
        let salario = document.createElement("p");
        let modalidade = document.createElement("p");


        vagaCard.className = "vagas-card";
        tituloVagaCard.className = "titulo-vaga-card";
        cargo.className = "cargo-vaga-card";
        area.className = "sobre-vaga-card";
        requisitosAtendidos.className = "requisitos-atendidos-vagas";
        requisitosFaltantes.className = "requisitos-faltantes-vagas"
        requisitosAtendidosLista.className = "requisitos-atendidos-lista"
        requisitosFaltantesLista.className = "requisitos-faltantes-lista"
        salario.className = "salario"
        modalidade.className = "modalidade"


        tituloVagaCard.textContent = vaga.empresa
        cargo.textContent = vaga.cargo
        area.textContent = vaga.area
        requisitosAtendidosLista.textContent = vaga.requisitosAtendidos
        requisitosFaltantesLista.textContent = vaga.requisitosFaltantes
        salario.textContent = vaga.salario
        modalidade.textContent = vaga.modalidade


        resultadoVagaIndex.appendChild(vagaCard);
        vagaCard.appendChild(tituloVagaCard);
        vagaCard.appendChild(cargo);
        vagaCard.appendChild(area);
        vagaCard.appendChild(requisitosAtendidos);
        vagaCard.appendChild(requisitosFaltantes);
        requisitosAtendidos.appendChild(requisitosAtendidosLista);
        requisitosFaltantes.appendChild(requisitosFaltantesLista);
        vagaCard.appendChild(salario);
        vagaCard.appendChild(modalidade);

    })


}


export function menuHabilidades() {
    let menuHabilidades = document.getElementById("btn-habilidades");
    let habilidadesChekbox = document.getElementById("habilidades-chekbox");

    menuHabilidades.textContent = "Habilidadeewes ▾";
    habilidadesChekbox.classList.toggle = "menu-aberto";

}