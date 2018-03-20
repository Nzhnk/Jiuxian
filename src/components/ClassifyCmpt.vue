<template>
	<div class="content">
		<header-cmpt></header-cmpt>
		<div class="searchWrap">
			<input type="text" name="keywords" placeholder="茅台" @focus="toggleDiv1()">
			<span>搜索</span>
		</div>
		<div class="searchHot" v-show="isShow"  @click="toggleDiv2()">
			<div class="searchInfo">
				<h2>热门搜索：</h2>
				<ul class="searchDetails">
					<li>茅台</li>
					<li>五粮液</li>
					<li>泸州老窖</li>
					<li>剑南春</li>
					<li>酒鬼酒</li>
					<li>威士忌</li>
					<li>拉菲</li>
				</ul>
			</div>
		</div>
		<div class="searchBoxInput"  v-show="!isShow">
			<ul>
				<li v-for="t in searchClass">
					<a href="javascript:;">
						<i></i>
						<span>{{t}}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import HeaderCmpt from './layout/HeaderCmpt.vue';

export default {
	data : () => {
		return {
			isShow : false,
			searchClass : ['白酒','葡萄酒','洋酒','整箱购','老酒','清仓特卖','海外直购','精美大坛','红酒整箱','值得买','销量排行','礼尚往来'],
			title: ''
		}
	},
	components : {
		HeaderCmpt
	},
	beforeCreate(){
		this.$store.commit( 'changeTitle', {
			title: '选酒'
		} );
	},
	methods : {
		toggleDiv1(){
			this.isShow = true;
		},
		toggleDiv2(){
			this.isShow = false;
		}
	}
}
</script>

<style lang="scss">
@import '../style/yo/usage/core/reset.scss';
.content{
	height: 100%;
	@include flexbox();
	@include flex-direction( column );
	.searchWrap{
		@include flexbox();
		@include align-items( center );
		padding: 0 .1875rem;
		height: .5rem;
		background-color: #e2e2e2;
		input{
			@include flex();
			height: .3rem;
			outline: none;
			border: none;
			text-indent: .1rem;
		}
		span{
			width: .7rem;
			height:.3rem;
			line-height: .3rem;
			text-align: center;
			outline: none;
			@include border( 1px , #de4943 );
			background-color: #de4943;
			color: #fff;
		}
	}
	.searchHot{
		@include flex();
		width: 100%;
		background-color: #616161;
		.searchInfo{
			height: 1.14rem;
			background-color: #fff;
			@include border( 1px 0 1px 0, #a9aeb2 );
			@include flexbox();
			h2{
				width: .85rem;
				height: .45rem;
				line-height: .45rem;
				text-align: center;
				color: #3e3e3e;
				font-weight: bold;
				float: left;
			}
			.searchDetails{
				width: 2.625rem;
				height: 1.12rem;
				@include flexbox();
				@include flex-wrap( wrap );
				@include align-content( flex-start );
				li{
					padding: 0 .1rem;
					height: .22rem;
					line-height: .22rem;
					@include border-radius( 4px );
					border: 1px solid #c6c6c6;
					margin: .12rem 0 0 .1rem;
				}
			}
		}
	}
	.searchBoxInput ul{
		@include flexbox();
		@include flex-wrap( wrap );
		@include align-content( flex-start );
		li{
			width: 33.33%;
			height: .81rem;
			@include border( 0 1px 1px 0, #f6f6f6 );
			a{
				width: 100%;
				height: 100%;
				@include flexbox();
				@include flex-direction( column );
				@include justify-content( center );
				@include align-items( center );
				i{
					width: .36rem;
					height: .36rem;
					background-image: url('../assets/images/bj.png');
					background-size: .36rem .36rem;
				}
				span{
					margin-top: .1rem;
					font-size: .14rem;
					line-height: .14rem;
					color: #000;
				}
			}
			&:nth-child( 3n ){
				@include border( 0 0 1px 0, #f6f6f6 );
			}
			&:nth-child(2) i{
				background-image: url('../assets/images/ptj.png');
			}
			&:nth-child(3) i{
				background-image: url('../assets/images/yj.png');
			}
			&:nth-child(4) i{
				background-image: url('../assets/images/zxg.png');
			}
			&:nth-child(5) i{
				background-image: url('../assets/images/lj.png');
			}
			&:nth-child(6) i{
				background-image: url('../assets/images/qcdm.png');
			}
			&:nth-child(7) i{
				background-image: url('../assets/images/hwzc.png');
			}
			&:nth-child(8) i{
				background-image: url('../assets/images/jmdt.png');
			}
			&:nth-child(9) i{
				background-image: url('../assets/images/hjzx.png');
			}
			&:nth-child(10) i{
				background-image: url('../assets/images/zdm.png');
			}
			&:nth-child(11) i{
				background-image: url('../assets/images/xlph.png');
			}
			&:last-child i{
				background-image: url('../assets/images/lswl.png');
			}
		}
	}
}
</style>