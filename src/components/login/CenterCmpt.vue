<template>
	<div class="user_center">
		<div class="user_header">
			<div class="user_datials">
				<div class="user_photo">
					<div class="mask"></div>
					<img src="../../../static/user/userPhoto.png">
				</div>
				<div class="user_info">
					<p class="user_name">
						<b>username</b>
						<a href="javascipt:;">
							立享CLUB会员<i></i>
						</a>
					</p>
					<p class="user_ad">下载客户端 美酒随时抢</p>
				</div>
			</div>
			<div class="user_order">
				<p class="user_level">LV1 酒虫</p>
				<div class="order_info">
					<a href="javascipt:;">
						<b>0</b>
						<span>待付款</span>
					</a>
					<a href="javascipt:;">
						<b>0</b>
						<span>待发货</span>
					</a>
					<a href="javascipt:;">
						<b>0</b>
						<span>待收货</span>
					</a>
					<a href="javascipt:;">
						<b>0</b>
						<span>已完成</span>
					</a>
				</div>
			</div>
		</div>
		<div class="user_choose">
			<ul>
				<li v-for="i in type">
					<a href="javascipt:;">
						<img :src="`../../../static/user/${i.img}`" alt="">
						<p>{{i.title}}</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="user_exit">
			<span>退出登录</span>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			type: [
				{
					img: 'order.png',
					title: '全部订单'
				},
				{
					img: 'cart.png',
					title: '购物车'
				},
				{
					img: 'collect.png',
					title: '我的收藏'
				},
				{
					img: 'coupon.png',
					title: '我的优惠券'
				},
				{
					img: 'history.png',
					title: '浏览历史'
				},
				{
					img: 'wallet.png',
					title: '我的钱包'
				},
				{
					img: 'exchange.png',
					title: '商品兑换'
				},
				{
					img: 'address.png',
					title: '地址管理'
				},
				{
					img: 'safe.png',
					title: '账户安全'
				}
			]
		}
	},
	beforeCreate(){
		this.$store.commit( 'changeTitle', {
			title: '个人中心'
		} );
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/yo/usage/core/reset.scss';
.user_center{
	height: 100%;
	.user_header{
		height: 1.52rem;
		background-image: url('../../../static/user/topBg.jpg');
		background-size: 100% 1.52rem;
		position: relative;
		.user_datials{
			height: .858rem;
			position: absolute;
			bottom: .48rem;
			width: 100%;
			padding: 0 0 0 .19rem;
			@include flexbox();
			.user_photo{
				width: .83rem;
				height: .83rem;
				position: relative;
				.mask{
					width: .83rem;
					height: .83rem;
					background-image: url('../../../static/user/mask.png');
					background-size: .83rem .83rem;
					position:absolute;
				}
				img{
					width: .83rem;
					height: .83rem;
				}
			}
			.user_info{
				@include align-self();
				margin-left: .1rem;
				.user_name{
					@include flexbox();
					b{
						color: #fa281b;
						font-size: .14rem;
						line-height: .14rem;
					}
					a{
						background: #25282f;
						color: #f1d08a;
						font-size: .1rem;
						height: .16rem;
						line-height: .16rem;
						padding: 0 .03rem;
						margin-left: .06rem;
						@include border-radius( 3px );
						@include flexbox();
						@include align-items();
						i{
							width: .11rem;
							height: .11rem;
							background: url('../../../static/user/clubFinger.png') no-repeat;
							background-size: .11rem .11rem;
						}
					}
				}
				.user_ad{margin-top: .03rem;}
			}
		}
		.user_order{
			height: .48rem;
			position: absolute;
			bottom: 0;
			width: 100%;
			background: url('../../../static/user/transparent.png');
			@include flexbox();
			.user_level{
				width: .67rem;
				height: 100%;
				background-image: url('../../../static/user/grade.png');
				background-repeat: no-repeat;
				background-size: .67rem;
				margin-left: .28rem;
				color: #fff;
				font-size: .12rem;
				text-align: center;
				line-height: .34rem;
			}
			.order_info{
				@include flex();
				@include flexbox();
				padding: 0 0 0 .2rem;
				a{
					width: 25%;
					text-align: center;
					color: #000;
					@include flexbox();
					@include flex-direction( column );
					@include justify-content();
				}
			}
		}
	}
	.user_choose{
		width: 100%;
		ul{
			width: 100%;
			@include flexbox();
			@include flex-wrap( wrap );
			@include align-content( flex-start );
			padding: .2rem 0 0 0;
			li{
				width: 33.3333%;
				padding: 0 .2rem;
				margin: 0 0 .2rem 0;
				a{
					display: block;
					width: 100%;
					img{
						display: block;
						width: 100%;
						margin-bottom: .05rem;
					}
					p{
						text-align: center;
						color: #626365;
					}
				}
			}
		}
	}
	.user_exit{
		width: 100%;
		@include flexbox();
		@include justify-content();
		margin: .3rem 0;
		span{
			width: 3rem;
			height: .34rem;
			text-align: center;
			line-height: .34rem;
			color: #fff;
			background-color: #DE4B45;
			@include border-radius( 5px );
		}
	}
}
</style>