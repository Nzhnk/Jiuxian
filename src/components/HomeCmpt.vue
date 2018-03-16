<template>
	<div class="wrap">
		<top-header-cmpt class="topHeader"></top-header-cmpt>
		<div class="headerBox">
			<banner></banner>
			<product-list-cmpt></product-list-cmpt>
		</div>
		<footer-cmpt id="footerBox"></footer-cmpt>
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
	overflow: scroll;
	height: 100%;
	.topHeader{
		height: .39rem;
	}
	.headerBox{
		@include flex();
		width: 100%;
		overflow-y: scroll;
	}
	#footerBox{
		height: .42rem;
	}
}
</style>