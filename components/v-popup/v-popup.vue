<template>
	<view class="v-popup" :class="{popupCenter:show&&type=='center'}">
		<view class="overlay" @click="close"
			:style="{opacity:show?1:0,visibility:show?'visible':'hidden'}"></view>
		<view class="bottom" v-if="type=='bottom'"
			:style="{transform:show?'translateY(0)':'translateY(100%)',borderTopLeftRadius:radius+'px',borderTopRightRadius:radius+'px'}">
			<view class="header" v-if="headerShow">
				<text @click="close" class="label">取消</text>
				<text @click="confirm" class="label">确定</text>
			</view>
			<slot></slot>
		</view>
		<view class="left" v-if="type=='left'" :style="{transform:show?'translateX(0)':'translateX(-100%)'}">
			<view class="header" v-if="headerShow">
				<view></view>
				<text @click="close" class="label">取消</text>
			</view>
			<slot></slot>
		</view>
		<view class="right" v-if="type=='right'" :style="{transform:show?'translateX(0)':'translateX(100%)'}">
			<view class="header" v-if="headerShow">
				<text @click="close" class="label">取消</text>
				<view></view>
			</view>
			<slot></slot>
		</view>
		<view class="top" v-if="type=='top'" :style="{transform:show?'translateY(0)':'translateY(-100%)'}">
			<slot></slot>
		</view>
		<view class="center" v-if="show&&type=='center'"
			:style="{padding:show?'30px 30px':'0 0',borderRadius:radius+'px'}">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		model:{
			prop:'show',
			event:'input'
		},
		props: {
			type: {
				type: String,
				default: 'bottom'
			},
			show: {
				type: Boolean,
				default: false
			},
			headerShow: {
				type: Boolean,
				default: true
			},
			radius: {
				type: [String, Number],
				default: 10
			}
		},
		methods: {
			/**取消关闭*/
			close() {
				this.$emit('input',false)
				this.$emit('close',false)
			},
			/**确定关闭*/
			confirm(){
				this.$emit('input',false)
				this.$emit('confirm')
			}
		}
	}
</script>

<style scoped>
	.v-popup {
		width: 100%;
		height: 100%;
		z-index: 9999;
	}

	.popupCenter {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
	}

	.v-popup .overlay {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 10000;
		position: fixed;
		left: 0;
		top: 0;
		opacity: 0;
		visibility: hidden;
		transition: all 0.5s ease;
	}



	.v-popup .bottom {
		padding: 10px 0 30px 0;
		width: 100%;
		background: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		transform: translateY(100%);
		transition: all 0.5s ease;
		z-index: 10002;
	}

	.v-popup .bottom .header {
		padding: 0 15px 15px 15px;
		width: calc(100% - 30px);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.v-popup .bottom .header .label {
		font-size: 13px;
		color: #333333;
	}

	.v-popup .left {
		padding: 10px 10px 30px 10px;
		width: 50%;
		height: calc(100% - 20px);
		background: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		transform: translateX(-100%%);
		transition: all 0.5s ease;
		z-index: 10002;
	}

	.v-popup .left .header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.v-popup .left .header .label {
		font-size: 13px;
		color: #333333;
	}

	.v-popup .right {
		padding: 10px 10px 30px 10px;
		width: 50%;
		height: calc(100% - 20px);
		background: #FFFFFF;
		position: fixed;
		top: 0;
		right: 0;
		transform: translateX(100%%);
		transition: all 0.5s ease;
		z-index: 10002;
	}

	.v-popup .right .header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.v-popup .right .header .label {
		font-size: 13px;
		color: #333333;
	}

	.v-popup .top {
		padding: 10px 10px;
		width: calc(100% - 20px);
		background: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		transform: translateY(-100%%);
		transition: all 0.5s ease;
		z-index: 10002;
	}

	.v-popup .center {
		padding: 0 0;
		background: #FFFFFF;
		transition: all 0.5s ease;
		z-index: 10002;
	}
</style>
