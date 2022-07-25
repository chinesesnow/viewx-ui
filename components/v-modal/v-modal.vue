<template>
	<view class="v-modal" :class="{popupCenter:show}">
		<view class="overlay" @click="cancel"
			:style="{opacity:show?1:0,visibility:show?'visible':'hidden'}"></view>
		<view class="center" v-if="show" :style="{borderRadius:radius+'px'}">
			<view class="title" v-if="showTitle" :style="{color:titleColor}">{{title}}</view>
			<view class="content" :style="{color:contentColor}">{{content}}</view>
			<view class="btns" v-if="showCancel">
				<view class="btn-cancel" @click="cancel"><text>取消</text></view>
				<view class="btn-confirm" @click="confirm"><text>确定</text></view>
			</view>
			<view class="btns" v-else>
				<view class="btn-confirm-full" @click="confirm"><text>确定</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		model:{
			prop:'show',
			event:'input'
		},
		props: {
			show: {
				type: Boolean,
				default: false
			},
			showTitle:{
				type: Boolean,
				default: true
			},
			showCancel:{
				type: Boolean,
				default: true
			},
			radius: {
				type: [String, Number],
				default: 10
			},
			title: {
				type: String,
				default: '是否关闭Modal弹窗?'
			},
			titleColor: {
				type: String,
				default: '#333333'
			},
			content: {
				type: String,
				default: 'Modal提示正文内容'
			},
			contentColor: {
				type: String,
				default: '#333333'
			},
		},
		methods: {
			/**取消*/
			cancel(){
				this.$emit('input',false)
				this.$emit('cancel')
			},
			/**确定*/
			confirm(){
				this.$emit('confirm')
			}
		}
	}
</script>

<style scoped>
	.v-modal {
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
	
	.popupCenter {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
	}

	.v-modal .overlay {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 10000;
		position: fixed;
		left: 0;
		top: 0;
		opacity: 0;
		visibility: hidden;
		transition: all 0.5s ease;
	}

	.v-modal .center {
		width: 70%;
		padding: 15px 0  0  0;
		border-radius: 10px;
		background: #FFFFFF;
		z-index: 10002;
	}
	
	.v-modal .center .title{
		padding: 0 15px;
		width: calc(100% - 30px);
		text-align: center;
		font-size: 13px;
		margin-bottom: 30px;
	}
	
	.v-modal .center .content{
		padding: 0 15px;
		width: calc(100% - 30px);
		text-align: center;
		font-size: 15px;
		margin-bottom: 30px;
	}
	
	.v-modal .center .btns{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-top: 1px solid #F3F3F3;
	}
	
	.v-modal .center .btns .btn-cancel{
		width: 50%;
		height: 40px;
		border-right: 1px solid #F3F3F3;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 13px;
		color: #FF0000;
	}
	
	.v-modal .center .btns .btn-confirm{
		width: 50%;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 13px;
		color: #0087FD;
	}
	
	.v-modal .center .btns .btn-confirm-full{
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 13px;
		color: #0087FD;
	}
</style>
