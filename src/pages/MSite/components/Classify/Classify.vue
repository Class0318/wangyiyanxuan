<template>
<div>
  <ul id="classify" v-if="homedata.kingKongModule">
    <li class="classify_item" v-for="(homedata,index) in homedata.kingKongModule.kingKongList" :key="index">
      <img :src="homedata.picUrl" alt="">
      <span>{{homedata.text}}</span>
    </li>
   
   
  </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
  export default {
    async mounted(){
    await this.$store.dispatch('getHome')
      console.log(this.homedata)
    },
    computed:{
      // ...mapState(['homedata'])
      ...mapState({
        homedata:state => state.msite.homedata
      })
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#classify
  width 100%
  height 340px
  display flex
  flex-wrap wrap
  .classify_item
    width 110px
    height 156px
    margin: 10px 20px;
    img
      width 110px
      height 110px
    span
      font-size 20px
      text-align center
      margin-left: 14px;
 
</style>
