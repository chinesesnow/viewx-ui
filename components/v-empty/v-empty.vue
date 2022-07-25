<template>
	<view class="v-empty" :style="{marginTop:top+'px'}">
		<v-icons :name="icon" :fill="iconColor" size="90"></v-icons>
		<v-text :text="title" :color="titleColor"></v-text>
	</view>
</template>

<script>
	export default{
		props:{
			icon:{
				type:String,
				default:'alarm'
			},
			iconColor:{
				type:String,
				default:'#DDDDDD'
			},
			title:{
				type:String,
				default:'什么也没有~'
			},
			titleColor:{
				type:String,
				default:'#DDDDDD'
			},
			top:{
				type:String,
				default:'100'
			}
		},
		methods:{
			
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