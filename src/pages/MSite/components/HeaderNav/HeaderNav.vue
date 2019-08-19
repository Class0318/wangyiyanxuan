<template>
  <div>
    <ul id="listContainer">
    <li class="item item_red">推荐</li>
    <li class="item">居家生活</li>
    <li class="item">服饰鞋包</li>
    <li class="item">美食酒水</li>
    <i class="iconfont icon-icon_arrow_right"></i>
  </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#listContainer
  width 100%
  height 60px
  display flex
  .item
    font-size 28px
    color #333333
    margin: 14px 26px
  .icon-icon_arrow_right
    position: absolute;
    top: 98px;
    right: 32px;
    font-size: 40px;
    color #333333
  .item_red
    color red
 
</style>
