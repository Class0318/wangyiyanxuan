<template>
  <div>
     <div id="limited">
    <span class="limited_time">限时购</span>
    <span class="limited_time">01:16:45</span>
    <div class="limited_more">
      <span>更多</span>
      <i class="iconfont icon-icon_arrow_right"></i>
    </div>
  </div>
  <div id="limitedgoods">
    <ul class="limitedlist" v-if="homedata.flashSaleModule">
      <li class="limiteditem" v-for="(item,index) in homedata.flashSaleModule.itemList" :key="index">
        <img :src="item.picUrl" alt="">
        <span>{{item.activityPrice}}</span>
      </li>

    </ul>
  </div>
  <div class="bian"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
#limited
  width 100%
  height 100px
  .limited_time
    float left
    margin: 30px 40px;
  .limited_more
    width 120px
    height 30px
    float right
    margin: 30px 20px;
    span
      display block
      color #333333
      font-size 28px
      float left
    iconfont
      float right
#limitedgoods
  display flex
  width 100%
  height 600px
  .limitedlist
    overflow hidden
    display flex
    flex-wrap wrap
    .limiteditem
      width 216px
      height 300px
      margin-left: 26px;
      img
        width 216px
        height 216px
        background #F5F5F5
      span
        font-size 28px
 
</style>
