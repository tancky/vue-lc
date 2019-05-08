<template>
    <div class="home">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>

        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {home, brandList, collect} from 'api/index'

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        created() {

        },
        mounted() {
            this.getHomeInfo()
        },
        methods: {
            // 获取首页接口信息
            getHomeInfo() {
                var that = this;
                // 调用封装好的接口请求函数并传参
                // 添加收藏
                home().then(res => {
                    console.log(res)
                })
            },
        }
    }
</script>
