<template>
	<view class="v-tabbar" :style="{background:background,borderTop:border?'2upx solid #C0C0C0':'',paddingBottom:safeArea?'15px':''}">
		<view @click="tabItemClick(index)" class="v-tabbar-item" v-for="(item,index) in tabsList" :key="index" :style="{width:tabWidth}">
			<v-image :src="selectIndex==index?item.selectedIconPath:item.iconPath" width="26" height="26"></v-image>
			<view class="label" :style="{color:selectIndex==index?selectedColor:color}">{{item[tabKeyName]}}</view>
			<view class="number" :style="{background:numberTagBg}" v-if="item.number>0"><text>{{item.number}}</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			border:{
				type:Boolean,
				default:true
			},
			selectedIndex: {
				type: [String, Number],
				default: 0,
			},
			background: {
				type: String,
				default: '#FFFFFF'
			},
			numberTagBg:{
				type: String,
				default: '#FF0000'
			},
			list: {
				type: Array,
				default: () => {
					return []
				}
			},
			keyName:{
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			selectedColor: {
				type: String,
				default: '#FF0000'
			},
			safeArea:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				selectIndex:uni.getStorageSync('tabBarSelectIndex')?uni.getStorageSync('tabBarSelectIndex'):this.selectedIndex,
				tabsList:uni.getStorageSync('tabBarList')?uni.getStorageSync('tabBarList'):this.list,
				tabKeyName:uni.getStorageSync('tabBarKeyName')?uni.getStorageSync('tabBarKeyName'):this.keyName
			}
		},
		computed:{
			tabWidth(){
				uni.setStorageSync('tabBarSelectIndex',this.selectIndex)
				uni.setStorageSync('tabBarList',this.tabsList)
				uni.setStorageSync('tabBarKeyName',this.tabKeyName)
				return (100/this.list.length)+'%'
			}
		},
		methods: {
			/**tabItem点击事件*/
			tabItemClick(index) {
				uni.setStorageSync('tabBarSelectIndex',index)
				let tabs=this.tabsList
				let path=tabs[index].pagePath
				this.$emit('change', index)
				uni.redirectTo({
					url:path
				})
			}
		}
	}
</script>

<style scoped>
	.v-tabbar {
		width: 100%;
		height: 120upx;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		z-index: 6666;
	}

	.v-tabbar .v-tabbar-item {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.v-tabbar .v-tabbar-item .label {
		font-size: 20upx;
	}
	
	.v-tabbar .v-tabbar-item .number {
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 20upx;
		color: #FFFFFF;
		position: absolute;
		right: 0;
		top: 10upx;
	}
</style>
