<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      from the host component, module webpack federation live update bro
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h2>
      Nice finally it works, follow the examples from here
      <a href="https://github.com/module-federation/module-federation-examples/tree/master/vue3-cli-demo">
        https://github.com/module-federation/module-federation-examples/tree/master/vue3-cli-demo
      </a>
    </h2>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
