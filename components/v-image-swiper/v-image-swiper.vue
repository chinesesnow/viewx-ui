<template>
	<swiper @change="change" class="v-image-swiper" :style="{height:height+'px'}" :current="index" :autoplay="auto"
		:duration="duration" :indicator-dots="dotsShow" :interval="interval" :vertical="vertical"
		:previous-margin="previousMargin+'px'" :next-margin="nextMargin+'px'">
		<swiper-item @click="click(index)" class="v-image-swiper-item" v-for="(item,index) in list" :key="index">
			<image class="image" :style="{height:height+'px',borderRadius:radius+'px'}"
				:src="`${keyName==''?item:item[keyName+'']}`"></image>
		</swiper-item>
	</swiper>
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
			index: {
				type: [Number, String],
				default: 0
			},
			keyName: {
				type: String,
				default: ''
			},
			height: {
				type: [Number, String],
				default: 150
			},
			vertical: {
				type: Boolean,
				default: false
			},
			auto: {
				type: Boolean,
				default: true
			},
			dotsShow: {
				type: Boolean,
				default: false
			},
			interval: {
				type: [Number, String],
				default: 3000
			},
			duration: {
				type: [Number, String],
				default: 500
			},
			radius: {
				type: [Number, String],
				default: 5
			},
			previousMargin: {
				type: [Number, String],
				default: 0
			},
			nextMargin: {
				type: [Number, String],
				default: 0
			}
		},
		methods: {
			/**点击事件*/
			click(index) {
				this.$emit('click', index)
			},
			/**change事件*/
			change(e) {
				this.$emit('change', e.detail.current)
			}
		}
	}
</script>
<style scoped>
	.v-image-swiper {
		width: 100%;
	}

	.v-image-swiper .v-image-swiper-item {
		width: 100%;
		height: 100%;
	}

	.v-image-swiper .v-image-swiper-item .image {
		width: 100%;
	}
</style>
