<template lang="html">
	<div class="container">
		<router-view></router-view>
	</div>
</template>

<script>
// import HomeCmpt from './components/HomeCmpt.vue';

// export default {
// 	components : {
// 		HomeCmpt
// 	}
// }
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
	overflow: auto;
}
</style>