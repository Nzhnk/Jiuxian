<template>
	<div class="productList">
		<div class="tabs">
			<a href="javascript:void(0);">爆款推荐</a>
		</div>
		<product-item-cmpt></product-item-cmpt>
	</div>
</template>

<script>
	import ProductItemCmpt from './product/ProductItemCmpt.vue';

	export default {
		components: {
			ProductItemCmpt
		}
	}
</script>

<style lang="scss">
	@import '../../style/yo/core/reset.scss';
	
	.productList {
		background: #fff;
		@include flexbox();
		@include flex();
		overflow-y: scroll;
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
</style>