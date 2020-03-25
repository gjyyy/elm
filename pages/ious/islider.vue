<template lang="html">
    <Panel class="panel-islider">
        <section class="islider-content">
            <Slider :items="items" cname="islider">
            </Slider>
        </section>
    </Panel>
</template>
<script>
import Panel from "@/components/core/panel.vue"
import Slider from "@/components/core/slider.vue"
export default {
    components:{
        Panel,
        Slider,
    },
    data() {
        return {           
            items: [{
                href: "ious",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320"
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320"
            }],
        }
    }
    
}
</script>
<style lang="scss">
@import "../../css/element.scss";
.panel-islider{
    @include panel;
   
    margin-top:120px;
    .islider-content{
        >img{
            width: 100%;
        }

    }
   
}

</style>
