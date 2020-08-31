<template>
  <div class="hello">
    <h1 class="borda">Aplicação para Repositório de Github</h1>
    <input class="form-input" v-model="userName" placeholder="Nome do Usuário"> <button class="search-button" v-on:click="findRepo()">Buscar</button>
    <h2 v-if="ifShow">Resultado de Repositório:</h2>
    <table v-if="ifShow">
  <tr>
    <th>Repositório</th>
    <th>Estrela</th>
  </tr>
   <tr v-for="item in files" :key="item.id">
    <td>{{ item.name }}</td>
    <td>{{ item.stargazers_count }}</td>
  </tr>
</table>
<p>Desenvolvido por Flavio Milani</p>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Application',
  data () {
    return {
      userName: '',
      files: [],
      url: '',
      path: 'contents',
      ifShow: false,
      pathArray: ['contents']
    }
  },
  methods: {
    findRepo () {
      this.ifShow = true
      this.userName = this.userName
      axios.get(`https://api.github.com/users/${this.userName}/repos`)
        .then(response => {
          this.files = response.data
          this.files.sort((a, b) => {
            if (a.type === 'dir' && b.type !== a.type) return -1
            else if (a.type === 'file' && b.type !== a.type) return 1
            else return 0
          })
          console.log(this.files)
        })
        .catch(error => {
          this.ifShow = false
          console.log(error)
        })
    },
    getFiles (e) {
      if (e) {
        console.log(e.target.innerHTML)
        this.path = this.path + '/' + e.target.innerText
        this.findRepo()
      }
    },
    navigatePath (e) {
      if (e) {
        console.log(e.target.innerHTML)
        let repoStr = ''
        for (let path in this.pathArray) {
          repoStr = repoStr + this.pathArray[path]
          if (e.target.innerHTML === this.pathArray[path]) {
            break
          }
        }
        this.path = repoStr
        this.findRepo()
      }
    }
  },
  watch: {
    path () {
      this.pathArray = this.path.split('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}

.borda {
    background-color: #9ddffd;
    margin: 0 auto;
    margin-bottom: 20px;
    width: 600px;
    padding: 20px;
    border-radius: 12px;
}

ul {
  list-style-type: none;
}

.search-button {
    background-color: #2196F3;
    color: #FFF;
    padding: 15px;
    padding-bottom: 13px;
    border: 0px;
    border-radius: 6px;
    cursor: pointer;
}

.search-button:hover {
  background-color: #00bcd4;
}

.form-input {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px;
    font-size: 20px;
    border-radius: 10px;
    border: 2px solid #9E9E9E;
}
  .form-input:focus {
       border-radius: 10px;
       border: 2px solid #9E9E9E;
   }

   table {
     margin: 0 auto;
     border-collapse: collapse;
   }
   table, th, td {
     border: 1px solid #000;
     padding: 7px;
   }
</style>
