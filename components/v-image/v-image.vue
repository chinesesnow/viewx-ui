<template>
	<image :src="src" :mode="mode" :lazy-load="lazyLoad" @error="error" @click="click"
		:style="{width:width+'px',height:height+'px',borderRadius:radius+'px'}">
	</image>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: ''
			},
			width: {
				type: [String, Number],
				default: 100
			},
			height: {
				type: [String, Number],
				default: 100
			},
			radius: {
				type: [String, Number],
				default: 0
			},
			mode: {
				type: String,
				default: 'scaleToFill'
			},
			lazyLoad: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			/**图片点击事件*/
			click(e) {
				this.$emit('click',e)
			},
			/**图片加载失败*/
			error(e){
				this.$emit('error',e)
			}
		}
	}
</script>

<style scoped>
	
</style>
