Vue.component('test-component', {
    props: ['coin'],
    data() {
        return {
            value: 0,
        }
    },
    methods: {
        toggleShowPrices() {
            this.coin.showprices = !this.coin.showprices
            this.$emit('change-color', 'param1', 45)
        }
    },
    computed: {
        convertedValue() {
            return !this.value ? 0 : this.value / this.coin.price
        }
    },    
    created() {
        console.log('Created Child... Aquí se puede hacer llamada a API Rest')
    },
    mounted() {
        console.log('Mounted Child... DOM disponible para acceder a elementos HTML ')
    },
    template: `
    <div>
    <span v-on:click="toggleShowPrices">{{coin.showprices ? 'Ocultar' : 'Mostrar'}}</span>
    <br> <br>
    <img v-if="coin.showprices" v-bind:src="coin.image" :alt="coin.name" width="60px" height="60px">
    <br>
    <input type="number" v-model="value">
    <span>{{convertedValue}}</span>
    <slot name="text"></slot>
    <slot name="link"></slot>
    </div>`
})



const app = new Vue({
    el: '#app',
    data() {
        return {
            brand: {
                name: 'Bitcoin',
                symbol: 'BTC',
                image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                showprices: true,
                price: 7900,
            },
            changePercent: 35,
            prices: [10, 11, 12, 122, 133, 198, 1998],
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
            ],
        }
    },
    computed: {
        title() {
            return `${this.brand.name}  ${this.brand.symbol}`
        }
    },
    watch: {
        showprices(newvalue, old) {
            console.log(newvalue, old)
        }
    },
    methods: {
        changeColor(param1, param2) {
            console.log('Escuchando evento desde componente hijo, parámetros:', param1, param2)
        },
        removeItem(itemId) {
            console.log(itemId)
        }
    },
    created() {
        console.log('Created... Aquí se puede hacer llamada a API Rest')
    },
    mounted() {
        console.log('Mounted... DOM disponible para acceder a elementos HTML ')
    }
})
