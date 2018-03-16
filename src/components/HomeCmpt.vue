<template>
	<div class="wrap">
        <top-header-cmpt></top-header-cmpt>
        <banner></banner>
		<product-list-cmpt></product-list-cmpt>
		<footer-cmpt></footer-cmpt>
	</div>
</template>

<script>
import FooterCmpt from './layout/FooterCmpt.vue';
import ProductListCmpt from './productList/ProductListCmpt.vue';
import TopHeaderCmpt from './layout/TopHeaderCmpt.vue';
import Banner from './layout/Banner.vue';

export default {
	components : {
		FooterCmpt,
        ProductListCmpt,
        TopHeaderCmpt,
        Banner
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