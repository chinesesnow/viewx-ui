<template>
	<input id="v-input" class="v-input" :type="type" :value="value" :disabled="disabled" :placeholder="placeholder"
		:placeholder-style="placeholderStyle" :style="{border:border?'1px solid':'none',borderColor:borderColor,fontSize:fontSize+'px',
		color:disabled?'#999999':color,textAlign:textAlign,background:disabled?'#F7F7F7':'',borderRadius:radius+'px'}"
		@focus="focus" @blur="blur" @input="input"></input>
</template>

<script>
	export default {
		model: {
			prop: 'value',
			event: 'input'
		},
		props: {
			value: {
				type: [String, Number],
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
				type: [String, Number],
				default: 5
			},
			disabled: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				default: 'text'
			},
			placeholder: {
				type: String,
				default: '请输入'
			},
			placeholderStyle: {
				type: String,
				default: "font-size:13px;color:#999999"
			},
			fontSize: {
				type: [String, Number],
				default: 15
			},
			color: {
				type: String,
				default: '#000000'
			},
			textAlign: {
				type: String,
				default: 'left'
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
