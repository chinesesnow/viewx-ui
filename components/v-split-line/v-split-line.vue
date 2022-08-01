<template>
	<view class="v-split-line">
		<view class="line" :style="{background:lineBg}"></view>
		<view class="text" :style="{color:color,fontSize:size+'px'}">{{text}}</view>
		<view class="line" :style="{background:lineBg}"></view>
	</view>
</template>

<script>
	export default {
		props: {
			lineBg: {
				type: String,
				default: '#ff5500'
			},
			color: {
				type: String,
				default: '#0087FD'
			},
			size: {
				type: [String, Number],
				default: 10
			},
			text: {
				type: String,
				default: '分割线'
			},
		}
	}
</script>

<style scoped>
	.v-split-line {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.v-split-line .line {
		width: 40%;
		height: 1px;
	}

	.v-split-line .text {
		padding: 0 20px;
		background: #FFFFFF;
		text-align: center;
		white-space: nowrap;
	}
</style>
