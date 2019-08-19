<template>
  <div>
    <div id="category_header">
        <div class="category_search">
            <i class="iconfont icon-icon_search"></i>
            <span class="category_goods">搜索商品，共21533款好物</span>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#category_header
  display flex
  width 100%
  height 88px
  border-bottom: 2px solid #EDEDED
  .category_search
    display flex
    background #EDEDED
    width 90%
    height 56px
    align-items: center;
    margin: 20px 40px;
    padding: 0px 130px;
    border-radius: 10px;
    .category_goods
      font-size 28px
      color #666666
    .iconfont
      font-size 28px
 
</style>
