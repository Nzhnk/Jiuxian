<template>
	<product-list-cmpt></product-list-cmpt>
</template>

<script>
import ProductListCmpt from './productList/ProductListCmpt.vue';

export default {
	components: {
		ProductListCmpt
	}
};
</script>

<style lang="scss">
@import '../style/yo/usage/core/reset.scss';

.container{
	background: #fff;
	@include flexbox();
	@include flex-direction( column );
	height: 100%;
	overflow-y: scroll;
}
</style>