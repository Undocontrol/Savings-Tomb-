<template>
  <div class="transactions md">  
      <table class="balance">
        <thead>
          <tr>
            <th class="title">Currency</th>
            <th class="title">Narrative</th>
            <th class="title">Amount</th>
            <th class="title">Date</th>
            <th class="title">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.currency }}</td>
            <td>{{ transaction.narrative }}</td>
            <td v-bind:class="{ 'inbound': isInbound(transaction) }">{{ transaction.amount }}</td>
            <td>{{ new Date(transaction.created).toLocaleDateString() }}</td>
            <td>{{ transaction.balance }}</td>
          </tr>
          
          

        </tbody>
      </table>
    </div>
</template>

<script>
import api from '@/store/api.js'

export default {
  name: 'transactionsBlock',
  props: {
    balance: String,
  },
  data() {
    return {
      transactions: [],
      count: 0
    }
  },
  created: function () {
    this.fetchTransactions();
  },
  methods: {
    fetchTransactions: async function () {
      let result = await api.get('https://api-sandbox.starlingbank.com/api/v1/transactions', {
        'Authorization': 'Bearer Ty19fN4rCEx58zksV7t48znv6dfrDv69icXUjfW2mPGpWRpx5fFMvMzvJcUqTofN',
        'Accept': 'application/json'
      })

      this.transactions = result._embedded.transactions
    },
    isInbound: function(transaction) {
      return transaction.direction == 'INBOUND'
    },
    round: function(amount) {
      let roundedUp = Math.ceil(amount)
      this.count += roundedUp - amount
      return roundedUp
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  margin: 0 auto;
  width: 50%;
}

td {
  color: blue;
  width: 100%;
}

.title {
  color: blue;
  font-size: 25px;
  text-decoration: underline;
}

.transactions {
  border-radius: 10px;
  color: #fff;
  margin: auto;
  text-align: left;
  width: 1000px;
}

.inbound {
  background-color: aquamarine;
}
</style>
