<template lang="html">
    <Panel title="新品推荐" class="panel-product">
        <section class="content-product">
            <Slider :options="options" cname="product-slider" :items="items">
            </Slider>
        </section>
    </Panel>
    
</template>
<script>
import Panel from  '@/components/core/panel.vue'
import Slider from '@/components/core/slider.vue'
export default {
    components:{
        Panel,
        Slider,
    },
    data(){
        return {
            items: [{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
            }],
            options:{
                
                slidesPerView: 2.3,
                spaceBetween: 30,
                freeMode: true,

            }
        }
    }

}
</script>
<style lang="scss">
 @import "../../css/element.scss";
  .panel-product{
      @include panel;
      margin-bottom: 100px;
      .content-product
        .slider{
            margin-top: 120px;
            img{
                width:100%;
            }
        }
  }
</style>


