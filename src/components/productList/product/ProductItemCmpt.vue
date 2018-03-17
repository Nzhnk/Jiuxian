<template>
	<div class="product-container">
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul class="productItem">
				<li v-for="(v, i) in promoList">
					<a href="javascript:void(0);">
						<div class="tagList" v-if="v.promo">
							<span :style="`background:${w.backColor}`" v-for="(w, j) in v.promo">{{w.name}}</span>
						</div>
						<div class="ulImg">
							<i class="loadImg"></i>
							<span class="pic">
								<img v-lazy="v.commonProductInfo.imgPath">
							</span>
						</div>
						<span class="pname">{{v.commonProductInfo.pname}}</span>
						<div class="price">
							<span class="actPrice">￥{{v.commonProductInfo.actPrice}}</span>
							<del v-if="v.commonProductInfo.jxPrice" class="jxPrice">￥{{v.commonProductInfo.jxPrice}}</del>
						</div>
					</a>
				</li>
			</ul>
		</mt-loadmore>
		<!-- <div class="noMore" v-show="moreShow" :class="{ noMoreHover: noMoreHover}">亲，看完了</div> -->
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import { Loadmore, Lazyload } from 'mint-ui';
	Vue.use(Lazyload);

	export default {
		data: () => {
			return {
				promoList: [], // 商品数组
				pageNum: 1, // 分页
				moreShow: false, // 全部加载完成信息显示
				allLoaded: false, // 是否加载
				noMoreHover: false, // 添加 nomore 样式
			}
		},
		methods: {
			loadBottom() {
				this.pageNum += 1;
				axios({
					method: 'GET',
					url: '/m_v1/statics/getzx.htm',
					baseURL: 'https://m.jiuxian.com/',
					params: {
						topicId: 1165,
						pageNum: this.pageNum
					}
				}).then((result) => {
					if (Boolean(result.data.promoList)) {
						this.promoList = this.promoList.concat(result.data.promoList); // 将新加载的内容与已有的内容合并
					} else {
						this.allLoaded = true;
						this.moreShow = true;
						this.noMoreHover = true;
						
					}
					this.$refs.loadmore.onBottomLoaded();
				})
			}
		},
		mounted() {
			axios({
				method: 'GET',
				url:'/m_v1/statics/getzx.htm',
				baseURL: 'https://m.jiuxian.com/',
				params: {
					topicId: 1165,
					pageNum: this.pageNum
				}
			}).then((result) => {
				this.promoList = result.data.promoList;
			})
		},
		components: {
			[Loadmore.name]: Loadmore
		}
	}
</script>

<style lang="scss">
	@import '../../../style/yo/usage/core/reset.scss';

	.product-container {
		width: 100%;
	}

	.productItem {
		@include flexbox();
		@include flex-wrap(wrap);
		@include justify-content(space-between);
		@include align-content(flex-start);
		width: 100%;
		background: #f2f5f6;
	}

	.productItem li {
		@include flexbox();
		width: 49.5%;
		background: #fff;
		padding: 20px 10px 5px;
		margin-bottom: 1%;
		position: relative;
	}

	.productItem li a {
		display: block;
		width: 100%;
		height: 100%;
	}

	.tagList {
		height: 0.16rem;
		position: absolute;
		left: 0.05rem;
		top: 0.05rem;
		display: block;
		z-index: 1;
	}

	.tagList span {
		float: left;
		height: 0.16rem;
		line-height: 0.16rem;
		text-align: center;
		border-radius: 0.03rem;
		padding: 0 0.03rem;
		font-size: 0.12rem;
		color: #fff;
		margin-right: 0.05rem;
	}

	.ulImg {
		height: 0;
		position: relative;
		padding-bottom: 100%;
	}

	.loadImg {
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background-size: 100%;
		background: url('../../../assets/loazy_img.png') no-repeat center;
	}

	.pic {
		display: block;
		height: 100%;
		width: 100%;
	}

	.pic img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	.pname {
		height: 0.32rem;
		line-height: 0.16rem;
		overflow: hidden;
		color: #252525;
		font-size: 0.12rem;
		display: block;
	}

	.price {
		width: 108%;
		white-space: nowrap;
	}

	.actPrice {
		font-size: 0.14rem;
		color: #fc5a5a;
	}

	.jxPrice {
		color: #999;
		display: inline-block;
		font-size: 0.12rem;
		margin-left: 0.05rem;
		text-decoration: line-through;
	}

	.noMore {
		// display: none;
		color: #969696;
		font-size: 0.12rem;
		height: 0.64rem;
		line-height: 0.64rem;
		text-align: center;
		width: 100%;
	}

	.noMoreHover {
		height: 0;
		@include transition(height 0.8s ease 0s);
	}
</style>