<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product, i) in saleProducts" :key="i">
        <span class="product--name">{{ product.name }}</span>
        <span class="product--price">{{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    computed: {
        products() {
            return this.$store.state.products
        },
        saleProducts() {
            return this.$store.getters.saleProducts
        }
    }
};
</script>

<style scoped>
    div {
        border: 3px solid #212121;
        padding: 1rem;
    }
    ul {
        padding-left: 0;
        width: 50%;
        margin: 0 auto;
        padding-right: 10px;
        padding-top: .5rem;
        padding-bottom: .5rem;
        border: 3px solid #212121;
    }
    li {
        display: flex;
        flex: 1;
        justify-content: space-between;
        padding: .25rem 0 .25rem 10px;
        border-left: 5px solid transparent;
    }
    li:hover {
        border-left: 5px solid #212121;
    }
</style>
