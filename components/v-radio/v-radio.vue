<template>
	<view class="v-radio">
		<view class="drow" v-if="direction=='row'">
			<view class="radio" @click="radioClick(rindex,item)" v-for="(item,rindex) in list" :key="rindex">
				<view class="icon_circle">
					<view class="dot" :style="{background:index==rindex?activeColor:'#FFFFFF'}"></view>
				</view>
				<text class="label" :style="{color:labelColor}" v-if="keyName==''">{{item}}</text>
				<text class="label" :style="{color:labelColor}" v-if="keyName!=''">{{item[keyName+'']}}</text>
			</view>
		</view>
		<view class="dcolumn" v-if="direction=='column'">
			<view class="item" :style="{justifyContent:align}" @click="radioClick(rindex,item)" v-for="(item,rindex) in list" :key="rindex">
				<view class="radio">
					<view class="icon_circle">
						<view class="dot" :style="{background:index==rindex?activeColor:'#FFFFFF'}"></view>
					</view>
					<text class="label" :style="{color:labelColor}" v-if="keyName==''">{{item}}</text>
					<text class="label" :style="{color:labelColor}" v-if="keyName!=''">{{item[keyName+'']}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		model:{
			prop:'index',
			event:'input'
		},
		props:{
			index:{
				type:[String,Number],
				default:0
			},
			list:{
				type:Array,
				default:()=>{
					return []
				}
			},
			keyName:{
				type:String,
				default:''
			},
			direction:{
				type:String,
				default:'row'
			},
			activeColor:{
				type:String,
				default:'#ff5500'
			},
			labelColor:{
				type:String,
				default:'#000000'
			},
			align:{
				type:String,
				default:'flex-start'
			}
		},
		methods:{
			/**radio点击*/
			radioClick(index,item){
				this.$emit('input',index)
				this.$emit('change',{index:index,value:item})
			}
		}
	}
</script>

<style scoped>
	.v-radio{
		width: 100%;
	}
	
	.v-radio .drow{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
	}
	
	.v-radio .drow .radio{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
	}
	
	.v-radio .drow .radio .icon_circle{
		width: 16px;
		height: 16px;
		border-radius: 50%;
		margin-right: 5px;
		border: 1px solid #C0C0C0;
		background: #FFFFFF; 
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.v-radio .drow .radio .icon_circle .dot{
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #FFFFFF;
		transition: all 0.5s ease;
	}
	
	.v-radio .drow .radio .label{
		font-size: 13px;
	}
	
	.v-radio .dcolumn{
		width: 100%;
	}
	
	.v-radio .dcolumn .item{
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.v-radio .dcolumn .item .radio{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.v-radio .dcolumn .item .radio .icon_circle{
		width: 16px;
		height: 16px;
		border-radius: 50%;
		margin-right: 5px;
		border: 1px solid #C0C0C0;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.v-radio .dcolumn .item .radio .icon_circle .dot{
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #FFFFFF;
	}
	
	.v-radio .dcolumn .item .radio .label{
		font-size: 13px;
	}
</style>
