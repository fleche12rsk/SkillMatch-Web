class Vaga {
  constructor(empresa, cargo, area, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.area = area;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `Cargo de ${this.cargo} na empresa ${this.empresa}`;
  }
};

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, area, requisito, salario, modalidade, experienciaMes) {
    super(empresa, cargo, area, requisito, salario, modalidade);
    this.nivelExperiencia = experienciaMes;
  }

  exibirMesExperiencia() {
    return `É necessário que tenha ${this.nivelExperiencia} meses de experiência`;
  }
}

//===============================================================================//

// ANÁLISE DE COMPATIBILIDADE //

function calcularCompatibilidade(vaga, candidato) {
  
  let totalRequisitos = vaga.requisitos.length;

  let requisitosAtendidos = vaga.requisitos.filter(requisito => candidato.habilidades.includes(requisito));

  let requisitosFaltantes = vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requisito));
  
  let chanceDeContrato;

  let compatibilidade = requisitosAtendidos.length / totalRequisitos * 100;
  
  if (compatibilidade < 50) {
      chanceDeContrato = "Baixa compatibilidade";
  } else if (compatibilidade >= 50 && compatibilidade < 80) {
      chanceDeContrato = "Média compatibilidade";
  } else if (compatibilidade >= 80) {
      chanceDeContrato = "Alta compatibilidade";
  };
  

  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    area: vaga.area,
    compatibilidade: compatibilidade.toFixed(0),
    classificação: chanceDeContrato,
    requisitosAtendidos: requisitosAtendidos,
    requisitosFaltantes: requisitosFaltantes,
    salario: vaga.salario,
    modalidade: vaga.modalidade,
    textoExperiencia: vaga.exibirMesExperiencia(),
    numeroMesesExigidos: Number(vaga.nivelExperiencia)
  };
};

function resultadoFinal(vagas, candidato) {
  const resultados = vagas.map(vaga => calcularCompatibilidade(vaga, candidato));
  return resultados;
}; 

// Bug para avisar no video
function vagaMaisCompativel(resultados) {
  const vagaMaisCompativel = resultados.reduce((melhor, atual) => {
    if (Number(atual.compatibilidade) > Number(melhor.compatibilidade)) {
      return atual
    } else if (Number(atual.compatibilidade) === Number(melhor.compatibilidade)) {
      if (atual.numeroMesesExigidos < melhor.numeroMesesExigidos) {
        return atual;
      } else {
        return melhor;
      }
    } else {
      return melhor
    }
  });
  
  return vagaMaisCompativel
};


function pontosEstudar (resultados) {
  let listaRequisitosFaltantes = resultados.map(vaga => vaga.requisitosFaltantes);
  return listaRequisitosFaltantes.flat();
}


function criarContador() {
  let contador = 0;

  return function adicionarValorContador() {
    contador++;
    return contador;
  }
}







export { VagaFrontEnd, calcularCompatibilidade, resultadoFinal, vagaMaisCompativel, pontosEstudar, criarContador };