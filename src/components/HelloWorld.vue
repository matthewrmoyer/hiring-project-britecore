<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <md-card>
      <md-card-header></md-card-header>
      <md-card-content>
        <p class="flow-text">There are lots of interesting things you can do here! One thing to explore the 
          <router-link to="/risks">Risk Types page.</router-link> 
          There, you can see all of the risk types that users have added, as well as click a risk type to see the fields associated with that risk.</p>
        <p class="flow-text">You can also naviagate to the 
        <router-link to="/addRisk">Add Risk</router-link> 
        page, where you can create a new risk type. For example, if you have a new client inquiring about Cyber Liability Coverage, you can create a form containing all of the necessary fields required to add this risk type.</p>
        <p class="flow-text">If you get lost, you can always click the BriteCore logo above to bring you home.</p>
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

p {
  line-height: 1.25;
}
</style>
