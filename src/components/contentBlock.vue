<!--
File Overview
* Contains content for page header.
-->
<template>
  <div class="contentBlock">
     <h1>Savings Tomb</h1>
    <img alt="Indy logo" src="../assets/indy.png"/>
    <h2>Save your 'mummy'</h2>
    <h2>Total Balance : <span class="totalBalance"> £{{ calculateTotal.toFixed(2) }}</span></h2>
  </div>
</template>

<script>
export default {
  name: 'contentBlock',
  props: {
    tagline: String,
    total: String,
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentBlock {
  background-image: url('/assets/background.png');
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius:20px;
  padding: 10px;
}

.totalBalance {
  font-size:50px;
}

div {
  color:whitesmoke;
}
a {
  color: rosybrown;
}
h1 {
  font-size:50px;
}
h2 {
  font-size: 30px;
}

img {
  height: 300px;
}

</style>
