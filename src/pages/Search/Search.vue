<template>
  <div>
     <div id="search_header">
         <div class="search_house">
         <i class="iconfont icon-weibiaoti-"></i>
        </div>
     <div class="search_middle">
        <span class="search_find">发现</span>
        <span class="search_home">甄选家</span>
      </div>
      <div class="search_footer">
        <i class="iconfont icon-icon_search"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div id="search_middle">
        <div class="search_summer">
            <ul class="search_list">
                <li class="search_item red">盛夏特别版</li>
                <li class="search_item">推荐</li>
                <li class="search_item">好货内部价</li>
                <li class="search_item">回购榜</li>
                <li class="search_item">晒单</li>
            </ul>
        </div>
    </div>
    <div id="search_things">
        <img class="search_one" src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt="">
        <img class="search_two" src="https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344" alt="">
    </div>
    <div class="search_August">
      <div class="search_one">
        <img src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
      </div>
      <div class="search_two">
        <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?
        imageView&quality=75&thumbnail=750x0" alt=""/>
      </div>
      <div class="search_three">
        <img src="https://yanxuan.nosdn.127.net/15640407915873725.png" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

#search_header
  margin-top 20px
  display flex
  width 100%
  height 50px
  align-items center
  .search_house
    .iconfont
      font-size 50px
      color #666666
      padding-left 20px
  .search_middle
    margin-left 180px
    .search_find
      font-size 40px
      color #B4282D
      font-weight bold
    .search_home
      font-size 28px
      color #7F7F7F
      margin-left: 14px;


  .search_footer
    margin-left: 160px;
    .iconfont
      font-size 50px
      color #666666
    .icon-icon_search
      padding-right 16px
#search_middle
  .search_summer
    margin-top value
    width 100%
    height 72px
    .search_list
      display flex
      align-items center
      width 100%
      height 18px
      margin-top 20px
      .search_item
        border 2px solid white
        padding: 16px 24px;
        font-size 28px
        color #7F7F7F
      .red
        color #B4282D
        border-bottom 2px solid red
        margin-left: 14px;

#search_things
  width 100%
  height 484px
  img
    width 100%
    height 484px
    display block
  .search_one
    width 752px
    height 242px
  .search_two
    width 750px
    height 344px
.search_August
  width 100%
  height 85px
  .search_one
    img
      width 100%
      height 170px
  .search_two
    img 
      width 100%
      height 340px
  .search_three
    img 
      width 100%
      height 167px

 

</style>
