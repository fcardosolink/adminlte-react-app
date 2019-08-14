# ATENÇÃO - este é um projeto em andamento

## Sobre o projeto
AdminLTE - React - Exemplo

### Motivação
- Prover template React completo e de qualidade, que possa ser customizado facilmente.
- Laboratório

### Andamento
- 28 classes do AdminLTE montadas
- Ambiente de desenvolvimento funcionando
- Página starter funcionando em modo de desenvolvimento
- Exemplo de Dashboard estatico implementado
- Exemplo de Dashboard dinâminco implementado

### Próximos passos
- Preparar login de acesso
- Autenticação com base em leitura de api

### Dependências
- nodes v10.15.3
- Template AdminLTE v2.4.15
- create-react-app v3.0.1

### Dependências React
```
npm i --save-dev react-router@5.0.1
npm i --save-dev react-router-dom
npm i --save-dev react-redux
npm i --save-dev redux
npm i --save-dev redux-promise # midware para tratar promises
npm i --save-dev redux-multi # midware: disparar multiplas promises em paralelo (array)
npm i --save-dev redux-thunk # midware: disparar um méthodo que irá disparar as ações (dispatch)

```

### Outras dependências
```
npm i --save-dev axios
npm i --save-dev redux-form

```

### Dependência Backend de teste (pasta: backend-test)
```
npm init -y
npm i --save json-server
```
- para roder backend-test na porta 3001
`npm start`


### Anotações
- O template AdminLTE está sendo utilizada diretamete na pasta public  
- Está em análise a possíbilidade do uso de dependência adminlte para react

### Dependências React em uso
- react@16.8.6
- react-dom@16.8.6
- react-scripts@3.0.1

### Para instalar React
npm i -g create-react-app 

### Para rodar o servidor do react
`npm start`

### Para acessar serviço em modo de desenvolvimento
[http://localhost:3000/](http://localhost:3000/)


### Para geral um build
`npm run build`


### Para Criar um novo app
create-react-app <nome-do-app>

### Links relacionados
[https://reactjs.org/](https://reactjs.org/)
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
[Create React App](https://github.com/facebook/create-react-app).

[https://adminlte.io/](https://adminlte.io/)


