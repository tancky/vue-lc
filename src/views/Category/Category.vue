<template>
    <div class="category">category</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'category',
    props: {
        msg: String
    },
    created() {},
    computed: {
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.about {
    @include ell();
}
h1 {
    font-size: 36px;
}
.msg {
    font-size: 32px;}
</style>
