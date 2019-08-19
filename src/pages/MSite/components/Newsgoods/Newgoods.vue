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
      <li class="newgoodsitem">
        <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥256</span>
      </li>
      <li class="newgoodsitem">
        <img src="https://yanxuan-item.nosdn.127.net/19dd80b9fe9b430817562665ade23c54.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥53</span>
      </li>
      <li class="newgoodsitem">
        <img src="https://yanxuan-item.nosdn.127.net/8c96757210b51606c85604813f749bd0.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥26</span>
      </li>
      <li class="newgoodsitem">
        <img src="https://yanxuan-item.nosdn.127.net/2f800432797432dfdfdb135f98735cce.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥79</span>
      </li>
      <li class="newgoodsitem">
        <img src="https://yanxuan-item.nosdn.127.net/8427b14107deadbc140e95367ae38d5e.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥156</span>
      </li>
      <li class="newgoodsitem">
        <img src="https://yanxuan-item.nosdn.127.net/d0aba28ac46db2434da3fbd8330d8e00.png?imageView&thumbnail=216x216&quality=75" alt="">
        <span>￥56</span>
      </li>
    </ul>
  </div>
  <div class="bian"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
