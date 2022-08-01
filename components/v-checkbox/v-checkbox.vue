<template>
	<view class="v-checkbox">
		<view class="drow" v-if="direction=='row'">
			<view class="checkbox" @click="checkboxClick(rindex)" v-for="(item,rindex) in checkboxsList" :key="rindex">
				<view class="icon_circle">
					<view v-if="citem==rindex" v-for="(citem,cindex) in indexs" class="box"
						:style="{background:citem==rindex?activeColor:'#FFFFFF'}"></view>
				</view>
				<text class="label" :style="{color:labelColor}" v-if="keyName==''">{{item.label}}</text>
				<text class="label" :style="{color:labelColor}" v-if="keyName!=''">{{item[keyName+'']}}</text>
			</view>
		</view>
		<view class="dcolumn" v-if="direction=='column'">
			<view class="item" :style="{justifyContent:align}" @click="checkboxClick(rindex)"
				v-for="(item,rindex) in checkboxsList" :key="rindex">
				<view class="checkbox">
					<view class="icon_circle">
						<view v-if="citem==rindex" v-for="(citem,cindex) in indexs" class="box"
							:style="{background:citem==rindex?activeColor:'#FFFFFF'}"></view>
					</view>
					<text class="label" :style="{color:labelColor}" v-if="keyName==''">{{item.label}}</text>
					<text class="label" :style="{color:labelColor}" v-if="keyName!=''">{{item[keyName+'']}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		model: {
			prop: 'indexs',
			event: 'input'
		},
		props: {
			indexs: {
				type: Array,
				default: () => {
					return []
				}
			},
			list: {
				type: Array,
				default: () => {
					return [{
							label: '选项一',
							value: 1
						},
						{
							label: '选项二',
							value: 2
						},
						{
							label: '选项三',
							value: 3
						}
					]
				}
			},
			keyName: {
				type: String,
				default: ''
			},
			direction: {
				type: String,
				default: 'row'
			},
			activeColor: {
				type: String,
				default: '#ff5500'
			},
			labelColor: {
				type: String,
				default: '#000000'
			},
			align: {
				type: String,
				default: 'flex-start'
			}
		},
		data() {
			return {
				checkedIndexs: [],
				checkboxsList: []
			}
		},
		mounted() {
			this.checkedIndexs = this.$props.indexs
			this.checkboxsList = this.$props.list
		},
		methods: {
			/**checkbox点击*/
			checkboxClick(index) {
				let exist = this.checkedIndexs.findIndex((item, cindex) => {
					return item == index
				})
				if (exist == -1) {
					this.checkedIndexs.push(index)
				} else {
					this.checkedIndexs.splice(exist, 1)
				}
				this.$emit('input', this.checkedIndexs)
				this.$emit('change', this.checkedIndexs)
			}
		}
	}
</script>

<style scoped>
	.v-checkbox {
		width: 100%;
	}

	.v-checkbox .drow {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.v-checkbox .drow .checkbox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
	}

	.v-checkbox .drow .checkbox .icon_circle {
		width: 16px;
		height: 16px;
		margin-right: 5px;
		border: 1px solid #C0C0C0;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.v-checkbox .drow .checkbox .icon_circle .box {
		width: 10px;
		height: 10px;
		background: #FFFFFF;
		transition: all 0.5s ease;
	}

	.v-checkbox .drow .checkbox .label {
		font-size: 13px;
	}

	.v-checkbox .dcolumn {
		width: 100%;
	}

	.v-checkbox .dcolumn .item {
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.v-checkbox .dcolumn .item .checkbox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.v-checkbox .dcolumn .item .checkbox .icon_circle {
		width: 16px;
		height: 16px;
		margin-right: 5px;
		border: 1px solid #C0C0C0;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.v-checkbox .dcolumn .item .checkbox .icon_circle .box {
		width: 10px;
		height: 10px;
		background: #FFFFFF;
		transition: all 0.5s ease;
	}

	.v-checkbox .dcolumn .item .checkbox .label {
		font-size: 13px;
	}
</style>
