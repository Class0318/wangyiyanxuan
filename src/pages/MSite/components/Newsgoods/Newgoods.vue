<template>
  <div>
    <div id="newgoods">
     <span class="newgoods_left">新品首发</span>
     <div class="newgoods_right">
       <span>更多</span>
       <i class="iconfont icon-icon_arrow_right"></i>
     </div>
  </div>
  <div id="newgoods_custom">
    <ul class="newgoodslist">
      <li class="newgoodsitem" v-for="(item,index) in homedata.newItemList" :key="index">
        <img :src="item.primaryPicUrl" alt="">
        <span>{{item.name}}</span>
      </li>

    </ul>
  </div>
  <div class="bian"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
     async mounted(){
       
      await this.$store.dispatch('getHome')
      
    },
    
    computed:{
      // ...mapState(['homedata'])
     ...mapState({
       homedata:state => state.msite.homedata
     })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#newgoods
  width 100%
  height 100px
  .newgoods_left
    float left
    font-size 32px
    margin: 40px 40px
  .newgoods_right
    float right
    font-size 28px
    margin: 40px 40px
#newgoods_custom
  display flex
  width 100%
  height 600px
  .newgoodslist
    overflow hidden
    display flex
    flex-wrap wrap
    .newgoodsitem
      width 216px
      height 300px
      margin-left 26px
      img
        width 216px
        height 216px
        background #F5F5F5
      span
        font-size 28px
.bian
  width 100%
  height 20px
  background #F5F5F5
 
</style>
