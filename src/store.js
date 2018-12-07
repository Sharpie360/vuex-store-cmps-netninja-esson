import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    // data
    state: {
        products: [
            { name: "Banana Skin", price: 20 },
            { name: "Shiny Star", price: 30 },
            { name: "Green Shell", price: 80 },
            { name: "Red Shell", price: 60 }
        ]
    },
    getters: {
        saleProducts: state => {
            const saleProducts = this.$store.state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            })
            return saleProducts
        }
    }
})

