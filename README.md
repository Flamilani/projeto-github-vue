Instruções de Uso:

Quando iniciar a criar aplicação usando biblioteca Vue.js

- usar comando de criar app: 
npm install vue
vue create projeto-github-vue
cd projeto-github-vue
npm start

Para adicionar axios que permite consumir API	
- comando: yarn add axios

Arquitetura:
Uso de input com chamada de função de "userName" para inserir nome do usuário do github e clicar botão para funcionar a chamada de pesquisa do repositório pelo nome do usuário

Url original: https://api.github.com/users/Flamilani/repos

Com dependência de axios, utiliza a estrutura de URL com parâmetro de userName:

axios.get(`https://api.github.com/users/${this.userName}/repos`)

# projeto-github-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
