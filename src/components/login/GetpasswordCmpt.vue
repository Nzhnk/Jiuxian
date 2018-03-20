<template>
	<div class="getpasswordBox">
		<div class="phoneNumber">
			<i></i>
			<input type="text" name="" placeholder="账号绑定的手机号">
		</div>
		<div class="identcode">
			<input type="text" name="" placeholder="验证码">
			<img src="../../assets/images/captchaimg.jpg" title="验证码">
			<p>换一张</p>
		</div>
		<div class="checkcode">
			<input type="text" name="" placeholder="请输入校验码">
			<span>获取校验码</span>
		</div>
		<div class="setpasswordBtn">
			<span>修改密码</span>
		</div>
	</div>
</template>

<script>
export default {
	beforeCreate(){
		this.$store.commit( 'changeTitle', {
			title: '找回密码'
		} );
	}
}

</script>

<style lang="scss">
@import '../../style/yo/usage/core/reset.scss';
.getpasswordBox{
	font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Tohoma, Arial;
	font-size: .14rem;
	padding: .15rem .3rem 0;
	.identcode, .phoneNumber, .checkcode{
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
	.setpasswordBtn{
		height: .34rem;
		@include flexbox();
		@include justify-content();
		span{
			width: 3rem;
			height: .34rem;
			line-height: .34rem;
			text-align: center;
			background-color: #DE4B45;
			@include border-radius( 5px );
			color: #fff;
		}
	}
}
</style>