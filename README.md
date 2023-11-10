# Aplicação To-Do List em React

Este é um aplicativo To-Do List simples construído com React que permite aos usuários adicionar, editar, marcar como concluído e excluir tarefas. Os dados das tarefas são armazenados no Local Storage, o que permite que os usuários visualizem e mantenham suas tarefas mesmo após a atualização da página.

## Funcionalidades

- Adicionar uma nova tarefa.
- Marcar tarefas como concluídas ou não concluídas.
- Editar o nome de uma tarefa existente.
- Excluir tarefas.
- Limpar o histórico de tarefas armazenadas no Local Storage.

## Como Iniciar

Siga estas etapas para executar a aplicação em sua máquina local:

1. Certifique-se de que você tenha o [Node.js](https://nodejs.org/) instalado.

2. Clone este repositório:

   ```bash
   git clone https://github.com/VitorHmaia/todo-react-app

3. Navegue até o diretório do projeto:

     ```
    cd todo-react-app
4. Instale as dependências do projeto:
    ```
    npm install
5. Inicie o servidor de desenvolvimento:
    ```
    npm start

A aplicação estará disponível em http://localhost:3000 no seu navegador.

## Persistência de Dados
Os dados das tarefas são armazenados localmente no Local Storage do navegador. Isso significa que as tarefas serão mantidas mesmo após a atualização da página ou o fechamento do navegador.

## Estrutura do Projeto

`src/App.jsx`: Componente principal que renderiza o aplicativo.

`src/components/TodoWrapper.jsx`: Componente que gerencia a lista de tarefas e fornece funcionalidades de adição, edição, exclusão e marcação como concluído.

`src/components/TodoForm.jsx`: Componente de formulário para adicionar novas tarefas.

`src/components/EditTodoForm.jsx`: Componente de formulário para editar tarefas existentes.

`src/components/Todo.jsx`: Componente que exibe uma tarefa individual.

`src/components/TodoWrapperLocalStorage.jsx`: Componente que salva os dados no LocalStorage do navegador.

