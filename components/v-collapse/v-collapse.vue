<template>
	<view class="v-collapse">
		<view class="top" @click="collapseClick">
			<v-text :text="title" :color="color"></v-text>
			<v-icons :name="isCollapse?'arrow-up':'arrow-down'" size="23" fill="#333333"></v-icons>
		</view>
		<collapseTrans>
			<view class="bottom" v-show="isCollapse">
				<slot></slot>
			</view>
		</collapseTrans>
	</view>
</template>

<script>
	import collapseTrans from '@/uni_modules/viewx-ui/components/v-collapse/transition/collapseTransition.js'
	export default {
		components:{
			collapseTrans
		},
		props: {
			title: {
				type: String,
				default: '标题'
			},
			color: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				isCollapse: false
			}
		},
		methods: {
			collapseClick() {
				this.isCollapse = !this.isCollapse
				this.$emit('click',this.isCollapse)
			}
		}
	}
</script>

<style scoped>
	.v-collapse {
		width: 100%;
		border-bottom: 1px solid #CCCCCC;
		cursor: pointer;
	}

	.v-collapse .top {
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.v-collapse .bottom {
		padding: 0 10px 10px 10px;
		width: calc(100% - 20px);
	}
</style>
