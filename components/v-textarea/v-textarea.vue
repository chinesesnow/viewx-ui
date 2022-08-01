<template>
	<textarea id="v-input" class="v-input" :value="value" :maxlength="maxLength" :disabled="disabled"
		:placeholder="placeholder" :placeholder-style="placeholderStyle" :style="{border:border?'1px solid':'none',borderColor:borderColor,fontSize:fontSize+'px',
		height:height+'px',color:disabled?'#999999':color,background:disabled?'#F7F7F7':'',borderRadius:radius+'px'}"
		@focus="focus" @blur="blur" @input="input"></textarea>
</template>

<script>
	export default {
		model: {
			prop: 'value',
			event: 'input'
		},
		props: {
			value: {
				value: [String, Number],
				default: ''
			},
			border: {
				type: Boolean,
				default: true
			},
			borderColor: {
				type: String,
				default: '#C8C7CC'
			},
			radius: {
				value: [String, Number],
				default: 0
			},
			disabled: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: '请输入'
			},
			placeholderStyle: {
				type: String,
				default: 'font-size:26upx;color:#999999'
			},
			fontSize: {
				type: [String, Number],
				default: 15
			},
			color: {
				type: String,
				default: '#000000'
			},
			height: {
				type: [String, Number],
				default: 150
			},
			maxLength: {
				type: [String, Number],
				default: -1
			}
		},
		computed: {},
		methods: {
			/**输入框聚焦时触发*/
			focus(e) {
				this.$emit('focus', e)
			},
			/**输入框失去焦点时触发*/
			blur(e) {
				this.$emit('blur', e)
			},
			/**正在输入时触发*/
			input(e) {
				this.$emit('input', e.detail.value)
			},
		}
	}
</script>

<style scoped>
	.v-input {
		width: calc(100% - 20px);
		padding: 5px 10px;
	}
</style>
