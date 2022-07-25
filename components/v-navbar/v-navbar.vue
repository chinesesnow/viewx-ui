<template>
	<view>
		<cover-view class="v-navbar" v-if="isNative"
			:style="{background:background==''?'#FFFFFF':background,paddingTop:statusBarHeight+'px'}">
			<slot name="left"></slot>
			<cover-view class="title" :style="{color:background==''?'#000000':'#FFFFFF',margin:titleMargin}">{{title}}
			</cover-view>
			<slot name="right"></slot>
		</cover-view>
		<view class="v-navbar" v-else
			:style="{background:background==''?'#FFFFFF':background,paddingTop:statusBarHeight+'px'}">
			<slot name="left"></slot>
			<text class="title" :style="{color:background==''?'#000000':'#FFFFFF',margin:titleMargin}">{{title}}</text>
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isNative: {
				type: Boolean,
				default: false
			},
			background: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '导航标题'
			},
			titleMargin: {
				type: String,
				default: '0px 0px 0px 0px'
			}
		},
		data() {
			return {
				statusBarHeight: 0,
			}
		},
		mounted() {
			this.systemInfo()
		},
		methods: {
			/**返回上一页*/
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			systemInfo() {
				uni.getSystemInfo({
					success: (res) => {
						this.statusBarHeight = res.statusBarHeight
					}
				})
			}
		}
	}
</script>

<style scoped>
	.v-navbar {
		width: calc(100% - 40upx);
		padding: 0 20upx;
		height: 88upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 6666;
	}

	.v-navbar .back {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-left: -20upx;
	}

	.v-navbar .title {
		font-size: 32upx;
		color: #000000;
	}

	.v-navbar .back .label {
		font-size: 26upx;
		margin-bottom: 10upx;
		color: #666666;
	}
</style>
