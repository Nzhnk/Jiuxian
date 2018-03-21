<template>
    <div class="header-search">
        <div class="fixBg"></div>
        <div class="searchBox">
            <div class="searchTb">
                <div class="jxLogo">
                    <img src="../../assets/images/header/logo.jpg" alt="">
                </div>
                <div class="searchWrapper">
                    <i class="searchIcon"></i>
                    <input type="text" class="search-goods" v-model="searchKeyWord">
                </div>
                <input type="submit" value="搜索" class='searchBtn' @click="searchProduct">
            </div>
        </div>
    </div>
</template>



<script>

export default {
    data: () => {
        return {
            searchKeyWord: '',
        }
    },

    methods: {
        searchProduct() {
            this.$router.push({
                path: 'search',
                query: {
                    keyword: this.searchKeyWord
                }
            });
        }
    }
}
</script>



<style lang="scss">

@import '../../style/yo/usage/core/reset.scss';

.header-search {
    position: absolute;
    width: 100%;
    z-index: 10000;
}

.fixBg {
    // position: relative;
    background: -webkit-linear-gradient(top,rgba(0,0,0,0.7),rgba(0,0,0,0));
    width: 100%;
    height: 0.39rem;
    z-index: 99;
}

.searchBox {
    width: 100%;
    position: absolute;
    top: .06rem;
    padding: 0 .05rem;
}

.searchTb {
    @include flexbox();
    @include justify-content( space-around );
}

.jxLogo {
    img {
        width: 0.57rem;
        height: 0.27rem;
        @include border-radius(5px);
    }
}

.searchWrapper {
    i {
        display: block;
        height: 0.27rem;
        width: 0.27rem;
        background: url('../../assets/images/header/search.png') center center no-repeat;
        background-size: 0.13rem 0.13rem;
        position: absolute;
    }

    input {
        width: 2.5rem;
        height: 0.27rem;
        line-height: 0.27rem;
        padding-left: 0.3rem;
        font-size: 13px;
        color: rgb(102, 102, 102);
        text-align: left;
        font-family: "黑体";
        @include border-radius(5px);
        border: none;
        outline: none;
    }
}

.searchBtn {
    display: block;
    height: 0.27rem;
    width: 0.25rem;
    line-height: 0.27rem;
    background: none;
    border: none;
    color: #fff;
    font-family: '黑体';
    font-size: 12px;
    text-align: center;
}
</style>

