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
            let textoRequisitoAtendido = document.createElement("p");

            valorListaAtendidos.textContent = requisito;
            textoRequisitoAtendido.textContent = "Requisitos atendidos:"

            requisitosAtendidos.appendChild(valorListaAtendidos);
            textoRequisitoAtendido.appendChild(valorListaAtendidos);
        });
        vaga.requisitosFaltantes.forEach(requisito => {
            let valorListaFaltantes = document.createElement("li");
            valorListaFaltantes.textContent = requisito;
            requisitosFaltantes.appendChild(valorListaFaltantes);
        });
        let salario = document.createElement("p");
        let modalidade = document.createElement("p");


        vagaCard.className = "vagas-card";
        tituloVagaCard.className = "titulo-vaga-card";
        cargo.className = "cargo-vaga-card";
        area.className = "sobre-vaga-card";
        requisitosAtendidos.className = "requisitos-atendidos-vagas";
        requisitosFaltantes.className = "requisitos-faltantes-vagas";
        salario.className = "salario";
        modalidade.className = "modalidade";


        tituloVagaCard.textContent = vaga.empresa;
        cargo.textContent = vaga.cargo;
        area.textContent = `Área: ${vaga.area}`
        salario.textContent = `R$:${vaga.salario}`
        modalidade.textContent = `TIpo: ${vaga.modalidade}`


        resultadoVagaIndex.appendChild(vagaCard);
        vagaCard.appendChild(tituloVagaCard);
        vagaCard.appendChild(cargo);
        vagaCard.appendChild(area);
        vagaCard.appendChild(requisitosAtendidos);
        vagaCard.appendChild(requisitosFaltantes);
        vagaCard.appendChild(salario);
        vagaCard.appendChild(modalidade);

    })


}

export function menuHabilidades() {
    let menuHabilidades = document.getElementById("btn-habilidades");
    let habilidadesChekbox = document.getElementById("habilidades-chekbox");
    let aberto = habilidadesChekbox.classList.toggle("menu-aberto");
    
    if (aberto) {
        menuHabilidades.textContent = "Habilidades ▾";
    } else {
        menuHabilidades.textContent = "Habilidades ▸";
    }
    

}

export function menuAreas() {
    let menuAreas = document.getElementById("btn-areas");
    let areasChekbox = document.getElementById("areas-chekbox");
    let aberto = areasChekbox.classList.toggle("menu-aberto");
    
    if (aberto) {
        menuAreas.textContent = "Área ▾";
    } else {
        menuAreas.textContent = "Área ▸";
    }
    

}


export function adicionarMaisContador(contador) {
    let textoContador = document.getElementById("contador-analise");
    localStorage.setItem("numeroContador", JSON.stringify(contador));

    
    textoContador.textContent = `Número de análises realizadas: ${contador} vezes`
}