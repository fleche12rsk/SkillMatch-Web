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
};

export function renderizarVagas(resultados) {

    resultados.forEach(vaga => {

        let resultadoVagaIndex = document.getElementById("vagas");
        let vagaCard = document.createElement("div");
        let tituloVagaCard = document.createElement("h3");
        let cargo = document.createElement("p");
        let area = document.createElement("p");
        let sobre = document.createElement("p");
        let requisitosAtendidos = document.createElement("ul");
        let requisitosFaltantes = document.createElement("ul");
        let textoRequisitoAtendido = document.createElement("p");
        let textoRequisitoFaltante = document.createElement("p");

        vaga.requisitosAtendidos.forEach(requisito => {
            let valorListaAtendidos = document.createElement("li");
            
            valorListaAtendidos.textContent = requisito;
            
            requisitosAtendidos.appendChild(valorListaAtendidos);
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
        textoRequisitoAtendido.textContent = "Requisitos atendidos:"
        textoRequisitoFaltante.textContent = "Requisitos faltantes:"
        salario.textContent = `R$:${vaga.salario}`
        modalidade.textContent = `TIpo: ${vaga.modalidade}`


        resultadoVagaIndex.appendChild(vagaCard);
        vagaCard.appendChild(tituloVagaCard);
        vagaCard.appendChild(cargo);
        vagaCard.appendChild(area);
        vagaCard.appendChild(textoRequisitoAtendido);
        vagaCard.appendChild(requisitosAtendidos);
        vagaCard.appendChild(textoRequisitoFaltante);
        vagaCard.appendChild(requisitosFaltantes);
        vagaCard.appendChild(salario);
        vagaCard.appendChild(modalidade);

    })


};

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
    

};

export function exibirMelhorVaga(melhorVaga) {
    let divMelhorVaga = document.getElementById("melhor-vaga");
    divMelhorVaga.innerHTML = "";
    let tituloMelhorVaga = document.createElement("h3");
    let cargoMelhor = document.createElement("p");
    let areaMelhor = document.createElement("p");
    let requisitosAtendidosMelhor = document.createElement("ul");
    let requisitosFaltantesMelhor = document.createElement("ul");
    let textoRequisitoAtendidoMelhor = document.createElement("p");
    let textoRequisitoFaltanteMelhor = document.createElement("p");
    melhorVaga.requisitosAtendidos.forEach(requisito => {
        let valorListaAtendidosMelhor = document.createElement("li");
            
        valorListaAtendidosMelhor.textContent = requisito;
            
        requisitosAtendidosMelhor.appendChild(valorListaAtendidosMelhor);
    });
    melhorVaga.requisitosFaltantes.forEach(requisito => {
        let valorListaFaltantesMelhor = document.createElement("li");

        valorListaFaltantesMelhor.textContent = requisito;
        
        requisitosFaltantesMelhor.appendChild(valorListaFaltantesMelhor);
    });
    let salarioMelhor = document.createElement("p");
    let modalidadeMelhor = document.createElement("p");


    tituloMelhorVaga.className = "titulo-melhor-vaga";
    cargoMelhor.className = "cargo-melhor-vaga";
    areaMelhor.className = "sobre-melhor-vaga";
    requisitosAtendidosMelhor.className = "requisitos-atendidos-melhor-vagas";
    requisitosFaltantesMelhor.className = "requisitos-faltantes-melhor-vagas";
    salarioMelhor.className = "salario-melhor";
    modalidadeMelhor.className = "modalidade-melhor";



    tituloMelhorVaga.textContent = melhorVaga.empresa;
    cargoMelhor.textContent = melhorVaga.cargo;
    areaMelhor.textContent = `Área: ${melhorVaga.area}`;
    textoRequisitoAtendidoMelhor.textContent = "Requisitos atendidos:";
    textoRequisitoFaltanteMelhor.textContent = "Requisitos faltantes:";
    salarioMelhor.textContent = `R$:${melhorVaga.salario}`;
    modalidadeMelhor.textContent = `TIpo: ${melhorVaga.modalidade}`;


    divMelhorVaga.appendChild(tituloMelhorVaga);
    divMelhorVaga.appendChild(cargoMelhor);
    divMelhorVaga.appendChild(areaMelhor);
    divMelhorVaga.appendChild(textoRequisitoAtendidoMelhor);
    divMelhorVaga.appendChild(requisitosAtendidosMelhor);
    divMelhorVaga.appendChild(textoRequisitoFaltanteMelhor);
    divMelhorVaga.appendChild(requisitosFaltantesMelhor);
    divMelhorVaga.appendChild(salarioMelhor);
    divMelhorVaga.appendChild(modalidadeMelhor);

    
    
};

export function adicionarMaisContador(contador) {
    let textoContador = document.getElementById("contador-analise");
    localStorage.setItem("numeroContador", JSON.stringify(contador));

    
    textoContador.textContent = `Número de análises realizadas: ${contador} vezes`
};

export function textoPontosEstudar(candidato, melhorVaga) {
    let estudarFaltantes = document.getElementById("recomendacao-estudo");
    let textoEstudo = document.getElementById("texto-estudo")
    

    textoEstudo.textContent = `Olá ${candidato.nome}, recomendamos a você que estude ${melhorVaga.requisitosFaltantes} para alcançar 100% dos requisitos da vaga mais
    compatível com o seu perfil. Você pode optar por assistir vídeo no Youtube ou Realizar cursos sobre os conteúdos que você ainda não domina para obter o conhecimento
    e alcançar suas metas!`;

    estudarFaltantes.appendChild(textoEstudo)
    
};