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

