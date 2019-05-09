<template>
    <van-tabbar v-model="active"
                active-color="#000"
                style="z-index: 9999"
                safe-area-inset-bottom
                class="tab-bar">
        <van-tabbar-item
            class="tab-bar-item"
            v-for="(item,index) in tabbars"
            :key="index"
            :to="item.path"
        >
            <div v-if="index == 2" class="dots">{{dotsNumber}}</div>
            <span :class="currIndex == index ? active : ''">{{item.name}}</span>
            <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal">
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {Tabbar, TabbarItem} from 'vant'

    export default {
        name: "Tabbar",
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        },
        data() {
            return {
                currIndex: 0,
                active: 0,
                dotsNumber: 3,
                tabbars: [
                    {
                        name: '商店',
                        path: '/',
                        pathName: 'home',
                        normal: require('../../assets/tabbar_icon/shop.png'),
                        active: require('../../assets/tabbar_icon/select_shop.png')
                    },
                    {
                        name: '分类',
                        path: '/category',
                        pathName: 'category',
                        normal: require('../../assets/tabbar_icon/cate.png'),
                        active: require('../../assets/tabbar_icon/select_cate.png')
                    },
                    {
                        name: '购物车',
                        path: '/cart',
                        pathName: 'cart',
                        normal: require('../../assets/tabbar_icon/cart.png'),
                        active: require('../../assets/tabbar_icon/select_cart.png')
                    },
                    {
                        name: '我的',
                        path: '/mine',
                        pathName: 'mine',
                        normal: require('../../assets/tabbar_icon/order.png'),
                        active: require('../../assets/tabbar_icon/select_order.png')
                    }
                ]
            }
        },
        watch: {
            $route: 'changeTab'
        },
        created() {
            const toName = this.$route.name
            this.setActive(toName)
        },
        methods: {
            changeTab({ name }) {
                this.setActive(name)
            },
            setActive(name) {
                this.tabbars.forEach((tab, i) => {
                    if (tab.pathName == name) {
                        this.currIndex = i
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .tab-bar {
        width: 100%;
        height: 96px;
        img {
            width: 54px;
            height: 54px;
        }
        .tab-bar-item {
            position: relative;
            .dots {
                position: absolute;
                right: 52px;
                top: 6px;
                width: 27px;
                height: 27px;
                text-align: center;
                line-height: 27px;
                background-color: #6F98C3;
                color: #fff;
                border-radius: 50%;
                font-size: 12px;
            }
        }
    }
</style>
