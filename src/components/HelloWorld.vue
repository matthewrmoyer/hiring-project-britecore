<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <md-card>
      <md-card-header></md-card-header>
      <md-card-content>
        <p>There are lots of interesting things you can do here! One thing to explore the Risk Types page. There, you can see all of the risk types that users have added, as well as the fields associated with that risk type.</p>
        <p>You can also naviagate to the 
        <router-link to="/addRisk">Add Risk</router-link> 
        page, where you can create a new risk type. For example, if you have a new client inquiring about Cyber Liability Coverage, you can create a form containing all of the necessary fields required to add this risk type.</p>
        <p>If you get lost, you can always click the logo above to bring you home.</p>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the BriteCore Administration Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
