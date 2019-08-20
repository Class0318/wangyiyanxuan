<template>
  <div id="goods_huise">
    <div id="goods_header">
      <div class="goods_top">
        <i class="iconfont icon-icon_search"></i>
        <input type="text" placeholder="夏凉床品 季末特惠">
      </div>
      <span class="goods_no">取消</span>
    </div>
    <div id="goods_foot">
      <div class="goods_hot">热门搜索</div>
      <ul class="goods_list">
        <li class="goods_item red">轻弹云朵拖鞋9.9元</li>
        <li class="goods_item red">中秋月饼 上新热卖</li>
        <li class="goods_item">9.9元超值专区</li>
        <li class="goods_item">云音乐周边好物</li>
        <li class="goods_item">拖鞋</li>
        <li class="goods_item">新上乳胶床品</li>
        <li class="goods_item">耳机</li>
        <li class="goods_item">酸梅汤 吃货推荐</li>
        <li class="goods_item">月饼</li>
        <li class="goods_item">内裤</li>
        <li class="goods_item">电动牙刷</li>
        <li class="goods_item">手机壳</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#goods_huise 
  #goods_header
    width 100%
    display flex
    align-items center
    justify-content space-around
    box-sizing border-box
    padding-top 30px
    .goods_top
      display flex
      input
        width 540px
        height 40px
        background #F4F4F4
        font-size 28px
        border 1px solid #F4F4F4
        padding 12px 0
      .icon-icon_search
        background #F4F4F4
        font-size 42px
        padding-right 30px
    .goods_no
      font-size 28px
      color #333333
  #goods_foot
    background white
    .goods_hot
      font-size 28px
      color #999999
      padding-top: 40px;
      padding-left: 40px;
    .goods_list
      padding-top 40px
      display flex
      flex-wrap wrap
      .goods_item
        font-size 24px
        color #333333
        border 2px solid #999999
        display: flex;
        margin: 4px 6px;
        padding: 12px 32px;
        border-radius: 6px;
        .red
          color red





  
</style>
