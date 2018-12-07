<template>
  <div id="app">
    <h1>Learning Vuex</h1>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>

  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'


export default {
  name: "App",
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
  },
  data () {
    return {
      
    }
  }
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
