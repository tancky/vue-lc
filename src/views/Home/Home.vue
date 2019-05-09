<template>
    <div class="home">
        home
    </div>
</template>

<script>
    // @ is an alias to /src
    import {home} from 'api/index'

    export default {
        name: 'home',
        components: {

        },
        data() {
            return {

            }
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
                })
            }
        }
    }
</script>
<style scoped lang="scss">
    .nav-header {
        width: 100%;
        height: 78px;
        line-height: 78px;
        .van-nav-bar__title {
            font-size: 30px;
        }
        .van-nav-bar__left, .van-nav-bar__right {
            .van-nav-bar__text {
                font-size: 30px;
                color: #000;
            }
            i {
               font-size: 46px;
                color: #000;
            }
        }
    }
</style>
