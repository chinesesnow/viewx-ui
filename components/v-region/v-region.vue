<template>
	<v-popup :show="show" @close="close" @confirm="confirm">
		<picker-view class="cascade-picker-view" @change="cascadeChange" :value="indexs">
			<picker-view-column>
				<view class="item" v-for="(item,index) in list[0]" :key="index">
					<text>{{item.label}}</text>
				</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item,index) in list[1]" :key="index">
					<text>{{item.label}}</text>
				</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item,index) in list[2]" :key="index">
					<text>{{item.label}}</text>
				</view>
			</picker-view-column>
		</picker-view>
	</v-popup>
</template>

<script>
	import regions from '../v-region/regions.js'
	export default{
		model:{
			prop:'show',
			event:'input'
		},
		props:{
			show:{
				type:Boolean,
				default:false
			},
			indexs:{
				type: Array,
				default: () => {
					return [0, 0, 0]
				}
			}
		},
		data(){
			return{
				list:[[],[],[]],
				lastChangeIndexs: [], //保留上次改变的索引数组
				changeIndex: 0, //改变的列对应索引
				eventOpen: true, //change事件调用开关
				eventOpenTimer: null, //eventOpen设置的定时器
			}
		},
		mounted(){
			this.lastChangeIndexs = this.$props.indexs
			this.listInit()
		},
		methods:{
			/**级联数组初始化处理*/
			listInit() {
				let indexs = this.$props.indexs
				regions.forEach((item, index) => {
					this.list[0].push(item)
				})
				this.setColumnValues(indexs, 0)
			},
			/**设置各列的值*/
			setColumnValues(indexs = [], startIndex = 0) {
				let child
				let index = indexs
				let list = this.list
				let changeIndex = this.changeIndex
				for (let i = startIndex; i < list.length - 1; i++) {
					if (list[i].length > 0) {
						let childExist = list[i][indexs[i]] ? list[i][indexs[i]].hasOwnProperty('children') : false
						let childIndex0Exist = list[i][0] ? list[i][0].hasOwnProperty('children') : false
						if (childExist) {
							child = list[i][indexs[i]].children
						} else {
							child = childIndex0Exist ? list[i][0].children : []
							index[i] = 0
						}
						this.list[i + 1] = child && changeIndex <= i + 1 ? child : []
					} else {
						this.list[i + 1] = []
					}
				}
				this.$emit('change', index)
				this.$forceUpdate()
			},
			/**确定事件*/
			confirm(){
				let lastIndexs=this.lastChangeIndexs
				let province=regions[lastIndexs[0]].label
				let city=regions[lastIndexs[0]].children[lastIndexs[1]].label
				let area=regions[lastIndexs[0]].children[lastIndexs[1]].children[lastIndexs[2]].label
				this.$emit('confirm',{indexs:lastIndexs,values:[province,city,area]})
				this.$emit('input',false)
			},
			/**close事件*/
			close() {
				this.$emit('input',false)
				this.$emit('close')
			},
			/**级联选择器change事件 判断出哪一列改变 就重新设置该列后面所有列的值*/
			cascadeChange(e) {
				if (this.eventOpen) {
					let indexs = e.detail.value
					let lastIndexs = this.lastChangeIndexs
					for (let j = 0; j < indexs.length; j++) {
						let i = indexs[j]
						if (i !== (lastIndexs[j] || 0)) {
							this.changeIndex = j
							break
						}
					}
					this.lastChangeIndexs = indexs
					this.setColumnValues(indexs, this.changeIndex)
					this.eventOpen = false
					this.eventOpenTimer = setTimeout(() => {
						if (!this.eventOpen) {
							this.eventOpen = true
						}
					}, 200)
				}
			}
		}
	}
</script>

<style scoped>
	.cascade-picker-view {
		width: 100%;
		height: 260px;
	}
	
	.cascade-picker-view .item {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 15px;
	}
</style>