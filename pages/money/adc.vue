<template lang="html">
    <Panel title="广告3" class="panelc">
        <section class="content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
        </section>
    </Panel>
</template>

<script>
import Panel from "@/components/core/panel.vue"
export default {
    components: {
        Panel,
    },
}
</script>
<style lang="scss">
  @import "../../css/element.scss";
  .panelc{
    @include panel;
    margin-bottom: 0;
    >h4{
      display: none;
    }
    .content{
      height: 102px;
      img{
        width: 100%;
        height: 102px;
      }
    }
  }
</style>
