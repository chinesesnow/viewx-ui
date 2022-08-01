<template>
	<view>
		<view class="v-count-down" v-if="mode=='time'">
			<view class="item" :style="{border:border?'1px solid':'none',borderColor:border?color:'',color:color}">
				<text>{{day}}</text>
				<text>天</text>
			</view>
			<view class="dot">:</view>
			<view class="item" :style="{border:border?'1px solid':'none',borderColor:border?color:'',color:color}">
				<text>{{hour}}</text>
			</view>
			<view class="dot">:</view>
			<view class="item" :style="{border:border?'1px solid':'none',borderColor:border?color:'',color:color}">
				<text>{{minute}}</text>
			</view>
			<view class="dot">:</view>
			<view class="item" :style="{border:border?'1px solid':'none',borderColor:border?color:'',color:color}">
				<text>{{second}}</text>
			</view>
		</view>
		<view class="v-count-down" v-if="mode=='number'">
			<view class="item" :style="{border:border?'1px solid':'none',borderColor:border?color:'',color:color}">
				<text>{{countNumber}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mode: {
				type: String,
				default: 'time'
			},
			seconds: {
				type: [String, Number],
				default: 86400
			},
			number: {
				type: [String, Number],
				default: 60
			},
			border: {
				type: Boolean,
				default: true
			},
			color: {
				type: String,
				default: '#FF0000'
			}
		},
		data() {
			return {
				day: 0,
				hour: 0,
				minute: 0,
				second: 0,
				countSeconds: 0,
				countNumber: 0,
				countDownTimer: null
			}
		},
		mounted() {
			this.startTimer()
		},
		beforeDestroy() {
			this.countDownTimer = null
		},
		methods: {
			/**开始倒计时*/
			startTimer() {
				let mode = this.$props.mode
				this.countSeconds = Number(this.$props.seconds)
				this.countNumber = Number(this.$props.number)
				if (!this.countDownTimer) {
					if (mode == 'time') {
						this.countDownTimer = setInterval(() => {
							this.countSeconds -= 1
							this.timeCountDown()
							if (this.countSeconds == 0) {
								this.$emit('finish')
								clearInterval(this.countDownTimer)
							}
						}, 1000)
					} else {
						this.countDownTimer = setInterval(() => {
							this.countNumber -= 1
							if (this.countNumber == 0) {
								this.$emit('finish')
								clearInterval(this.countDownTimer)
							}
						}, 1000)
					}
				}
			},
			/**计算时间*/
			timeCountDown() {
				let day = parseInt(this.countSeconds / (24 * 60 * 60))
				this.day = day
				let hour = parseInt(this.countSeconds / (60 * 60) % 24);
				this.hour = hour < 10 ? "0" + hour : hour
				let minute = parseInt(this.countSeconds / 60 % 60);
				this.minute = minute < 10 ? "0" + minute : minute
				let second = parseInt(this.countSeconds % 60);
				this.second = second < 10 ? "0" + second : second
			}
		}
	}
</script>

<style scoped>
	.v-count-down {
		width: 160px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.v-count-down .item {
		width: 30px;
		height: 30px;
		font-size: 13px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.v-count-down .dot {
		margin: 0 5px;
	}
</style>
