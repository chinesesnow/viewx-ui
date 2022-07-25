<template>
	<view><text :style="{color:color,fontSize:size+'px',margin:margin,lineHeight:lineHeight+'px',fontWeight:weight}" @click="click">{{text}}</text></view>
</template>

<script>
	export default{
		props:{
			color:{
				type:String,
				default:'#333333'
			},
			size:{
				type:[String,Number],
				default:13
			},
			weight:{
				type:[String,Number],
				default:400
			},
			text:{
				type:[String,Number],
				default:'文本内容'
			},
			margin:{
				type:String,
				default:'0px 0px'
			},
			lineHeight:{
				type:[String,Number],
				default:0
			}
		},
		methods:{
			/**点击事件*/
			click(){
				this.$emit('click')
			}
		}
	}
</script>

<style>
</style>
