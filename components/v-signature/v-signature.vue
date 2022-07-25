<template>
	<view class="v-signature" v-if="show" @touchmove.stop.prevent="maskClick">
		<canvas canvas-id="sign" id="sign" ref="sign" class="canvas" :style="{height:getHeight+'px'}"
			@touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
		<view class="tools">
			<view class="colors">
				<view class="color" @click="colorClick(cindex)"
					:style="{background:color,border:cindex==colorIndex?'3px solid #FFFFFF':''}"
					v-for="(color,cindex) in colors" v-bind:key="cindex"></view>
			</view>
			<view class="btns">
				<view class="btn" @click="clearSign"><text>清空</text></view>
				<view class="btn" @click="confirmSign"><text>确定</text></view>
				<view class="btn" @click="quitSign"><text>退出</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		model: {
			prop: 'show',
			event: 'input'
		},
		props: {
			show: {
				type: Boolean,
				default: false
			},
			height: {
				type: [String, Number],
				default: 300
			},
			lineWidth: {
				type: [String, Number],
				default: 3
			}
		},
		data() {
			return {
				canvas: null,
				colorIndex: 0,
				colors: ['#000000', '#ff5500', '#0087FD', '#4cd964'],
				startX: 0,
				startY: 0,
				moveX: 0,
				moveY: 0,
			}
		},
		mounted() {
			this.init()
		},
		computed:{
			getHeight(){
				let height=Number(this.$props.height)
				if(height<=0)return 200
				if(height>=350)return 350
			}
		},
		methods: {
			init() {
				this.canvas = uni.createCanvasContext('sign')
				this.canvas.strokeStyle = this.colors[this.colorIndex]
				this.canvas.lineWidth = Number(this.$props.lineWidth)
			},
			maskClick(e) {
				e.preventDefault()
			},
			touchStart(e) {
				e.preventDefault()
				if (e.touches.length == 1) {
					let point = {
						x: e.touches[0].x,
						y: e.touches[0].y
					}
					this.startX = point.x
					this.startY = point.y
					this.canvas.beginPath()
				}
			},
			touchMove(e) {
				e.preventDefault()
				if (e.touches.length == 1) {
					let point = {
						x: e.touches[0].x,
						y: e.touches[0].y
					}
					this.moveX = point.x
					this.moveY = point.y
					this.canvas.moveTo(this.startX, this.startY)
					this.canvas.lineTo(point.x, point.y)
					this.canvas.stroke()
					this.canvas.draw(true)
					this.startX = point.x
					this.startY = point.y
				}
			},
			touchEnd(e) {
				e.preventDefault();
				if (e.touches.length == 1) {
					let point = {
						x: e.touches[0].x,
						y: e.touches[0].y
					}
					this.canvas.closePath()
				}
			},
			colorClick(index) {
				this.colorIndex = index
				this.canvas.strokeStyle = this.colors[index]
			},
			clearSign() {
				this.canvas.draw()
			},
			quitSign(){
				this.$emit('input',false)
			},
			confirmSign() {
				uni.canvasToTempFilePath({
					canvasId: 'sign',
					success: (res) => {
						this.canvas.draw()
						this.$emit('confirm', res.tempFilePath)
						this.$emit('input',false)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.v-signature {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 6667;

	}

	.v-signature .canvas {
		width: 100%;
		background: #FFFFFF;
		z-index: 888;
	}

	.v-signature .tools {
		width: calc(100% - 30px);
		padding: 0 15px;
		position: absolute;
		bottom: 30px;
		left: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.v-signature .tools .colors {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.v-signature .tools .colors .color {
		margin-right: 7px;
		width: 25px;
		height: 25px;
		border-radius: 50%;
	}

	.v-signature .btns {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.v-signature .btns .btn {
		width: 50px;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 13px;
		color: #FFFFFF;
		background: #ff5500;
		border-radius: 5px;
		margin-left: 5px;
	}
</style>
