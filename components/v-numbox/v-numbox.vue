<template>
	<view class="v-numbox">
		<view class="minus" @click="minus" :style="{background:background,color:labelColor,borderColor:border?borderColor:''}"><text>-</text></view>
		<input class="input" @input="input" @blur="input" @focus="input" type="number" :disabled="inputDisabled"  :value="currentValue" :style="{borderColor:border?borderColor:'',background:background}"/>
		<view class="plus" @click="plus" :style="{background:background,color:labelColor,borderColor:border?borderColor:''}"><text>+</text></view>
	</view>
</template>

<script>
	export default{
		model:{
			prop:'value',
			event:'input'
		},
		props:{
			value:{
				type:[String,Number],
				default:0
			},
			min:{
				type:[String,Number],
				default:0
			},
			max:{
				type:[String,Number],
				default:100
			},
			step:{
				type:[String,Number],
				default:1
			},
			border:{
				type:Boolean,
				default:true
			},
			inputDisabled:{
				type:Boolean,
				default:false
			},
			borderColor:{
				type:String,
				default:'#C0C0C0'
			},
			background:{
				type:String,
				default:''
			},
			labelColor:{
				type:String,
				default:'#000000'
			},
		},
		data(){
			return{
				currentValue:0,
				minValue:Number(this.min),
				maxValue:Number(this.max),
				numStep:Number(this.step)
			}
		},
		mounted() {
			let val=Number(this.value)
			this.setValue(val)
		},
		watch:{
			value(newValue,oldValue){
				let val=newValue
				this.setValue(val)
			}
		},
		methods:{
			minus(){
				let val=this.currentValue-this.numStep<=this.minValue?this.minValue:this.currentValue-this.numStep
				this.currentValue=val
				this.$emit('change', val)
				this.$emit('input', val)
			},
			plus(){
				let val=this.currentValue+this.numStep>=this.maxValue?this.maxValue:this.currentValue+this.numStep
				this.currentValue=val
				this.$emit('change', val)
				this.$emit('input', val)
			},
			input(e){
				let val=Number(e.detail.value)
				this.setValue(val)
				this.$emit('change', this.currentValue)
				this.$emit('input', this.currentValue)
			},
			setValue(val){
				if(val<=this.minValue){
					this.currentValue=this.minValue
				}else if(val>=this.maxValue){
					this.currentValue=this.maxValue
				}else{
					this.currentValue=val
				}
			}
		}
	}
</script>

<style scoped>
	.v-numbox{
		width: 120px;
		height: 60px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.v-numbox .minus{
		width: 25px;
		height: 25px;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border: 1px solid;
	}
	
	.v-numbox .plus{
		width: 25px;
		height: 25px;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border: 1px solid;
	}
	
	.v-numbox .input{
		width: 50px;
		height: 25px;
		border: 1px solid;
		text-align: center;
		font-size: 13px;
	}
</style>
