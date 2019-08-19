<template>
  <div>
<div id="category_left">
        <ul class="category_list">
            <li class="category_item red">推荐专区</li>
            <li class="category_item">夏凉专区</li>
            <li class="category_item">爆品专区</li>
            <li class="category_item">新品专区</li>
            <li class="category_item">居家生活</li>
            <li class="category_item">服饰鞋包</li>
            <li class="category_item">美食酒水</li>
            <li class="category_item">个护清洁</li>
            <li class="category_item">母婴亲子</li>
            <li class="category_item">运动旅行</li>
            <li class="category_item">数码家电</li>
            <li class="category_item">全球特色</li>
        </ul>
        <ul class="category_right">
            <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
            <ul class="category_bottom">
                <li class="category_yuan">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>员工精选好货</span>
                </li>
                <li class="category_yuan">
                    <img src="https://yanxuan.nosdn.127.net/330a2b6c4ef20bad98e1a6e053d6b2d7.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>优选美食2件 85折</span>
                </li>
                <li class="category_yuan">
                    <img src="https://yanxuan.nosdn.127.net/7d67f71c7bc57c15def9501a7bf92ca5.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>夏日母婴好物 特价</span>
                </li>
                <li class="category_yuan">
                    <img src="https://yanxuan.nosdn.127.net/f7d09508d5fa90ef8dfd491d8f7ea225.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>夏日男士穿搭 特价</span>
                </li>
                <li class="category_yuan">
                    <img src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>中秋好礼上新</span>
                </li>
                <li class="category_yuan">
                    <img src="https://yanxuan.nosdn.127.net/fc11158857f2792c838e6cdf0942ec4e.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>夏日女士穿搭 特价</span>
                </li>
                <li class="category_yuan">
                    <img src="https://yanxuan.nosdn.127.net/0cb19987ddd873c693272c60352ba6a7.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>50元幸福好物</span>
                </li>
                <li class="category_yuan">
                    <img src="https://yanxuan.nosdn.127.net/da55023995b8d06b27815e2d13ac0433.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>暑期出游便携好物</span>
                </li>
                <li class="category_yuan">
                    <img src="https://yanxuan.nosdn.127.net/cda4a56526a230055bea8221a6b7ab11.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <span>999+好评</span>
                </li>
            </ul>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 #category_left
  display flex
  width 162px;
  .category_list
    .category_item
      padding: 38px 30px;
      width 162px
      font-size 28px
      color #333333
    .red
      color red
  .category_right
    img
      width 528px
      height 192px
      margin: 30px -20px
    .category_bottom
      display flex
      width 528px
      height 648px
      flex-wrap wrap
      .category_yuan
        display: flex;
        flex-direction: column;
        padding: 4px 28px;
        img
          width 144px
          height 144px
        span
          font-size 24px
          width 120px
          height 20px
          display -webkit-box
</style>
