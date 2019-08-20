<template>
  <div>
    <ul id="footer">
      <li class="footer_item" :class="{on:$route.path==='/msite'}" @click="goTo('/msite')">
        <i class="iconfont icon-weibiaoti-"></i>
        <span class="footer_item_i">首页</span>
      </li>
      <li class="footer_item" :class="{on:$route.path==='/category'}" @click="goTo('/category')">
        <i class="iconfont icon-guizi"></i>
        <span>分类</span>
      </li>               
                              <!--当true的时候，对应的亮红色-->
      <li class="footer_item" :class="{on:$route.path==='/search'}" @click="goTo('/search')">
        <i class="iconfont icon-zhaopian"></i>
        <span>识物</span>
      </li>
      <li class="footer_item" :class="{on:$route.path==='/shopping'}" @click="goTo('/shopping')">
        <i class="iconfont icon-gouwuche"></i>
        <span class="footer_item_car">购物车</span>
      </li>
      <li class="footer_item" :class="{on:$route.path==='/profile'}" @click="goTo('/profile')">
        <i class="iconfont icon-geren"></i>
        <span>个人</span>
      </li> 
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

#footer
  display flex
  width 100%
  height 98px
  position fixed
  left 0
  bottom 0
  background white
  .footer_item
    display flex
    width 40%
    height 70px
    flex-direction column
    align-items center
    margin 14px
    &.on
      color red
  .iconfont
    font-size 40px
  span 
    font-size 24px
    margin 6px
</style>
