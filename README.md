# Lab.01 - Configurando Projeto TypeScript e React
Este laboratório mostra como criar e configurar um projeto n VSCode com TypeScript e React através do Vite.

Currently, two official plugins are available: (Atualmente, dois plugins oficiais estão disponíveis:)

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Configurando o projeto

1. Para criar uma aplicação React com Typescript podemos utilizar um template de projeto disponibilizado pelo Vite (https://vitejs.dev/). Utilize o seguinte comando:

npm create vite@latest primeiroProjeto

2. Responda as perguntas com as seguintes opções:
- Need to install the following packages: create-vite@... (y)
- Select a framework: React
- Select a variant: TypeScript

3. Abra o diretório recém-criado no VSCode (cd primeiroProjeto)

4. Abra uma linha de comando dentro do novo diretório.

5. Execute a instalação das dependências através do comando:

npm install

6. Execute a aplicação em modo de desenvolvimento através do comando:

npm run dev

7. Abra um navegador no endereço http://localhost:3000/ e observe o resultado.

5. Para realizar um preview local do resultado de produção, execute o comando:

npm run preview

6. Para criar uma versão de distribuição adequada para ser instalada em um servidor web, execute o comando:

npm run build

7. Adicionalmente podemos utilizar a ferramenta React Developer Tools (https://react.dev/learn/react-developer-tools) que é um plugin para navegadores que permite observar o estado dos componentes e verificar inconsistências.

# Lab.02 - Componentes com Estado Simples
Este laboratório exercita a construção de componentes com gerenciamento simplificado de estado
através de React Hooks.

- Exercícios
1. Retome o exemplo de implementação do contador de cliques do botão. Crie um novo componente que
permita ao usuário definir o valor inicial do contador através de props.

2. Com base no componente contador do exercício anterior, crie um novo componente que possua um botão
adicional para decrementar a contagem.

3. Retome o exemplo de implementação do componente de relógio. Crie um novo componente que permita ao
usuário “ligar” e “desligar” o relógio, de modo que um relógio somente renderize a alteração no tempo caso
esteja ligado. Dica: você precisará utilizar um dado adicional no estado do componente e utilizar o hook
useEffect de maneira condicional com array de dependências.
