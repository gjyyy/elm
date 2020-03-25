<template>
    <Panel class="panel-mslider"> 
        <section class="content-mslider">
            <Slider :items="items" cname="mslider">
            </Slider>
        </section>
    </Panel>
    
</template>
<script>
import Slider from '@/components/core/slider.vue'
import Panel from '@/components/core/panel.vue'
export default {
    components:{
        Panel,
        Slider,
    },
    data() {
        return {
            items: [{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400",
            }],
        }
    },
}
</script>
<style lang="scss">
  @import "../../css/element.scss";
  .panel-mslider{
    @include panel;
    >h4{
      display: none;
    }
    .content-mslider{
      .mslider{
        margin-top: 120px;
        img{
          width: 100%;
        }
      }
    }
  }
</style>


