<template>
	<ul>
		<router-link tag="li" to="/home" active-class="active">首页</router-link>
		<router-link tag="li" to="/classify" active-class="active">分类</router-link>
		<router-link tag="li" to="/activity" active-class="active">活动页</router-link>
		<router-link tag="li" to="/shoppingcart" active-class="active">购物车</router-link>
		<router-link tag="li" to="/mine" active-class="active">我的酒仙</router-link>
	</ul>
</template>

<script>
</script>

<style lang="scss">
@import 'yo/core/reset.scss';

ul{
	height: 0.42rem;
	padding: 0 .165rem;
	background: #f1f1f1;
	@include border( 1px 0 0 0, #000 );
	@include flexbox();
	@include justify-content( space-between );
	@include align-items( center );
	text-align: center;
	li{
		height: 100%;
		line-height: .42rem;
	}
	.active{
		color: #f00;
	}
}

</style>