<template>
	<view class="v-search">
		<view class="search" :style="{borderRadius:radius+'px'}">
			<input class="input" @input="input" @focus="focus" @blur="blur" @confirm="search" :value="keyword"
				:placeholder="placeholder" />
		</view>
		<view class="label" v-if="labelShow" @click="search">搜索</view>
	</view>
</template>

<script>
	export default {
		model: {
			prop: 'keyword',
			event: 'input'
		},
		props: {
			keyword: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: '搜索关键词'
			},
			radius: {
				type: [String, Number],
				default: 20
			},
			labelShow: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			}
		},
		methods: {
			input(e) {
				this.$emit('input', e.detail.value)
			},
			focus(e) {
				this.$emit('focus', e.detail.value)
			},
			blur(e) {
				this.$emit('blur', e.detail.value)
			},
			search() {
				this.$emit('search')
			}
		}
	}
</script>

<style scoped>
	.v-search {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.v-search .search {
		width: calc(100% - 20px);
		padding: 10px 10px;
		background: #F6F6F6;
	}

	.v-search .search .input {
		width: 100%;
		border: none;
		font-size: 13px;
	}

	.v-search .label {
		width: 40px;
		text-align: right;
		font-size: 13px;
		color: #000000;
	}
</style>
