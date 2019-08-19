<template>
  <div>
      <div id="welcome">
       <div class="welcome_top">
       <span class="welcome_left">人气推荐</span>
       <div class="welcome_right">
         <span>更多</span>
         <i class="iconfont icon-icon_arrow_right"></i>
       </div>
     </div>
     <div class="welcome_middle">
       <img src="https://yanxuan-item.nosdn.127.net/89d86a4e463115e366daf841b9bcff46.png?imageView&quality=65&thumbnail=280x280" alt="">
       <div class="welcome_bottom">
         <span class="welcome_one">抄底特惠</span><br><br>
         <span class="welcome_two">新色 奢华植层水牛皮...</span><br>
         <span class="welcome_three">三峡水牛头层皮，高端夏凉必备</span><br>
         <span class="welcome_four">￥1949</span>
       </div>
     </div>
     <div class="welcome_things">
       <ul class="welcomelist">
         <li class="welcomeitem">
           <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png?imageView&thumbnail=216x216&quality=75" alt="">
           <span>￥256</span>
         </li>
         <li class="welcomeitem">
           <img src="https://yanxuan-item.nosdn.127.net/19dd80b9fe9b430817562665ade23c54.png?imageView&thumbnail=216x216&quality=75" alt="">
           <span>￥53</span>
         </li>
         <li class="welcomeitem">
           <img src="https://yanxuan-item.nosdn.127.net/8c96757210b51606c85604813f749bd0.png?imageView&thumbnail=216x216&quality=75" alt="">
           <span>￥26</span>
         </li>
       </ul>
     </div>
     <div class="sales">1件9折</div>
     <div class="bian"></div>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#welcome
  width 100%
  .welcome_top
    overflow hidden
    .welcome_left
      float left
      font-size 32px
      margin: 40px 40px
    .welcome_right
      float right
      font-size 28px
      margin: 40px 40px
  .welcome_middle
    display flex
    width 100%
    height 280px
    background #FEF0DF
    border 30px solid white
    box-sizing border-box
    img
      width 240px
      height 240px
    .welcome_bottom
      margin: 52px 56px;
      .welcome_one
        font-size 20px
        color #B4282D
        background rgba(255,255,255,0.9)
        border 1px solid #B4282d
        border-radius: 6px;
      .welcome_two
        font-size 28px
        color #333333
      .welcome_three
        font-size 24px
        color #7f7f7f
      .welcome_four
        font-size 28px
        color #B4282D
  .welcome_things
    display flex
    width 100%
    height 240px
    .welcomelist
      display flex
      flex-wrap wrap
      .welcomeitem
        display flex
        flex-direction column
        width 216px
        height 240px
        margin-left 26px
        img
          width 216px
          height 216px
          background #F5F5F5
        span
          font-size 28px
  .sales
    border 1px solid red
    display inline-block
    font-size 20px
    padding: 8px 8px;
    border-radius: 14px;
    margin: 20px 20px;
.bian
  width 100%
  height 20px
  background #F5F5F5
 
</style>
