<template>
	<!-- <div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">选项一</mt-tab-item>
			<mt-tab-item id="2">选项二</mt-tab-item>
			<mt-tab-item id="3">选项三</mt-tab-item>
		</mt-navbar>

		tab-container
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				1
				<mt-cell v-for="n in 10" :title="'内容 ' + n" />
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				2
				<mt-cell v-for="n in 4" :title="'测试 ' + n" />
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				3
				<mt-cell v-for="n in 6" :title="'选项 ' + n" />
			</mt-tab-container-item>
		</mt-tab-container>
	</div> -->
</template>

<script>
import Vue from 'vue';
import { Navbar, TabItem } from 'mint-ui';

export default {
	components: {
		[Navbar.name]: Navbar,
		[TabItem.name]: TabItem
	}
}
</script>

<style lang="scss">
@import '../../style/yo/usage/core/reset.scss';
.loginType{
	@include flexbox();
	li{
		width: 50%;
		height: .45rem;
		line-height: .45rem;
		text-align: center;
	}
}

</style>