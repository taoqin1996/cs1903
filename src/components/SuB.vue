<template>
  <div>
     <!-- SuB+{{$store.state.count}} -->
     SuB+{{count}}---num+{{num}}
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data:()=>({

  }),
  created() {
    
  },
  methods: {
    
  },
  computed: {
    // count(){
    //     return this.$store.state.count
    // } 
    ...mapState(["count","num"])  
  }
}
</script>
<style lang="less" scoped>
  
</style>