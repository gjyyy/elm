<template lang="html">
    <div>
        <Header/>
        <Mslider/>
        <Ada/>
        <Adb/>
        <Finance/>
        <Adc/>
        <Navbar/>
        <Footer/>

    </div>
</template>
<script>
import  Header from "../../components/public/header.vue"
import  Mslider from "@/pages/money/mslider.vue"
import  Ada from "@/pages/money/ada.vue"
import  Adb from "@/pages/money/adb.vue"
import  Adc from "@/pages/money/adc.vue"
import Finance from "@/pages/money/finance.vue"
import Footer from "@/components/public/footer.vue"

import Navbar from "@/components/public/navbar.vue"

export default {
    components:{
        Header,
        Mslider,
        Ada,
        Adb,
        Adc,
        Finance,
        Navbar,
        Footer

    },
}
</script>

