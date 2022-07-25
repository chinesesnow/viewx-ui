<template>
	<switch @change="switchChange" :color="color" :checked="checked" :disabled="disabled" :style="`transform:scale(${Number(size)})`"></switch>
</template>

<script>
	export default{
		props:{
			color:{
				type:String,
				default:'#FF5500'
			},
			checked:{
				type:Boolean,
				default:false
			},
			disabled:{
				type:Boolean,
				default:false
			},
			size:{
				type:[Number,String],
				default:1
			}
			
		},
		methods:{
			switchChange(e){
				this.$emit('change',e)
			}
		}
	}
</script>

<style scoped>
	.v-empty{
		width: 100%;
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
</style>