<template lang="html">
    <Panel title="导航栏" class="panel1">
        <ul class="content">
            <li  @click="goto('/indexhome')">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66" alt="">
<p>首页</p></li>
            <li  @click="goto('/indexious')">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt="">
<p>白条</p></li>
            <li  @click="goto('/indexraise')">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66" alt="">
<p>众筹</p></li>
            <li  @click="goto('/indexmoney')">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="">
<p>理财</p></li>
            <li >
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="">
<p>我的<p/></li>
        </ul>

    </Panel>
</template>
<script>
import Panel from "@/components/core/panel.vue"
export default {
    components:{
        Panel,
    },

    methods:{
        goto(path){
            this.$router.push(path)
        }
    }    
}
</script>
<style lang="scss">
@import "@/css/element.scss";
  .panel1{
    @include panel;
    >h4{
        display: none;
    }
    position: fixed;
    z-index: 100;
    left:0;
    right: 0;
    bottom: 0;
    height: 100px;
    margin: 0;
    .content{
      @include flex(row);
      background-color: #fff;
      justify-content: space-around;
      li{
        text-align: center;
        a{
          text-decoration: none;
        }
        img{
          width: 44px;
          height: 44px;
          display: inline-block;
          margin: 12px auto 6px;
        }
        p{
          font-size: 22px;
          color: #656565;
        }
      }
    }
  }


</style>


