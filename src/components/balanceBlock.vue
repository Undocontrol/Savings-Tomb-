<!--File Overview
* Displays the spare change calculated from the transactions and offers the user
* the ability to send spare change to a savings goal or "tomb".
-->
<template>
    <div class="balanceBlock">
      <h1>Total money spent this week is: £{{ calculateTotal.toFixed(2) }}</h1>
      <h1>Your spare change is: £{{ (calculateChange / 100).toFixed(2) }}</h1>
      <button id="show-modal" @click="sendToTomb">Send to tomb</button>

      <modal name="confirmation">
        Congratulations Tomb Raider! You've added £{{ (calculateChange / 100).toFixed(2) }} to your Tomb.
        <button id="close-modal" @click="hideModal">OK</button>
      </modal>
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
          let roundedUp = Math.ceil(transaction.amount)
          let difference = (roundedUp - transaction.amount) * 100
          change += difference
        } 
      })
      return change
    }
  },
  methods: {
    hideModal: function() {
      this.$modal.hide('confirmation')
    },
    sendToTomb: async function() {

      this.$modal.show('confirmation')
      //Firstly, lets create a savings goal
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
    //Then send spare change to savings goal.
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
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
  background:whitesmoke;
  border: 2px solid rosybrown;
  border-radius: 5px;
  color: black;
  display: block;
  font-size: 20px;
  margin: 0 auto;
  padding: 20px;
}

button:hover {
  background-color: rosybrown;
  color:whitesmoke;
  cursor: pointer;
}

</style>
