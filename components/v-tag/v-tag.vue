<template>
	<view class="v-tag" @click="click"
		:style="{borderRadius:radius+'px',borderColor:borderColor,background:background,fontSize:size+'px',color:setColor}">
		<text>{{text}}</text>
		<view class="number" v-if="parseInt(number)>0"><span>{{setNumber}}</span></view>
	</view>
</template>

<script>
	export default {
		props: {
			radius: {
				type: [String, Number],
				default: 0
			},
			borderColor: {
				type: String,
				default: '#ff5500'
			},
			background: {
				type: String,
				default: ''
			},
			size: {
				type: [String, Number],
				default: 10
			},
			color: {
				type: String,
				default: '#ff5500'
			},
			text: {
				type: String,
				default: '标签文字'
			},
			number: {
				type: [String, Number],
				default: 0
			}
		},
		computed: {
			setNumber() {
				return this.number >= 10 ? '...' : this.number
			},
			setColor() {
				return this.background != '' ? '#FFFFFF' : this.color
			}
		},
		methods: {
			/**tag点击事件*/
			click() {
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
	.v-tag {
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border: 1px solid #0087FD;
		padding: 5px 5px;
		position: relative;
	}

	.v-tag .number {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #FF0000;
		color: #FFFFFF;
		font-size: 10px;
		position: absolute;
		right: -10px;
		top: -10px;
	}
</style>
