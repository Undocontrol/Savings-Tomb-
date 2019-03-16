<template>
  <div class="contentBlock">
    <h1>{{ msg }}</h1>
    <h2>Save your 'mummy'</h2>
    <h2>Total Balance : £2235.65</h2>
  </div>
</template>

<script>
export default {
  name: 'contentBlock',
  props: {
    msg: String,
    tagline: String,
    total: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
h1 {
  font-size:50px;
}
h2 {
  font-size: 30px;
}

</style>
