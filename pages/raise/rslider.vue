<template lang="html">
    <Panel title="轮播图" class="rslider-panel">
        <section class="rslider-content">
            <swiper :options="options">
                <swiper-slide>1111111</swiper-slide>
                <swiper-slide>2222222</swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import Panel from "@/components/core/panel.vue"

export default {
    components:{
        swiper,
        swiperSlide,
        Panel
    },
    data(){
        return {
            options:{
                autoplay:true,
                loop:true,
                direction:"vertical"
            }
        }
    }
}
   
</script>

<style lang="scss">
@import "../../css/element.scss";
.swiper-container-vertical{
    height: 72px;
    .swiper-slide{
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #333;
    }
  }
  .rslider-panel{
    @include panel;
    >h4{
      display: none;
    }
    margin-top: 120px!important;
    .rslider-content{
      line-height: 72px;
      overflow: hidden;
      padding-left: 178px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
    }
  }
</style>


