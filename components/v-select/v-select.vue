<template>
	<view>
		<block v-if="type=='normal'">
			<picker :range="list" :range-key="keyName" :value="value" :mode="mode" :fields="fields" :start="start" :end="end" @change="change" @cancel="cancel">
				<view class="label" :style="{fontSize:labelSize+'px',color:labelColor,padding:labelPadding}">{{text}}</view>
			</picker>
		</block>
		<block v-if="type=='cascade'">
			<view class="label" @click="selectShow=true" :style="{fontSize:labelSize+'px',color:labelColor,padding:labelPadding}">{{text}}</view>
		</block>
		<v-popup :show="selectShow" @close="casecadeClose" @confirm="cascadeConfirm">
			<picker-view class="cascade-picker-view" @change="cascadeChange" :value="indexs">
				<picker-view-column>
					<view class="item" v-for="(item,index) in cascadeList[0]" :key="index">
						<text>{{item[keyName+'']}}</text>
					</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in cascadeList[1]" :key="index">
						<text>{{item[keyName+'']}}</text>
					</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in cascadeList[2]" :key="index">
						<text>{{item[keyName+'']}}</text>
					</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in cascadeList[3]" :key="index">
						<text>{{item[keyName+'']}}</text>
					</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in cascadeList[4]" :key="index">
						<text>{{item[keyName+'']}}</text>
					</view>
				</picker-view-column>
			</picker-view>
		</v-popup>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => {
					return []
				}
			},
			text: {
				type: String,
				default: '点击选择'
			},
			keyName: {
				type: String,
				default: ''
			},
			mode: {
				type: String,
				default: 'selector'
			},
			type: {
				type: String,
				default: 'normal'
			},
			value: {
				type: [String, Number,Array],
				default: 0
			},
			indexs: {
				type: Array,
				default: () => {
					return [0, 0, 0, 0, 0]
				}
			},
			fields:{
				type: String,
				default: 'day'
			},
			start:{
				type: String,
				default: ''
			},
			end:{
				type: String,
				default: ''
			},
			labelSize: {
				type: [String, Number],
				default: 13
			},
			labelColor: {
				type: String,
				default: '#000000'
			},
			labelPadding:{
				type: String,
				default: '0px 0px 0px 0px'
			}
		},
		data() {
			return {
				selectShow: false, //级联选择器是否显示
				cascadeList: [
					[],
					[],
					[],
					[],
					[]
				], //所有列的值
				lastChangeIndexs: [], //保留上次改变的索引数组
				changeIndex: 0, //改变的列对应索引
				eventOpen: true, //change事件调用开关
				eventOpenTimer: null, //eventOpen设置的定时器
			}
		},
		mounted() {
			this.lastChangeIndexs = this.$props.indexs
			if(this.type=='cascade'){
				this.listInit()
			}
		},
		beforeDestroy() {
			this.eventOpenTimer=null
		},
		methods: {
			/**级联数组初始化处理*/
			listInit() {
				let indexs = this.$props.indexs
				let list = this.$props.list
				let type = this.$props.type
				if (type == 'cascade' && list.length > 0) {
					list.forEach((item, index) => {
						this.cascadeList[0].push(item)
					})
				}
				this.setColumnValues(indexs, 0)
			},
			/**设置各列的值*/
			setColumnValues(indexs = [], startIndex = 0) {
				let child
				let index = indexs
				let list = this.cascadeList
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
						this.cascadeList[i + 1] = child && changeIndex <= i + 1 ? child : []
					} else {
						this.cascadeList[i + 1] = []
					}
				}
				this.$emit('change', index)
				this.$forceUpdate()
			},
			/**普通选择器change事件*/
			change(e) {
				this.$emit('change', e.detail.value)
			},
			/**普通选择器cancel事件*/
			cancel() {
				this.$emit('cancel')
			},
			/**级联选择时close事件*/
			casecadeClose(){
				this.$emit('cancel')
				this.selectShow=false
			},
			/**级联选择器confirm事件*/
			cascadeConfirm(){
				this.$emit('confirm',this.lastChangeIndexs)
				this.selectShow=false
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
		height: 300px;
	}

	.cascade-picker-view .item {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 15px;
	}
</style>
