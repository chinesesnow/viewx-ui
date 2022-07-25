<template>
	<view class="v-tab">
		<view class="tab-item" :style="{width:getTabWidth}" v-for="(item,tindex) in list" :key="tindex"
			@click="tabClick(tindex,$event)">
			<view></view>
			<view class="label" :style="{color:index==tindex?activeColor:color}">
				{{keyName==''?item:item[keyName='']}}</view>
			<view class="line" :style="{width:lineWidth,background:index==tindex?activeColor:'#FFFFFF'}"></view>
		</view>
	</view>
</template>

<script>
	export default {
		model: {
			prop: 'index',
			event: 'input'
		},
		props: {
			index: {
				type: Number,
				default: 0
			},
			list: {
				type: Array,
				default: () => {
					return []
				}
			},
			lineWidth: {
				type: String,
				default: '20%'
			},
			keyName: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#000000'
			},
			activeColor: {
				type: String,
				default: '#ff5500'
			}
		},
		computed: {
			getTabWidth() {
				let list = this.$props.list
				if (list.length == 1) {
					return '100%'
				} else if (list.length == 2) {
					return '50%'
				} else if (list.length >= 3) {
					return '25%'
				}
			}
		},
		methods: {
			/**tab点击事件*/
			tabClick(index, e) {
				this.keepView(e)
				this.$emit('input', index)
				this.$emit('change', index)
			},
			/**点击选项始终保持在可视区域内*/
			keepView(e) {
				let currLeft = e.detail.x
				let totalWidth = document.body.clientWidth
				let halfWidth = totalWidth / 2
				let tabRight = totalWidth - currLeft
				let scrollBox = document.getElementsByClassName("v-tab")
				let scrollL = scrollBox[0].scrollLeft
				if (currLeft > halfWidth || tabRight > halfWidth) {
					let distance=scrollL + (currLeft - halfWidth)
					scrollBox[0].scrollLeft=distance
				}
			}
		}
	}
</script>

<style scoped>
	.v-tab {
		width: 100%;
		white-space: nowrap;
		overflow-x: auto;
		scroll-behavior:smooth 
	}

	.v-tab::-webkit-scrollbar {
		display: none;
	}

	.v-tab .tab-item {
		height: 80upx;
		display: inline-flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.v-tab .tab-item .label {
		font-size: 26upx;
	}

	.v-tab .tab-item .line {
		height: 1px;
	}
</style>
