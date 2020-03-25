<template>
    <div>
        <Header/>
        <Rslider/>
        <Daliy/>
        <In/>
        <More/>
        <Navbar/>
        <Footer/>
    </div>
</template>
<script>
import  Header from "../../components/public/header.vue"
import Daliy from "./daliy.vue"
import Rslider from "./rslider.vue"
import In from "./in.vue"
import More from "./more.vue"
import Navbar from "@/components/public/navbar.vue"
import Footer from "@/components/public/footer.vue"
export default {
    components:{
        Header,
        Rslider,
        Daliy,
        In,
        More,
        Navbar,
        Footer
    },
}
</script>
<style>

</style>

