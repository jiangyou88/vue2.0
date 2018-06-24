<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name: 'Detail',
    data() {
        return {
            list: [{
                title: '成人票'
            },{
                title: '学生票'
            },{
                title: '儿童票'
            },{
                title: '特惠票'
            }]
        }
    },
    components: {
        DetailBanner,DetailHeader,DetailList
    }
}
</script>
<style lang="stylus" scoped>
</style>


