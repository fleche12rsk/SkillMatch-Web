# SkillMatch Web

Simulador de compatibilidade entre o perfil de um candidato e vagas de programação.

🔗 **Acesse:** [SkillMatch Web](https://fleche12rsk.github.io/SkillMatch-Web/)
🎬 **Vídeo de apresentação:** [Link do vídeo]()
📋 **Quadro Kanban:** [Link do quadro](https://github.com/users/fleche12rsk/projects/1)

## Sobre o projeto:

O SkillMatch Web é um projeto de um simulador simples de compatibilidade entre um perfil de candidato e vagas de de programação (versão web), visando ser o mais próximo de uma situação real: analisar requisitos de vagas, comparar habilidades, calcular aderência e identificar pontos de melhoria.

##Problemas ele resolve:

Ao procurar emprego, o candidato se inscreve em vagas sem saber se realmente atende
aos requisitos — perde tempo e se frustra com respostas negativas.

O SkillMatch Web resolve isso mostrando, **antes da inscrição**:
- o percentual de compatibilidade com cada vaga;
- quais requisitos ele já cumpre e quais faltam;
- qual é a vaga mais compatível com seu perfil;
- o que estudar para alcançar 100% dessa vaga.

## Funcionalidades

- Cadastro do perfil de forma localmente (nome, áreas de interesse, habilidades e experiência)
- Cálculo de compatibilidade para ver qual vaga é a mais compatível
- Recomendação de estudo baseada nos requisitos faltantes
- Contador de análises realizadas na sessão

## Quais técnicas e tecnologias utilizadas:

**Linguagens:** HTML, CSS e JavaScript.

**Técnicas aplicadas:**
- **Módulos ES** (`import`/`export`) separando dados, regras e interface
- **POO:** classe `Vaga` e subclasse `VagaFrontEnd` (herança), instanciadas com `new` a partir do JSON
- **Métodos de array:** `map`, `filter`, `reduce`, `forEach`, `flat`
- **Closure:** contador de análises que preserva o estado entre chamadas
- **Assincronismo:** `fetch` com `async/await`, `try/catch` e verificação de `response.ok`,
  tratando os três estados (carregando, vazio e erro) com `aria-live`
- **DOM:** cards gerados dinamicamente com `createElement` e `appendChild`
- **Persistência:** `localStorage` com `JSON.stringify/parse`, tratando a primeira visita
- **Layout:** Flexbox e responsividade para telas menores com media queries
- **Acessibilidade:** `label/for`, `alt`, `aria-label`, `aria-live` foram utilizadas
- **SEO on-page:** `title` e `meta description`

**Recursos externos (via CDN):** Google Fonts e Font Awesome.

**Ferramentas:** VS Code, Git/GitHub, GitHub Projects (Kanban) e IA (Claude) para tirar
dúvidas e ajudar a investigar bugs — todo o código foi escrito e validado por mim.

## Como executar
Existem duas forma: 
**De forma online:** basta acessar o [link do GitHub Pages](https://fleche12rsk.github.io/SkillMatch-Web/).

ou 

**De forma local:**
1. Clone o repositório
2. Abra a pasta no VS Code
3. Rode com a extensão **Live Server**
> ⚠️ O projeto usa módulos ES e `fetch`, que exigem um servidor local.
> Abrir o `index.html` direto pelo arquivo (`file://`) **não funciona**.

**Como usar:** preencha o formulário com as suas informações → clique em "Verificar vagas" → veja os resultados.

## Melhorias futuras
- Criar um menu hambúrguer funcional no mobile
- Filtro e ordenação de vagas por área, salário ou modalidade
- Tema claro/escuro salvo de forma local
- Refinar o design (UI/UX)
- Ampliar o catálogo de habilidades e áreas

## Créditos

Copyright © 2010-2026 Freepik Company S.L.U. Todos os direitos reservados.
[Magnific](https://www.magnific.com/)