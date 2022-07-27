<template>
	<view class="v-progress">
		<view v-if="type=='line'" class="line" :style="{borderRadius:radius+'px',background:background,height:height+'px'}">
			<view class="percent" :style="{width:percent+'%',height:height+'px',borderRadius:radius+'px',background:activeColor}">
				<text v-if="showPercent" class="label">{{percent}}%</text>
			</view>
		</view>
		<view v-if="type=='circle'" class="circle">
			
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			type:{
				type:String,
				default:'line'
			},
			height:{
				type:[String,Number],
				default:16
			},
			radius:{
				type:[String,Number],
				default:10
			},
			percent:{
				type:[String,Number],
				default:50
			},
			showPercent:{
				type:Boolean,
				default:true
			},
			background:{
				type:String,
				default:'#dddddd'
			},
			activeColor:{
				type:String,
				default:'#FF5500'
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.v-progress{
		width: 100%;
	}
	
	.v-progress .line{
		width: 100%;
		position: relative;
	}
	
	.v-progress .line .percent{
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		transition: all 1s ease; 
	}
	
	.v-progress .line .percent .label{
		font-size: 16upx;
		color: #FFFFFF;
	}
	
	
</style>