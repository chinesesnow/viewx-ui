<template>
	<scroll-view :scroll-x="scrollX" :scroll-y="scrollY" :scroll-with-animation="true" :scroll-into-view="scrollTo" class="v-scroll"
		:style="{height:height+'px'}" @scrolltoupper="toUpper" @scrolltolower="toLower" @scroll="scroll">
		<slot></slot>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			height: {
				type: [String, Number],
				default: '300'
			},
			scrollX: {
				type: Boolean,
				default: false
			},
			scrollY: {
				type: Boolean,
				default: true
			},
			scrollTo: {
				type: String,
				default: ''
			}
		},
		methods: {
			/**滚动到顶部/左边*/
			toUpper(e) {
				this.$emit('scrolltoupper', e)
			},
			/**滚动到底部/右边*/
			toLower(e) {
				this.$emit('scrolltolower', e)
			},
			/**滚动事件*/
			scroll(e) {
				this.$emit('scroll', e)
			}
		}

	}
</script>

<style scoped>
	.v-scroll {
		width: 100%;
	}
</style>
