<template>
	<div class="wrap">
		<product-list-cmpt></product-list-cmpt>
		<footer-cmpt></footer-cmpt>
	</div>
</template>

<script>
import FooterCmpt from './layout/FooterCmpt.vue';
import ProductListCmpt from './productList/ProductListCmpt.vue';

export default {
	components : {
		FooterCmpt,
		ProductListCmpt
	}
}
</script>

<style lang="scss">
@import '../style/yo/usage/core/reset.scss';

.wrap{
	@include flexbox();
	@include flex-direction( column );
	height: 100%;
}
</style>