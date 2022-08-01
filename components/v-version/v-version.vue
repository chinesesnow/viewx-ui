<template>
	<view></view>
</template>

<script>
	/**
	 * 小程序类应用专用
	 * */
	export default {
		data() {
			return {

			}
		},
		onPageShow() {
			this.checkUpdate()
		},
		methods: {
			/**检测更新*/
			checkUpdate() {
				uni.getUpdateManager().onCheckForUpdate((res) => {
					if (res.hasUpdate) {
						uni.getUpdateManager().onUpdateReady(() => {
							uni.showModal({
								title: '版本更新提示',
								content: '应用有新的版本,请点击确定更新使用',
								showCancel: false,
								success: (res) => {
									uni.getUpdateManager().applyUpdate()
								}
							})
						})
						uni.getUpdateManager().onUpdateFailed(() => {
							uni.showModal({
								title: '版本更新提示',
								content: '检测到有新版本，但下载失败，请检查网络设置或稍后再试!',
								showCancel: false,
								success: (res) => {}
							})
						})
					}
				})
			}
		}
	}
</script>

<style>
</style>
