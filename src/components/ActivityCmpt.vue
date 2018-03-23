<template>
	<div class="content">
		<header-cmpt></header-cmpt>
		<div class="activityContent" ref="contentScroll">
			<div class="appdownload" v-if="appShow">
				<a href="javascript:void(0);" class="close" @click="AppShow">
					<i class="close"></i>
				</a>
				<span class="addLogo"></span>
				<h3>
					<p>下载app，首单满100送100！</p>
					<p class="red">买真酒，就上酒仙网</p>
				</h3>
				<a href="javascript:void(0);" class="openApp">立即下载</a>
			</div>
			<div class="lastTimeBox">
				<div class="lastTime">
					<i>距离活动结束还剩</i>
					<span class="day">
						<em class="zDay">{{content.day}}</em>
					</span>
					<i>天</i>
					<span class="hour">
						<em class="zHour">{{content.hour}}</em>
					</span>
					<i>时</i>
					<span class="minute">
						<em class="zMinute">{{content.min}}</em>
					</span>
					<i>分</i>
					<span class="second">
						<em class="zSecond">{{content.sec}}</em>
					</span>
					<i>秒</i>
				</div>
			</div>
			<div class="outLay" v-for="(v,i) in 91">
				<img :src="`../../static/activity/acImg/${v}.png`">
				<a href="javascript:void(0);" v-if="v == 91" @click="toTop"></a>
			</div>
		</div>
		<div class="activityFooter">
			<img src="../../static/activity/floattra.png">
		</div>
	</div>
</template>

<script>
	import HeaderCmpt from './layout/HeaderCmpt.vue';

	export default {
		components: {
			HeaderCmpt
		},
		data: () => {
			return {
				content: [],
				endTime: '2018-03-25',
				appShow: true
			}
		},
		beforeCreate(){
			this.$store.commit( 'changeTitle', {
				title: '3.19开仓节主会场'
			} );
		},
		mounted() {
			this.countdowm(this.endTime)
		},
		methods: {
			countdowm(timestamp) {
				let that = this;
				let timer = setInterval(function() {
					let nowTime = new Date();
					let endTime = new Date(timestamp);
					let t = endTime.getTime() - nowTime.getTime();

					if (t > 0) {
						let day = parseInt(t / 1000 / 60 / 60 / 24 , 10);
						let hour = parseInt(t / 1000 / 60 / 60 % 24 , 10);
						let min = parseInt(t / 1000 / 60 % 60, 10);
						let sec = parseInt(t / 1000 % 60, 10);

						day = day < 10 ? "0" + day : day;
						hour = hour < 10 ? "0" + hour : hour;
						min = min < 10 ? "0" + min : min;
						sec = sec < 10 ? "0" + sec : sec;
						let format = [];

						if (day > 0) {
							format = {
								'day': day,
								'hour': hour,
								'min': min,
								'sec': sec
							}
						}
						if (day <= 0 && hour > 0 ) {
							format = {
								'day': '00',
								'hour': hour,
								'min': min,
								'sec': sec
							}
						}
						if (day <= 0 && hour <= 0) {
							format = {
								'day': '00',
								'hour': '00',
								'min': min,
								'sec': sec
							}
						}
						if (day <= 0 && hour <= 0 && min <= 0) {
							format = {
								'day': '00',
								'hour': '00',
								'min': '00',
								'sec': sec
							}
						}
						that.content = format;
					} else {
						clearInterval(timer);
					}
				},1000);
			},
			AppShow() {
				this.appShow = false;
			},
			toTop() {
				this.$refs.contentScroll.scrollTop = 0;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/yo/usage/core/reset.scss';
	img{
		display: block;
	}
	.content {
		@include flexbox();
		@include flex-direction(column);
		width: 100%;
		height: 100%;
		position: relative;
	}

	.activityContent {
		@include flexbox();
		@include flex();
		@include flex-direction(column);
		width: 100%;
		overflow-y: scroll;
	}

	.appdownload {
		display: -webkit-box;
		justify-content: space-between;
		align-items: center;
		background: #2e2e2e;
		height: 0.43rem;
		h3 {
			font-weight: normal;
			text-align: center;
		}
		p {
			color: #fff;
			font-size: 12px;
			height: 0.14rem;
			line-height: 0.14rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.red {
			color: #fc5a5a;
		}
	}

	.close {
		@include flexbox();
		justify-content: center;
		align-items: center;
		width: 0.43rem;
		height: 0.43rem;
		i {
			width: 0.13rem;
			height: 0.13rem;
			display: block;
			background: url(../../static/activity/close.png) no-repeat center;
		}
	}

	.addLogo {
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		background: url(../../static/activity/jiuxianLogo.png) no-repeat center;
		background-size: 0.3rem 0.3rem;
	}

	.openApp {
		background: #fc5a5a;
		color: #fff;
		display: block;
		font-size: 14px;
		height: 0.43rem;
		line-height: 0.43rem;
		padding: 0 5px;
		text-align: center;
		text-decoration: none;
	}

	.lastTimeBox {
		width: 100%;
		height: 0.25rem;
		background: #ffd101;
		text-align: center;
		i {
			display: inline-block;
			vertical-align: middle;
			font-size: 13px;
			font-style: normal;
			color: #df010e;
			padding: 0 2px;
		}
		span {
			display: inline-block;
			vertical-align: middle;
			width: 0.22rem;
			height: 0.22rem;
		}
		em {
			vertical-align: middle;
			display: block;
			width: 100%;
			line-height: 0.21rem;
			text-align: center;
			font-family: Impact;
			font-style: normal;
			letter-spacing: 0;
			color: #ff4342;
			font-size: 16px;
		}
	}

	.lastTime {
		display: inline-block;
		width: 85%;
		height: 0.25rem;
		line-height: 0.25rem;
		background: #ffd101;
	}

	.outLay {
		width: 100%;
		position: relative;
		img {
			width: 100%;
			height: auto;
		}
		a {
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			bottom: 0;
		}
	}

	.activityFooter {
		width: 100%;
		background: transparent;
		position: absolute;
		bottom: 0;
		img {
			width: 100%;
		}
	}
</style>
