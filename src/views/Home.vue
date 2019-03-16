<template>
  <div class="home">
    <contentBlock msg= "Savings Tomb"/>
    <img alt="Indy logo" src="../assets/indy.png"/>
    <contentBlock tagline="Save your 'mummy'"/>
    <contentBlock total= "Balance:"/>
    <transactionsBlock balance="£4000.00"/>
    <savingsBlock purpose="This saving is for....Pankor Palace"/>
    <savingsBlock roundUp="You've made:"/>
  </div>
</template>

<script>
// @ is an alias to /src
import contentBlock from '@/components/contentBlock.vue'
import transactionsBlock from '@/components/transactionsBlock.vue'
import balanceBlock from '@/components/balanceBlock.vue'
import savingsBlock from '@/components/savingsBlock.vue'


export default {
  name: 'home',
  components: {
    contentBlock,
    transactionsBlock,
    balanceBlock,
    savingsBlock
  }
}
</script>

