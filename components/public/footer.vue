<template lang="html">
    <Panel title="底部" class="footer-panel">
        <ul class="footer-content">
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
            </li>
            <li>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                    <p>客户版</p>
                </div>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
                    <p>触屏版</p>
                </div>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
                    <p>电脑版</p>
                </div>
            </li>
        </ul>

    </Panel>
    
</template>
<script>
import Panel from "@/components/core/panel.vue"
export default {
    components:{
        Panel,
    }
    
}
</script>
<style lang="scss">
@import "../../css/element.scss";
.footer-panel{
    @include panel;
    margin-bottom: 90px;
    &>h4{
        display: none;
    }
    .footer-content{
        @include flex;
        background: #F5F5F5;
        li{
            width:100%;
            text-align: center;
            font-size: 24px;
            color:#999;
            >img{
                width: 100%;
                height: 143px;
            }
            &:nth-child(2){
                @include flex(row);
                height: 186px;
                box-sizing: border-box;
                >div{
                    width: 33.33%;
                    color:#999;
                    margin-top:12px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
    }

}

</style>


