<template lang="html">
	<div class="container">
		<div class="content">
			<router-view></router-view>
			<product-list-cmpt></product-list-cmpt>
		</div>
		<!-- <footer-cmpt></footer-cmpt> -->
	</div>
</template>

<script>
import FooterCmpt from './components/layout/FooterCmpt.vue';
import ProductListCmpt from './components/productList/ProductListCmpt.vue';

export default {
	components : {
		FooterCmpt,
		ProductListCmpt
	}
}
</script>

<style lang="scss">
@import "./style/yo/core/reset.scss";
.container{
	background: #fff;
	@include flexbox();
	@include flex-direction( column );
	height: 100%;
	header{
		height: 0.39rem;
		line-height: 0.39rem;
		background: #f00;
		text-align: center;
	}
	.content{
		@include flex();
		@include flexbox();
		@include flex-direction(column);
		width: 100%;
	}
}
</style>