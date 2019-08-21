<template>
  <div>
  <div id="hotsale">
    <div class="hotsale_title">类目热销榜</div>
    <div class="hotsale_middle">
      <div class="hotsale_left1">
        <span class="hotsale_left2">热销榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/4f43f69ece3312fcd0b032c949c7c71b.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="hotsale_right1">
        <span class="hotsale_right2">好评榜</span>
        <img src="https://yanxuan.nosdn.127.net/6fd807743e8e25472aca8b6b0b8f3039.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
    </div>
    <div class="hotsale_foot">
      <ul class="hotsale_list">
        <li class="hotsale_item">
          <img src="https://yanxuan-item.nosdn.127.net/953c5a0ab6660507ee3bf3ce3e46936c.png?imageView&quality=65&thumbnail=200x200" alt="">
          <span>居家生活榜</span>
        </li>
        <li class="hotsale_item">
          <img src="https://yanxuan-item.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
          <span>美食酒水榜</span>
        </li>
        <li class="hotsale_item">
          <img src="https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=200x200" alt="">
          <span>服饰鞋包榜</span>
        </li>
        <li class="hotsale_item">
          <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=200x200" alt="">
          <span>个护清洁榜</span>
        </li>
        <li class="hotsale_item">
          <img src="https://yanxuan-item.nosdn.127.net/f35ff0c627d0517ad57897180208288e.png?imageView&quality=65&thumbnail=200x200" alt="">
          <span>数码家电榜</span>
        </li>
        <li class="hotsale_item">
          <img src="https://yanxuan-item.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="">
          <span>运动旅行榜</span>
        </li>
        <li class="hotsale_item">
          <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200" alt="">
          <span>母婴亲子榜</span>
        </li>
        <li class="hotsale_item">
          <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200" alt="">
          <span>全球特色榜</span>
        </li>
      </ul>
    </div>
    <div id="bian"></div>
  </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

#hotsale
  width 100%
  .hotsale_title
    font-size 32px
    color #333333
    margin: 40px 40px
  .hotsale_middle
    margin-left 26px
    display flex
    .hotsale_left1
      background #F9F3E4
      display flex
      width 340px
      height 200px
      .hotsale_left2
        font-size 28px
        color #333333
        margin 70px 10px
      img
        width 200px
        height 200px
    .hotsale_right1
      background #EBEFF6
      display flex
      width 340px
      height 200px
      margin-left: 12px;
      .hotsale_right2
        font-size 12px
        color #333333
        margin 70px 10px
      img
        width 200px
        height 200px
  .hotsale_foot
    .hotsale_list
      display flex
      flex-wrap wrap
      .hotsale_item
        margin: 10px 10px;
        display flex
        flex-direction column
        width 164px
        height 180px
        background #F5F5F5
        align-items: center;
        img
          width 120px
          height 120px
        span
          font-size 24px
 
</style>
