<template>
  <div id="app">
  <nav>
    <div class="nav-wrapper">
      <ul>
        <li><router-link to="/" class="brand-logo left">BriteCore</router-link></li> 
      </ul>
      <ul id="nav" class="right">
        <li><router-link to="/risks">See All Risks</router-link></li>     
        <li><router-link to="/addRisk">Add Risk</router-link></li>     
      </ul>
    </div>
  </nav>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li {
  margin-left: 10px;
}
</style>
