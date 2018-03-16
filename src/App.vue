<template lang="html">
	<div class="container">
		<router-view></router-view>
		<!-- <product-list-cmpt></product-list-cmpt> -->
	</div>
</template>

<script>
import FooterCmpt from './components/layout/FooterCmpt.vue';
/*import ProductListCmpt from './components/productList/ProductListCmpt.vue';

export default {
	components : {
		FooterCmpt,
		ProductListCmpt
	}
}*/
</script>

<style lang="scss">
@import "./style/yo/usage/core/reset.scss";
body{
	font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Tohoma, Arial;
	height: 100%;
}
.container{
	background: #fff;
	@include flexbox();
	@include flex-direction( column );
	height: 100%;
}
</style>