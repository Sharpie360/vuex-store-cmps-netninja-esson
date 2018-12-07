<template>
  <div>
    <h2>Product List Two</h2>
    <ul>
        <li v-for="(product, i) in products" :key="i">
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
        }
    }
}
</script>

<style scoped>
    div {
        background-color: #212121;
        color: #eee;
        padding: 1rem;
    }
    ul {
        padding-left: 0;
        width: 50%;
        margin: 0 auto;
    }
    li {
        display: flex;
        flex: 1;
        justify-content: space-between;
        padding: .25rem 0 .25rem 10px;
        border-left: 3px solid transparent;
    }
    li:hover {
        border-left: 3px solid #eee;
    }
</style>
