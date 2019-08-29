<template>
  <div>
    <!-- SuP+{{$store.state.count}}----{{$store.getters.getCount}} -->
     SuP+{{$store.state.count}}----{{getCount}}
     <button @click="add">add</button>
    <button @click="sub">sub</button>
  </div>
</template>
<script>
import {mapMutations,mapGetters, mapActions} from 'vuex'
export default {
  data:()=>({

  }),
  created() {
    
  },
  methods: {
//     add(){
//     this.$store.commit('add')
//   },
//     sub(){
//     this.$store.commit('sub')    
//     }
    // ...mapMutations(["add","sub"])
    ...mapActions(['add','sub'])
  },
  computed: {
      ...mapGetters(['getCount'])
  }
}
</script>
<style lang="less" scoped>
  
</style>