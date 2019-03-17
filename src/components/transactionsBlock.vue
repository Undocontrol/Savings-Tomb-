<!--
File Overview:
* Displays account transactions -->
<template>
  <div class="transactions">  
      <table class="balance">
        <thead>
          <tr>
            <th class="title">Currency</th>
            <th class="title">Date</th>
            <th class="title">Narrative</th>
            <th class="title">Amount</th>
            <th class="title">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.currency }}</td>
            <td>{{ new Date(transaction.created).toLocaleDateString() }}</td>
            <td>{{ transaction.narrative }}</td>
            <td v-bind:class="{ 'inbound': isInbound(transaction) }">{{ transaction.amount }}</td>
            <td>{{ transaction.balance }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>

export default {
  name: 'transactionsBlock',
  props: {
    balance: String,
    transactions: Array
  },
  methods: {
    //checks if the direction of the transaction is imbound for styling.
    isInbound: function(transaction) {
      return transaction.direction == 'INBOUND'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.inbound {
  background-color: aquamarine;
}

table {
  margin: 0 auto;
  width: 100%;
}

td {
  border-bottom: 1px solid wheat;
  color: rosybrown;
}

.title {
  color:rosybrown;
  font-size: 25px;
  /*text-decoration: underline;*/
}

.transactions {
  border-radius: 10px;
  color:whitesmoke;
  margin: auto;
  text-align: left;
  width: 1000px;
}
</style>
