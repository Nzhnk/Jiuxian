<template>
	<ul class="commonFooter" :isshow="true">
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
@import '../../style/yo/usage/core/reset.scss';

.commonFooter{
	height: .42rem;
	padding: 0 .165rem;
	background: #f1f1f1;
	@include border( 1px 0 0 0, #ccc );
	@include flexbox();
	@include align-items( center );
	text-align: center;
	li{
		width: 20%;
		height: .42rem;
		line-height: .42rem;
	}
	.active{
		color: #f00;
	}
}

</style>