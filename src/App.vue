<template>
  <div>
    <my-sub></my-sub>
    <my-sup></my-sup>
  </div>
</template>
<script>
import SuB from './components/SuB.vue'
import SuP from './components/SuP.vue'
export default {
  data:()=>({

  }),
  created() {
    
  },
  methods: {

  },
  components:{
    'my-sub':SuB,
    'my-sup':SuP
  }
}
</script>
<style lang="less" scoped>
  
</style>