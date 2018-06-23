<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :citiels="citiels" :hot="hotCitiels" :letter="letter"></city-list>
        <city-alphabet :citiels="citiels" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import Axios from 'axios';
export default {
    name: 'City',
    components: {
        CityHeader,CitySearch,CityList,CityAlphabet
    },
    data () {
        return {
            citiels: {},
            hotCitiels: [],
            letter: ""
        }
    },
    methods: {
        getCityInfo () {
            Axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            res= res.data
            if(res.ret && res.data){
                const data = res.data
                this.citiels = data.cities
                this.hotCitiels = data.hotCities
            }
            console.log(res)
        },
        handleLetterChange(letter){
            this.letter= letter
            console.log(letter)
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
<style lang="stylus" scoped>

</style>

