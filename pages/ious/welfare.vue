<template lang="html">
    <Panel title="白条福利" class="welfare-panel">
        <section class="welfare-content">
            <div class="welfare-item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>历史年化利率</p>
                </div>
                <em>去赚钱 > </em>
            </div>
            <div class="welfare-item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120" alt="">
                <div>
                    <h4>季度理财</h4>
                    <p>历史年化利率</p>
                </div>
                <em>去赚钱 ></em>
            </div>
            <div class="welfare-item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
                <div>
                    <h4>一年理财</h4>
                    <p>历史年化利率</p>
                </div>
                <em>去赚钱 ></em>
            </div>

        </section>
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
.welfare-panel{
    @include panel;
    &>h4{
        border-bottom: 1px solid #ddd;
    }
    .welfare-content{
        @include flex;
        .welfare-item{
            @include flex(row);
            align-items:center;
            height: 140px;
            &:after{
                content: " ";
                box-sizing: border-box;
                height: 0;
                width: 100%;
                border-bottom: 1px solid #ddd;
                margin-left: 150px;
            }

            >img{
                width: 88px;
                height: 88px;
                display: inline-block;
                margin: 0 32px;
            }
            >div{
                font-size: 32px;
                color: #333;
                line-height: 1.8;
                width: 304px;
                p{
                    color: #999;
                    font-size: 24px;
                    line-height: 1.1;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
            >em{
                color: #FF801A;
                font-size: 28px;
            }
        }
    }
}
</style>
