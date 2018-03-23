<template>
    <div class="search-list-wrapper">
        <header>
            <router-link to="/" class="goback"></router-link>
            <h2>商品列表</h2>
            <a href="javascript:void(0);" class="search-filter">筛选</a>
        </header>
        <div class="searchShop">
            <img alt="酒仙自营茅台旗舰店" src=" http://img10.jiuxian.com/brandlogo/2017/0524/84d14c3c526f49a7ab3e7adba5ecdb00.jpg">
            <span class="shopName">酒仙自营茅台旗舰店</span>
            <span class="shopEnter">
                <em>进店</em> 
                <i class="yo-ico">&#xf07f;</i>
            </span>
        </div>
        <ul class="tabBar">
            <li class="active"><span>综合</span></li>
            <li><span>销量</span></li>
            <li><span>价格</span><span class="price-sort"></span></li>
            <li><span></span></li>
        </ul>
        <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

        </mt-loadmore> -->
        <div class="search-product-list-wrapper">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul class="searchProductList" ref="searchProductList">

                </ul>
            </mt-loadmore>
        </div>
    </div>
</template>

<script>
import Vue from 'Vue';
import axios from 'axios';
import cheerio from 'cheerio';
import { Loadmore, Lazyload } from "mint-ui";
Vue.use(Lazyload);

export default {
    data: () => {
        return {
            searchListData: '',
            searchKeyWord: '',
            pageNum: 1,
            moreShow: false,
            allLoaded: false,
            noMoreHover: false,
        }
    },
    methods: {
        loadBottom() {
            console.log('loadBottom');
            this.pageNum++;
            axios({
                method: 'GET',
                url: '/api2/m_v1/search/filterPage/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/' + this.pageNum + '/mark?v=1.0&keyword=' + encodeURIComponent(this.$route.query.keyword) + '&showtype=list',
            }).then((result) => {
                var $ = cheerio.load(result.data);
                $('li a.prodLink').attr('href', '###');
                $('li p.name>a').attr('href', '###');

                const productIdFunc = $('script').get()[0].children[0].data;
                const productIdList = productIdFunc.substring(productIdFunc.indexOf('("') + 2, productIdFunc.indexOf(")") - 2);

                axios({
                    method: 'GET',
                    url: '/api2/m_v1/act/selectPriceAndClubPriceByProIds.htm?1521722547699&ids=' + productIdList,
                }).then((listPriceData) => {
                    axios({
                        method: 'GET',
                        url: '/api2/m_v1/act/selectProductPromosByProIds.htm?1521722547702&ids=' + productIdList
                    }).then((listPromosData) => {
        
                        const priceList = listPriceData.data.data;
                        const promosObj = listPromosData.data.data;

                        for (let i = 0; i < priceList.length; i++) {
                            const productId = priceList[i].productId;
                            const price = priceList[i].price;
                            const clubPrice = priceList[i].clubPrice;
                            $('strong[goodid=' + productId + ']').html('￥' + price);

                            if (clubPrice) {
                                $('#clubPrice_' + productId).html(`<font>￥${clubPrice}</font><i></i>`);
                            }
                        }
                        

                        for (const promosId in promosObj) {
                            const promosList = promosObj[promosId];
                            for (let i = 0; i < promosList.length; i++) {
                                const backgroundColor = promosList[i].actColor;
                                const actName = promosList[i].actName;
                                let promosInfo = `<em class="prom" style="background-color:${backgroundColor}">${actName}</em>`;
                                $('#promo_' + promosId).append(promosInfo);
                            }
                        }

                        $('.tips').remove();

                        this.searchListData += $.html();
                        this.$refs.searchProductList.innerHTML = this.searchListData;
                    });
                });

                this.$refs.loadmore.onBottomLoaded();
            });
        }
    },
    mounted() {
        axios({
            method: 'GET',
            url: '/api2/m_v1/search/filterPage/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/' + this.pageNum + '/mark?v=1.0&keyword=' + encodeURIComponent(this.$route.query.keyword) + '&showtype=list',
        }).then((result) => {
            var $ = cheerio.load(result.data);
            $('li a.prodLink').attr('href', '###');
            $('li p.name>a').attr('href', '###');
            

            const productIdFunc = $('script').get()[0].children[0].data;
            const productIdList = productIdFunc.substring(productIdFunc.indexOf('("') + 2, productIdFunc.indexOf(")") - 2);

            axios({
                method: 'GET',
                url: '/api2/m_v1/act/selectPriceAndClubPriceByProIds.htm?1521722547699&ids=' + productIdList,
            }).then((listPriceData) => {
                axios({
                    method: 'GET',
                    url: '/api2/m_v1/act/selectProductPromosByProIds.htm?1521722547702&ids=' + productIdList
                }).then((listPromosData) => {
       
                    const priceList = listPriceData.data.data;
                    const promosObj = listPromosData.data.data;

                    for (let i = 0; i < priceList.length; i++) {
                        const productId = priceList[i].productId;
                        const price = priceList[i].price;
                        const clubPrice = priceList[i].clubPrice;
                        $('strong[goodid=' + productId + ']').html('￥' + price);

                        if (clubPrice) {
                            $('#clubPrice_' + productId).html(`<font>￥${clubPrice}</font><i></i>`);
                        }
                    }
                    

                    for (const promosId in promosObj) {
                        const promosList = promosObj[promosId];
                        for (let i = 0; i < promosList.length; i++) {
                            const backgroundColor = promosList[i].actColor;
                            const actName = promosList[i].actName;
                            let promosInfo = `<em class="prom" style="background-color:${backgroundColor}">${actName}</em>`;
                            $('#promo_' + promosId).append(promosInfo);
                        }
                    }

                    $('.tips').remove();

                    this.searchListData = $.html();
                    this.$refs.searchProductList.innerHTML = this.searchListData;
                    this.$refs.searchProductList.firstChild.top = 0;
                });
            });

            

        });
    },
    components: {
        [Loadmore.name]: Loadmore
    }
}
</script>

