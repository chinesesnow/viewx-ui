<template>
	<view class="sub-tab" :style="{width:width==''?'100%':width+'px',borderColor:color,zIndex:zIndex}">
		<view @click="tabClick(tabIndex)" :style="{background:index==tabIndex?color:'',width:tabWidth,borderColor:color}" class="tab" v-for="(tab,tabIndex) in list" :key="tabIndex">
			<text :style="{color:index==tabIndex?'#FFFFFF':labelColor}">{{tab[keyName]}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		model: {
			prop: 'index',
			event: 'input'
		},
		props: {
			list: {
				type: Array,
				default: []
			},
			keyName: {
				type: String,
				default: ''
			},
			index: {
				type: [String, Number],
				default: 0
			},
			zIndex:{
				type: [String, Number],
				default: 1000
			},
			width: {
				type: [String, Number],
				default: ''
			},
			color: {
				type: String,
				default: '#FF5500'
			},
			labelColor: {
				type: String,
				default: '#333333'
			}
		},
		data() {
			return {

			}
		},
		computed:{
			tabWidth(){
				if(this.width==''){
					return (100/this.list.length)+'%'
				}else{
					return (Number(this.width)/this.list.length)+'px'
				}
			}
		},
		methods: {
			tabClick(index) {
				this.$emit('input', index)
				this.$emit('change', index)
			}
		}
	}
</script>

<style scoped>
	.sub-tab {
		width: 100%;
		height: 60upx;
		border-top: 2upx solid #FFFFFF;
		border-left: 2upx solid #FFFFFF;
		border-bottom: 2upx solid #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.sub-tab .tab{
		height: 100%;
		font-size: 26upx;
		border-right: 2upx solid #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
