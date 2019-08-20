<template>
  <div>
     <div id="headerContainer">
      <div class="container">
      <img src='../images/aa.png' class="logo"/>
      <div class="search">
        <i class="iconfont icon-icon_search"></i>
        <span class="placeholder">搜索商品，共21615款好物</span>
      </div>
      <div class="login_denglu">
          <div class="login" @click="$router.push('/profile')">登录</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
html,body
  height 3000px
#headerContainer
  width 100%
  height 88px
  .container
    display flex
    align-items center
    .logo
      height 40px
      margin-left 24px
    .search
      display flex
      align-items center
      justify-content center
      background #EDEDED
      color #666666
      border 1px solid #EDEDED
      margin: 20px 16px;
      border-radius: 8px;
      padding: 8px 16px;
    .login_denglu
    .placeholder
      font-size 28px
      padding 4px 16px
      .login
        font-size 24px
        width 60px
        height 28px
        line-height 28px
        color #B4282D
        border 1px solid #B4282D
        padding 4px 4px
        border-radius 10px
        text-align center
 
</style>