<style lang="scss">
@import "../../style/yo/usage/core/reset.scss";

.search-list-wrapper {
    height: 100%;
    font-family: "华文细黑","Microsoft YaHei","黑体",sans-serif;
    @include flexbox();
    @include flex-direction( column );
    background: #fff;
}

header {
    height: .4rem;
    width: 100%;
    background: #de4943;
    @include flexbox();
    @include justify-content(space-between);
    .goback {
        height: .4rem;
        width: .3rem;
        background: url('../../../static/searchList/headBack.jpg') no-repeat;
        background-position: .1rem;
    }
    h2 {
        // padding-left: .3rem;
        font-size: 16px;
        line-height: .4rem;
        text-align: center;
        color: #fff;
        font-weight: normal;
    }
    .search-filter {
        display: block;
        width: .8rem;
        height: 100%;
        line-height: .4rem;
        text-align: center;
        color: #fff;
        font-size: 14px;
    }
}

.searchShop {
    padding: .16rem .1rem;
    margin-bottom: 4px;
    @include flexbox();
    @include justify-content(space-between);
    @include align-items(center);
    @include border(1px 0 10px 0, #F3F5F6);
    img {
        width: 27%;
        vertical-align: middle;
        height: auto;
        
    }
    .shopName {
        display: block;
        width: 70%;
        text-align: left;
        font-size: 15px;
        font-weight: bold;
        color: #252525;
        padding-left: .05px;
    }
    .shopEnter {
        @include flexbox();
        em {
            display: block;
            width: .3rem;
            font-size: 12px;
            color: #252525;
        }
        i {
            color: #B5B5B5;
        }
    }
}

.tabBar {
    height: .4rem;
    text-align: center;
    @include flexbox();
    @include align-items( center );
    @include border(0 0 2px 0, #E8E8E8);
    li {
        width: 26%;
        color: #252525;
    }
    li.active {
        color: #fc5a5a;
    }
    li:nth-of-type(3) {
        @include border(0 1px 0 0, #A7A7A7);
        span:nth-of-type(1) {
            padding-right: .1rem;;
        }
    }
    .price-sort {
        display: inline-block;
        height: 100%;
        width: 5px;
        height: 8px;
        background: url('../../../static/searchList/listIcon.png') no-repeat;
        background-position: -23px 0px;
        background-size: 100px 70px;
    }
    li:last-of-type {
        width: 22%;
        span {
            background: red;
            display: inline-block;
            width: 24px;
            height: 24px;
            text-align: center;
            background: url('../../../static/searchList/listIcon.png') no-repeat center; 
            background-position: 0 -45px;
            background-size: 100px 70px;
        }
    }
}

.search-product-list-wrapper {
    @include flex();
    width: 100%;
    overflow: scroll;
}

.searchProductList {
    li {
        @include flexbox();
        padding: 10px 10px 10px 0;

        img {
            width: 1.1rem;
            height: 1.1rem;
            margin-right: .05rem;
        }

        .name {
            line-height: 18px;

            a {
                color: #000;
            }
        }

        .prodInfo .prom {
            font-size: 10px;
            display: inline-block;
            padding: 0 2px;
            color: #fff;
            height: 14px;
            line-height: 14px;
            border-radius: 2px;
            margin-left: 5px;
            overflow: hidden;
        }

        .price {
            margin-top: 8px;
            strong {
                font-size: 15px;
                color: #fc5a5a;
            }
        }

        .listIcon, .shopMoldIcon {
            background: url(../../../static/productList/listIcon.png) no-repeat;
            background-size: 100px 70px;
        }

        .prodInfo .pro .listIcon {
            display: inline-block;
            width: 38px;
            height: 13px;
            background-position: -62px -15px;
            overflow: hidden;
            margin-right: .1rem;
        }

        .prodInfo .pro span {
            color: #aaa;
            font-size: 12px;
            white-space: nowrap;
        }
    }
}
</style>
