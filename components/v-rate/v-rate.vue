<template>
	<view class="v-rate">
		<v-icons @click="rateClick(index)" class="icons" :name="icon" :fill="index<number?activeColor:color"
			v-for="(item,index) in 5" v-bind:key="index"></v-icons>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: [String, Number],
				default: 0
			},
			icon: {
				type: String,
				default: 'star-fill'
			},
			color: {
				type: String,
				default: '#DDDDDD'
			},
			activeColor: {
				type: String,
				default: '#FF5500'
			}
		},
		data() {
			return {
				number: 0
			}
		},
		mounted() {
			this.number = Number(this.value)
		},
		methods: {
			/**点击事件处理*/
			rateClick(index) {
				this.number = index + 1
				this.$emit('change', {
					number: this.number
				})
			}
		}
	}
</script>

<style scoped>
	.v-rate {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.v-rate .icons {
		margin-right: 15px;
	}
</style>
