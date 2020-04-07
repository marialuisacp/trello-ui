exports.data = [
  {
    title: 'Backlog',
    cards: [
      { text: 'Rodar um teste de avaliação do Front-end. Por exemplo: Lightroom', labels: ['yellow', 'red'], icons: [{ icon: 'description' }] },
      { text: 'Criação da tela inicial do trello', labels: ['purple'], icons: [{ icon: 'description' }] },
      { text: 'Modelagem do DB da aplicação', labels: [], icons: [{ icon: 'description' }, { icon: 'checklist', value: '0/5' }] },
      { text: 'Criação das APIs para consumir os cards', labels: [], icons: [{ icon: 'description' }] },
      { text: 'Refatorar o código', labels: [], icons: [{ icon: 'description' }] },
    ]
  },
  {
    title: 'Tarefas para fazer hoje',
    cards: [
      { text: 'Criar a estrutura do projeto', labels: ['purple'], icons: [{ icon: 'description' }] },
      { text: 'Definir padrões estruturais do projeto', labels: [], icons: [] },
      { text: 'Configuração do servidor onde o projeto será hospedado. Exemplo: Firebase', labels: ['green'], icons: [{ icon: 'description' }] },
      { text: 'Instalação e configuração inicial', labels: [], icons: [] },
      { text: 'Configuração do projeto utilizndo CircleCI, contendo toda a pipeline de deploy', labels: [], icons: [] },
      { text: 'Estudar o tema: Cleancode: Nomeclatura de variáveis e complexidade ciclomática', labels: ['blue', 'yellow'], icons: [{ icon: 'description' }] },
    ]
  },
  {
    title: 'Em andamento',
    cards: [
      { text: 'Leitura da documentação inicial do Next.js', labels: ['blue'], icons: [{ icon: 'attachment', value: '1' }, { icon: 'checklist', value: '4/9' }] },
      { text: 'Instalação e teste inicial do styled-components', labels: [], icons: [{ icon: 'description' }] },
      { text: 'Definição dos componentes iniciais do projeto e da estrutura de pastas e diretórios', labels: [], icons: [] },
    ]
  },
  {
    title: 'Pronto',
    cards: [
      { text: 'Criação do repositório do projeto, escrita do README.md e configurações iniciais', labels: [], icons: [] },
      { text: 'Configuração do Babel com o jest (transfomação dos arquivos de teste para versões mais novas do js)', labels: ['green'], icons: [] },
      { text: 'Leitura de documentação sobre Next.js', labels: ['blue'], icons: [] },
    ]
  },
  {
    title: 'Tarefas impedidas',
    cards: [
      { text: 'Configuração do CircleCI', labels: ['green'], icons: [] },
    ]
  },
  {
    title: 'Links importantes',
    cards: [
      { text: 'Documentação Next.js', labels: ['red'], icons: [{ icon: 'attachment', value: '1' }] },
      { text: 'Documentação Styled-Components', labels: ['red'], icons: [{ icon: 'attachment', value: '1' }] },
      { text: 'CircleCI', labels: ['red'], icons: [{ icon: 'description' }, { icon: 'attachment', value: '3' }] },
      { text: 'Documentação React Hooks', labels: ['red'], icons: [{ icon: 'attachment', value: '1' }] },
      { text: 'Documentação React Testing Library', labels: ['red'], icons: [{ icon: 'attachment', value: '1' }] },
    ]
  }
];
