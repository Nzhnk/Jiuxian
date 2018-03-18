<template>
	<div class="wrap">
		<top-header-cmpt class="topHeader"></top-header-cmpt>
		<div class="headerBox">
			<banner></banner>
			<!-- 公共 banner 图 -->
			<public-banner-cmpt
			:imgsrc='"../../../static/pubBanner/32433705470a4825b6cfccf58cb629b0.jpg"'>
			</public-banner-cmpt>
			<public-banner-cmpt
			:imgsrc='"../../../static/pubBanner/459d789fa3f04b71a9e40f45237de059.jpg"'>
			</public-banner-cmpt>
			<public-banner-cmpt
			:imgsrc='"../../../static/pubBanner/85d99bada5b54b1182cd75b78eb63840.jpg"'>
			</public-banner-cmpt>
			<public-banner-cmpt
			:imgsrc='"../../../static/pubBanner/640c72c1103c42ac90b78a912f2e727c.jpg"'>
			</public-banner-cmpt>
			<public-banner-cmpt
			:imgsrc='"../../../static/pubBanner/f1770d68d8ec4a838a06ec92554ad703.jpg"'>
			</public-banner-cmpt>
			<public-banner-cmpt
			:imgsrc='"../../../static/pubBanner/dc75f33e8e2f423894af04c52fd88e9b.jpg"'>
			</public-banner-cmpt>
			<public-banner-cmpt
			:imgsrc='"../../../static/pubBanner/46a17b950cb349e1b869788cb504144a.jpg"'>
			</public-banner-cmpt>
			<public-banner-cmpt
			:imgsrc='"../../../static/pubBanner/92ea68eec6c8467192cc42cf8dc52ff0.jpg"'>
			</public-banner-cmpt>

			<!-- swiper 后面的 banner 图 -->
			<public-banner-cmpt
			:imgsrc='"../../../static/pubBanner2/6b04a8efff30474aa0e8bbe23aa6a757.jpg"'>
			</public-banner-cmpt>

			<!-- 精选频道 -->
			<public-title-cmpt
			:data='"../../../static/publicTitle/18c109eff15d43cbba20498a6e24d8e0.jpg"'>
			</public-title-cmpt>
			<tow-box-cmpt
			:imgsrc1='"../../../static/box2/6b8aed2cd5084c7390c08f5918744dfc.jpg"'
			:imgsrc2='"../../../static/box2/7c263951ea5a4a83b077309ff9eb6529.jpg"'
			:imgsrc3='"../../../static/box2/eb7f77dfc3ff4964a0669b03f07e6509.jpg"'
			:imgsrc4='"../../../static/box2/3d0e1dcef449443699ad559bcfc6f510.jpg"'
			:imgsrc5='"../../../static/box2/4e1d9b797bc349f7a447b40da72c494a.jpg"'>
			</tow-box-cmpt>
			<!-- 中国白酒馆 -->
			<public-title-cmpt
			:data='"../../../static/publicTitle/2ccef5fad18a4e43a833fe29a5924f05.jpg"'>
			</public-title-cmpt>
			<four-box-cmpt
			:imgsrc1='"../../../static/box3/a35316b9c77a47d0991b4d99098065f8.jpg"'
			:imgsrc2='"../../../static/box3/0cb2e89ba2274003b77b1806985dd6a5.jpg"'
			:imgsrc3='"../../../static/box3/858903d967dc4e42bdb03bc9396f9d8f.jpg"'
			:imgsrc4='"../../../static/box3/0a75676d009f49efa7bdf16d48457dfd.jpg"'>
			</four-box-cmpt>
			<!-- 世界葡萄酒馆 -->
			<public-title-cmpt
			:data='"../../../static/publicTitle/25f63a308e5e4292b506bfdf9cda1f02.jpg"'>
			</public-title-cmpt>
			<four-box-cmpt
			:imgsrc1='"../../../static/box4/89e0674d4e624c249800fc0d0ac7ec40.jpg"'
			:imgsrc2='"../../../static/box4/efdf8f2e7017406fb11c35977122e165.jpg"'
			:imgsrc3='"../../../static/box4/e3093e94a7fa4eea80ecc5e4e9f404d9.jpg"'
			:imgsrc4='"../../../static/box4/792372cf6fb34a0598971baa73d64807.jpg"'>
			</four-box-cmpt>
			<!-- 小资洋酒馆 -->
			<public-title-cmpt
			:data='"../../../static/publicTitle/f795eddebe44484fa809b429a74b0612.jpg"'>
			</public-title-cmpt>
			<four-box-cmpt
			:imgsrc1='"../../../static/box5/41bafaa2472148d59a91bbb809771bd4.jpg"'
			:imgsrc2='"../../../static/box5/ffb8f51a38cb4834a2652a121b93fe24.jpg"'
			:imgsrc3='"../../../static/box5/08a16421646b4ceabfbaa50cadf5dff0.jpg"'
			:imgsrc4='"../../../static/box5/ffcac15696f5448984a8d01415a1d037.jpg"'>
			</four-box-cmpt>
			<!-- 黄保啤综合馆 -->
			<public-title-cmpt
			:data='"../../../static/publicTitle/32ddf14f0e4b4b689fa5c17dd3da5b07.jpg"'>
			</public-title-cmpt>
			<four-box-cmpt
			:imgsrc1='"../../../static/box6/64cca66ad7c44422aaf5145d3f44e40a.jpg"'
			:imgsrc2='"../../../static/box6/f15ec4eda2604a82b81c67d96ccc160a.jpg"'
			:imgsrc3='"../../../static/box6/64040f9586994448abb2a97a17b5acdb.jpg"'
			:imgsrc4='"../../../static/box6/93d25a3e3d35496291a6b4f60d1ef22a.jpg"'>
			</four-box-cmpt>
			<!-- 主题街 -->
			<public-title-cmpt
			:data='"../../../static/publicTitle/1746c9c0000e42d2be988597189eb184.jpg"'>
			</public-title-cmpt>
			<eight-box-cmpt
			:imgsrc1='"../../../static/box7/fadf1242a5db4fe5869207274414ae10.jpg"'
			:imgsrc2='"../../../static/box7/443723aab82f4a1ba1a94f914b889f6b.jpg"'
			:imgsrc3='"../../../static/box7/dde98345d3d94333836345e0b7d1e8b3.jpg"'
			:imgsrc4='"../../../static/box7/33b278974a4e40d998cc0ce585b69c0d.jpg"'
			:imgsrc5='"../../../static/box7/2e16e75d20994b379716d7fa2b2f04eb.jpg"'
			:imgsrc6='"../../../static/box7/2e0166456bc341b692c9d3c3a1089fc5.jpg"'
			:imgsrc7='"../../../static/box7/135f7adc0c9048c5924cd7147f11db1b.jpg"'
			:imgsrc8='"../../../static/box7/2fca31dc6b254d9eb96a042cf8dbf1ea.jpg"'
			>
			</eight-box-cmpt>
			<div class="h10"></div>
			<!-- 爆款推荐 -->
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
import PublicTitleCmpt from './layout/PublicTitleCmpt.vue';
import TowBoxCmpt from './layout/TowBoxCmpt.vue';
import FourBoxCmpt from './layout/FourBoxCmpt.vue';
import EightBoxCmpt from './layout/EightBoxCmpt.vue';
import PublicBannerCmpt from './layout/PublicBannerCmpt.vue';

export default {
	components : {
		FooterCmpt,
        ProductListCmpt,
        TopHeaderCmpt,
        Banner,
        PublicTitleCmpt,
        TowBoxCmpt,
        FourBoxCmpt,
        EightBoxCmpt,
        PublicBannerCmpt
	}
};
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

.h10 {
	width: 100%;
	height: 10px;
	background: #f3f5f6;
}
</style>