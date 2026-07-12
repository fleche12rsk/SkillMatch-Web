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
  constructor(empresa, cargo, requisito, salario, modalidade, experienciaMes) {
    super(empresa, cargo, requisito, salario, modalidade);
    this.nivelExperiencia = experienciaMes;
  }

  exibirTrabalho() {
    return `É necessário que tenha ${this.experienciaMes} meses de experiência para conseguir atender os requisitos da vaga de ${this.empresa}`;
  }
}

//===============================================================================//

// ANÁLISE DE COMPATIBILIDADE //

function calcularCompatibilidade(vagas, candidato) {
  
  let totalRequisitos = vagas.requisitos.length;

  let requisitosAtendidos = vagas.requisitos.filter(requisito => candidato.habilidades.includes(requisito));

  let habilidadesFaltantes = vagas.requisitos.filter(requisito => !candidato.habilidades.includes(requisito));
  
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
    empresa: vagas.empresa,
    cargo: vagas.cargo,
    area: vagas.area,
    compatibilidade: compatibilidade.toFixed(0),
    classificação: chanceDeContrato,
    requisitosAtendidos: requisitosAtendidos,
    habilidadesFaltantes: habilidadesFaltantes
  };
};

function resultadoFinal(vagas, candidato) {
  const resultados = vagas.map(vagas => calcularCompatibilidade(vagas, candidato));
  return resultados;
};

function vagaCompativel(resultados) {
  const vagaMaisCompativel = resultados.reduce((melhor, atual) => {
    if (atual.compatibilidade > melhor.compatibilidade) {
      return atual
    } else {
      return melhor
    }
  });
};

function habilidadesFaltantes(resultados) {
  let habilidadeQueFalta = resultados.map(vagas => vagas.habilidadesFaltantes)
  return habilidadeQueFalta.flat()
}

export { VagaFrontEnd, calcularCompatibilidade, resultadoFinal, vagaCompativel, habilidadesFaltantes };