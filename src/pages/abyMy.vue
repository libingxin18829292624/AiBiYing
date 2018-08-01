<template>
<div class="bodydiv">
    <my-header></my-header>
    <my-banner></my-banner>
    <my-leg></my-leg>
    <abyfooter></abyfooter>
</div>

</template>

<script>
import myHeader from "../components/my/myHeader"
import myBanner from "../components/my/myBanner"
import myLeg from "../components/my/myLeg"
import abyfooter from "../components/common/abyfooter"
export default {
    name:"abyMy",
    components:{
        myHeader,
        myBanner,
        myLeg,
        abyfooter
    }
}
</script>

<style scoped>
.bodydiv{
    padding-bottom: 0.6rem;
}
</style>
