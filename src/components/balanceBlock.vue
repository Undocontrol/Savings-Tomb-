<template>
    <div class="balanceBlock">
      <h1>Total money spent this week is: £{{ total.toFixed(2) }}</h1>
      <h1>Your spare change is: £{{ change.toFixed(2) }}</h1>
      <button v-on:click="sendToTomb">Send to Tomb</button>
  </div>
</template>

<script>

export default {
  name: 'balance',
  props: {
    transactions: Array
  },
  data() {
    return {
      total: 0,
      change: 0
    }
  },
  mounted: function () {
    this.calculateValues();
  },
  methods: {
    calculateValues: function() {
      this.transactions.forEach((transaction) => {
        if(transaction.direction == 'OUTBOUND') {
          this.total += Math.abs(transaction.amount);

          let roundedUp = Math.ceil(transaction.amount)
          let difference = roundedUp - transaction.amount

          this.change += difference
        } 
      })
    },
    sendToTomb: function() {
      alert('hi')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
