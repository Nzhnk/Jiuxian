<template>
	<header>
		<div class="headerTop">
			<router-link to="/" class="goBack"></router-link>
			<h2 v-model="title">{{title}}</h2>
			<span @click="show" class="headerMenu"></span>
		</div>
		<ul class="headerNav" v-show="isShow">
			<router-link tag="li" to="/home"><i></i><span>首页</span></router-link>
			<router-link tag="li" to="/classify"><i></i><span>搜索</span></router-link>
			<router-link tag="li" to="/shoppingcart"><i></i><span>购物车</span></router-link>
			<router-link tag="li" to="/mine"><i></i><span>我的酒仙</span></router-link>
		</ul>
	</header>
</template>

<script>
export default {
	data : () => {
		return {
			to: '',
			title: '',
			isShow : false
		}
	},
	mounted(){
		if( this.$route.name == 'mine' ){
			this.title = "用 户 登 录";
		} else if( this.$route.name == 'classify' ){
			this.title = "选 酒";
		} else if (this.$route.name == 'activity') {
			this.title = '3.19开仓节主会场'
		}
	},
	methods : {
		show(){
			this.isShow = !this.isShow
		}
	}
}
</script>

<style lang="scss">
@import '../../style/yo/usage/core/reset.scss';

header{
	@include flexbox();
	@include flex-direction( column );
	.headerTop{
		width: 100%;
		@include flexbox();
		@include justify-content( space-between );
		height: .4rem;
		padding: 0 .1rem;
		background: #de4943;
	}
	.goBack{
		width: .3rem;
		height: .4rem;
		background-image:url("../../assets/images/fh.png");
		background-size: .3rem .4rem;
	}
	h2{
		@include flex();
		@include align-self( center );
		width: 1rem;
		text-align: center;
		font-size: .14rem;
		color: #fff;
		font-weight: 500;
		letter-spacing: .02rem;
	}
	.headerMenu{
		width: .3rem;
		height: .4rem;
		background: url("../../assets/images/menu.png");
		background-size: .3rem .4rem;
	}
}
.headerNav{
	@include flexbox();
	@include border( 0 0 1px 0, #ccc);
	background: #efefef;
	height: .45rem;
	li{
		width: 25%;
		height: .45rem;
		@include flexbox();
		@include flex-direction( column );
		@include align-items( center );
		i{
			width: .26rem;
			height: .2rem;
			margin-top: .05rem;
			background-image: url("../../assets/images/sy.png");
			background-size: .26rem .2rem;
		}
		span{
			height: .18rem;
			line-height: .18rem;
			font-size: .14rem;
		}
		&:nth-child(2) i{
			background-image: url("../../assets/images/ss.png");
		}
		&:nth-child(3) i{
			background-image: url("../../assets/images/gwc.png");
		}
		&:last-child i{
			background-image: url("../../assets/images/wdjx.png");
		}
	}
}
</style>