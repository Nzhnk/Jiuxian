<template>
	<div class="loginTypeBox">
		<ul class="loginType">
			<li><p :class="{loginAct:isShow}" @click="changeAct1">账号登录</p></li>
			<li><p :class="{loginAct:!isShow}" @click="changeAct2">手机动态密码登录</p></li>
		</ul>
		<div class="zhLoginBox" v-show="isShow">
			<div class="user">
				<i></i>
				<input type="text" name="" placeholder="用户名/邮箱/手机号">
			</div>
			<div class="pass">
				<i></i>
				<input type="password" name="" placeholder="密码">
			</div>
			<div class="identcode">
				<input type="text" name="" placeholder="验证码">
				<img src="../../assets/images/captchaimg.jpg" height="40" width="80" title="验证码">
				<p>换一张</p>
			</div>
		</div>
		<div class="ShouLoginBox" v-show="!isShow">
			<div class="phoneNumber">
				<i></i>
				<input type="text" name="" placeholder="请输入手机号，新用户将自动注册">
			</div>
			<div class="identcode">
				<input type="text" name="" placeholder="请输入验证码">
				<img src="../../assets/images/captchaimg.jpg" title="验证码">
				<p>换一张</p>
			</div>
			<div class="checkcode">
				<input type="text" name="" placeholder="请输入校验码">
				<span>获取校验码</span>
			</div>
		</div>
		<div class="loginBtn">
			<a href="javascript:;">立 即 登 录</a>
		</div>
		<div class="loginChoose">
			<router-link to='/mine/register'>免费注册</router-link>
			<router-link to='/mine/getpassword'>找回密码</router-link>
		</div>
		<div class="loginPartner">
			<div class="loginPartnerTop">
				<span></span>
				<p>合作伙伴登录</p>
				<span></span>
			</div>
			<div class="loginPartnerChoose">
				<a href="javascript:;"><img src="../../assets/images/tencent.png"></a>
				<a href="javascript:;"><img src="../../assets/images/alipay.png"></a>
				<a href="javascript:;"></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			// loginAct: 'loginAct',
			isShow: true
		}
	},
	beforeCreate(){
		this.$store.commit( 'changeTitle', {
			title: '用户登录'
		} );
	},
	mounted(){
		console.log(this.$store.state.USER_INFO )
	},
	methods: {
		changeAct1(){
			this.isShow = true;
		},
		changeAct2(){
			this.isShow = false;
		}
	}
}

</script>

<style lang="scss">
@import '../../style/yo/usage/core/reset.scss';
.loginTypeBox{
	font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Tohoma, Arial;
	font-size: .14rem;
	padding: .15rem .3rem 0;
	.loginType{
		@include flexbox();
		li{
			width: 50%;
			height: .45rem;
			color: #626365;
			@include flexbox();
			@include justify-content();
			p{
				font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Tohoma, Arial;
				font-size: .14rem;
				line-height: .24rem;
				height: .3rem;
				line-height: .4rem;
			}
			.loginAct{
				color: #de4943;
				@include border( 0 0 2px 0, #de4943 );
			}
		}
	}
	.user, .pass, .identcode, .phoneNumber, .checkcode{
		width: 100%;
		height: .42rem;
		@include flexbox();
		@include align-items();
		@include border-radius( 5px );
		border: 1px  solid #ccc;
		margin-top: .1rem;
		margin-bottom: .4rem;
		i{
			width: .4rem;
			height: .4rem;
			background: url('../../assets/images/user.png') no-repeat;
			background-position: center;
		}
		input{
			@include flex();
			border: none;
			height: 100%;
		}
	}
	.phoneNumber i{
		background: url('../../assets/images/phone.png') no-repeat;
		background-position: center;
	}
	.pass i{
		background: url('../../assets/images/pass.png') no-repeat;
		background-position: center;
	}
	.identcode, .checkcode{
		border: none;
		input{
			text-indent: .1rem;
			width: 1.2rem;
			@include border-radius( 5px );
			border: 1px solid #ccc;
		}
		img{
			width: 1.1rem;
			height: .4rem;
			margin: 0 .1rem 0 .3rem;
		}
	}
	.checkcode{
		@include justify-content( space-between );
		margin-bottom: .65rem;
		input{
			@include flex( none );
			width: 1.45rem;
		}
		span{
			width: 1rem;
			height: .4rem;
			text-align: center;
			line-height: .4rem;
			background-color: #df3832;
			color: #fff;
			@include border-radius( 5px );
		}
	}
	.loginBtn{
		@include flexbox();
		@include justify-content();
		margin-bottom: .3rem;
		a{
			height: .34rem;
			width: 3rem;
			line-height: .34rem;
			text-align: center;
			background-color: #DE4B45;
			color: #fff;
			@include border-radius( 5px );
		}
	}
	.loginChoose{
		@include flexbox();
		@include justify-content( space-between );
		margin-bottom: .2rem;
		a{
			color: #666;
			text-decoration: underline;
		}
	}
	.loginPartner{
		.loginPartnerTop{
			height: .4rem;
			@include flexbox();
			@include align-items();
			p{
				width: 1.1rem;
				height: .4rem;
				line-height: .4rem;
				text-align: center;
				color: #878686;
			}
			span{
				height: .01rem;
				background-color: #ccc;
				@include flex();
			}
		}
		.loginPartnerChoose{
			margin: .2rem 0;
			@include flexbox();
			@include justify-content( space-around );
			a{
				width: .45rem;
				height: .45rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>