<!--
File Overview:
* This is the main "view", and importing all components into this view.
-->

<template>
  <div class="home">
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
import api from '@/store/api.js'

export default {
  name: 'home',
  components: {
    contentBlock,
    transactionsBlock,
    balanceBlock,
    savingsBlock,
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
    /*
    * Adds transaction lookup here so that it can filter down into the child components. 
    */
    fetchTransactions: async function () {
      let result = await api.get('https://api-sandbox.starlingbank.com/api/v1/transactions')
      this.transactions = result._embedded.transactions
    }
  }
}
</script>
<style scoped>
.home {
  background:snow;
}
</style>
