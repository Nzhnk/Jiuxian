<template>
	<div class="productList">
		<div class="tabs">
			<a href="javascript:void(0);">爆款推荐</a>
		</div>
		<product-item-cmpt class="productBox"></product-item-cmpt>
		<about-us-cmpt></about-us-cmpt>
	</div>
</template>

<script>
	import ProductItemCmpt from './product/ProductItemCmpt.vue';
	import AboutUsCmpt from './AboutUsCmpt.vue';

	export default {
		components: {
			ProductItemCmpt,
			AboutUsCmpt
		}
	}
</script>

<style lang="scss">
	@import '../../style/yo/usage/core/reset.scss';

	.productList {
		background: #fff;
		@include flexbox();
		@include flex();
		// overflow-y: scroll;
		@include flex-direction(column);
		width: 100%;
	}

	.tabs {
		height: 0.33rem;
		border-bottom: 1px solid #f1f2f2;
		text-align: center;
		width: 100%;
	}

	.tabs a {
		@include flex();
		height: 0.33rem;
		line-height: 0.33rem;
		text-align: center;
		color: #666;
		font-size: 0.12rem;
	}
	.productBox{
		@include flex();
		width: 100%;
	}
</style>