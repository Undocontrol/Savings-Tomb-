<template>
  <div class="home">
    <h1>Savings Tomb</h1>
    <img alt="Indy logo" src="../assets/indy.png"/>
    <contentBlock />
    <transactionsBlock v-bind:transactions="transactions" />
    <balanceBlock v-bind:transactions="transactions" />
  </div>
</template>

<script>
// @ is an alias to /src
import contentBlock from '@/components/contentBlock.vue'
import transactionsBlock from '@/components/transactionsBlock.vue'
import balanceBlock from '@/components/balanceBlock.vue'
import savingsBlock from '@/components/savingsBlock.vue'
import api from '@/store/api.js'

export default {
  name: 'home',
  components: {
    contentBlock,
    transactionsBlock,
    balanceBlock,
    savingsBlock
  },
  data() {
    return {
      transactions: []
    }
  },
  created: function () {
    this.fetchTransactions();
  },
  methods: {
    fetchTransactions: async function () {
      let result = await api.get('https://api-sandbox.starlingbank.com/api/v1/transactions')
      this.transactions = result._embedded.transactions
    },
    /*
    round: function(amount) {
      let roundedUp = Math.ceil(amount)
      this.count += roundedUp - amount
      return roundedUp
    }*/
  }
}
</script>
<style scoped>
/*.home {
  background-image: url('/assets/background.png');
  background-repeat: no-repeat;
  background-size: 100%;
}*/
</style>
