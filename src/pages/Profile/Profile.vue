<template>
  <div>
    <div id="profile_header">
      <div class="profile_tubiao">
        <i class="iconfont icon-weibiaoti-"></i>
      </div>
      <div class="profile_pic">
        <img src="./images/aa.png" alt="">
      </div>
      <div class="profile_right">
        <i class="iconfont icon-gouwuche"></i>
        <i class="iconfont icon-icon_search"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#profile_header
  width 100%
  height 44px
  display flex
  justify-content space-between
  padding: 10px 10px;
  box-sizing: border-box;
  .profile_tubiao
    .icon-weibiaoti-
      font-size 50px
  .profile_pic
    img
      width: 172px;
      height: 54px;
  .profile_right
    .iconfont
      margin-right: 10px;
      font-size 50px

  
 
</style>
