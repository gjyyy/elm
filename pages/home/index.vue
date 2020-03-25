<template lang="html">
    <div>
        <Header/>
        <Hslider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Navbar/>

    </div>
</template>
<script>
import  Header from "../../components/public/header.vue"
import  Hslider from "./hslider.vue"
import  Novice from "./novice.vue"
import  Borrow from "./borrow.vue"
import  Money from "./money.vue"
import Product from "./product.vue"
import Navbar from "@/components/public/navbar.vue"

export default {
    components:{
        Header,
        Hslider,
        Novice,
        Borrow,
        Money,
        Product,
        Navbar

    },
}
</script>

