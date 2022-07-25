<template>
	<button class="v-button" :openType="openType" :disabled="disabled" @click="click" @getuserinfo="getuserinfo"
		@getphonenumber="getphonenumber"
		:style="{width:getWidth,height:height+'px',borderRadius:borderRadius+'px',background:disabled?'#F7F7F7':background,fontSize:size+'px',color:disabled?'rgb(0,0,0,0.6)':color,opacity:isClick?0.6:1}">
		<text>{{text}}</text>
	</button>
</template>

<script>
	export default {
		props: {
			width: {
				type: [String, Number],
				default: ''
			},
			height: {
				type: [String, Number],
				default: 40
			},
			disabled: {
				type: Boolean,
				default: false
			},
			borderRadius: {
				type: [String, Number],
				default: 6
			},
			background: {
				type: String,
				default: '#ff5500'
			},
			size: {
				type: [String, Number],
				default: 13
			},
			color: {
				type: String,
				default: '#FFFFFF'
			},
			text: {
				type: String,
				default: '按钮文字'
			},
			openType: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				isClick:false,
			}
		},
		computed: {
			getWidth() {
				let width = this.$props.width
				return width == '' ? '100%!important' : width + 'px'
			}
		},
		methods: {
			/**click事件*/
			click() {
				this.isClick=true
				let timeout=setTimeout(()=>{
					this.isClick=false
					clearTimeout(timeout)
				},500)
				this.$emit('click')
			},
			/**获取用户信息 openType为getUserInfo时有效*/
			getuserinfo(res) {
				this.$emit("getuserinfo", res);
			},
			/**获取手机号码openType为getPhoneNumber时有效*/
			getphonenumber(res) {
				this.$emit("getphonenumber", res);
			},


		}
	}
</script>

<style scoped="scoped">
	.v-button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
</style>
