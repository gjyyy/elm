<template lang="html">
    <div>
        <Header/>
        <Islider/>
        <Welfare/>
        <Service/>
        <Footer/>
        <Navbar/>
    </div>
</template>
<script>
import Navbar from "@/components/public/navbar.vue"
import Header from "@/components/public/header.vue"
import Islider from "./islider.vue"
import Service from "./service.vue"
import Footer from "@/components/public/footer.vue"
import Welfare from "./welfare.vue"
export default {
    components:{
        Navbar,
        Header,
        Islider,
        Welfare,
        Service,
        Footer,
    }
}
</script>
<style lang="scss">

</style>



