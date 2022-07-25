<template>
	<i class="v-icons" @click="iconClick" v-html="getName" :style="{fontSize:size+'px',color:fill}"></i>
</template>

<script>
	import names from '../v-icons/names.js'
	export default {
		props: {
			size: {
				type: [String, Number],
				default: 26
			},
			fill: {
				type: String,
				default: '#C0C0C0'
			},
			name: {
				type: String,
				default: ''
			}
		},
		computed: {
			getName() {
				let name = names.filter((item) => {
					return item.label == this.name
				})[0].value
				return name
			}
		},
		methods:{
			iconClick(){
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
	@font-face {
	  font-family: 'viewx-iconfont'; 
	  src: url('https://at.alicdn.com/t/font_3389464_7yw4wfjj2f3.ttf?t=1652233208795') format('truetype');
	}
	
	.v-icons {
	  font-family: "viewx-iconfont" !important;
	  font-size: 26px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
</style>
