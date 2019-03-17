<template>
    <div class="balanceBlock">
      <h1>Total money spent this week is: £{{ calculateTotal.toFixed(2) }}</h1>
      <h1>Your spare change is: £{{ calculateChange.toFixed(2) }}</h1>
      <button v-on:click="sendToTomb">Send To Tomb</button>
      <img alt="mummyMoney logo" src="../assets/mummymoney.jpg"/>
  </div>
</template>

<script>
import api from '@/store/api.js'

export default {
  name: 'balance',
  props: {
    transactions: Array
  },
  computed: {
    calculateTotal: function() {
      let total = 0;
      this.transactions.forEach((transaction) => {
        if(transaction.direction == 'OUTBOUND') {
          total += Math.abs(transaction.amount);
        } 
      })
      return total
    },
    calculateChange: function() {
      let change = 0;
      this.transactions.forEach((transaction) => {
        if(transaction.direction == 'OUTBOUND') {
          //console.log('trnsaction amount', Math.abs(transaction.amount))
          let roundedUp = Math.ceil(Math.abs(transaction.amount))
          let difference = roundedUp - transaction.amount
          //console.log('difference is', difference)
          change += parseInt(difference)
        } 
      })
      return change
    }
  },
  methods: {
    sendToTomb: async function() {

      let goal = await api.put('https://api-sandbox.starlingbank.com/api/v2/account/e26bce59-cc5b-4cdf-0e0e-c4e3ef5e41fa/savings-goals', 
        {
          "currency": "GBP",
          "name": "Tomb",
          "target": {
            "currency": "GBP",
            "minorUnits": 5000
          }
        }
      )

      let transfer = await api.put(
        `https://api-sandbox.starlingbank.com/api/v2/account/e26bce59-cc5b-4cdf-0e0e-c4e3ef5e41fa/savings-goals/${goal.data.savingsGoalUid}
/add-money/${this.$uuid.v4()}`, 
        {
          "amount": {
            "currency": "GBP",
            "minorUnits": this.calculateChange
          }
        }
      )

      console.log(transfer);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
  background:white;
  border: 2px solid cornflowerblue;
  border-radius: 5px;
  color: black;
  display: block;
  margin: 0 auto;
  padding: 20px;
}

button:hover {
  background-color: cornflowerblue;
  color: white;
  cursor: pointer;
}

img {
  display: block;
  margin: 0 auto;
}

</style>
