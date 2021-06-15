<template>
  <div id="app">
    <navbar/>
        <router-view/>
        <notifications group="foo"/>
    <pie/>
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import pie from './components/pie.vue'

export default {
  name: 'App',
  components: {
    navbar,
    pie
    
  },

  data(){

    return{
      
    }
  },


}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
