<template>
  <div>
    <div id="shopping">
        <span class="shopping_car">购物车</span>
        <span class="shopping_money">领券</span>
    </div>
    <div class="shopping_list">
      <div class="shopping_item">
        <i class="iconfont icon-dunpai"></i>
        <span>30天无忧退货</span>
        <i class="iconfont icon-dunpai"></i>
        <span>48小时快速退款</span>
        <i class="iconfont icon-dunpai"></i>
        <span>满88元免邮费</span>
      </div>
    </div>
    <div class="shopping_login">
      <div class="shopping_lg">
        <i class="iconfont icon-gouwuche1"></i>
        <span class="shopping_tianjia">去添加点什么吧</span>
      </div>
    </div>
    <div class="shopping_button">
      登录
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#shopping
  width 100%
  height 88px
  display flex
  align-items center
  .shopping_car
    font-size 36px
    color #333333
    margin-left 20px
  .shopping_money
    font-size 30px
    color #B4282D
    margin-left 520px
.shopping_list
  width 100%
  height 70px
  background #eeeeee
  color #666666
  display flex
  align-items center
  .shopping_item
    padding-left 20px
    .iconfont
      padding-right 5px
      padding-left 40px
.shopping_login
  .shopping_lg
    padding-top: 460px;
    display flex
    align-items center
    flex-direction column
    .shopping_tianjia
      font-size 28px
      color #999999
    .iconfont
      font-size: 230px
.shopping_button
  border: 1px solid red;
  width: 500px;
  height: 92px;
  font-size: 30px;
  color: white;
  background: #B4282D;
  text-align: center;
  line-height: 92px;
  margin-left: 140px;
  margin-top: 40px;
  border-radius 5px



 
</style>
