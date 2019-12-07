<template>
	<div class="display_flex">
		<div class="leftColumn">
			<div class="center leftTitle font_size_14" v-for="(item, index) in column" :key="index" :class="isActive == index? 'choosed': ''"
			 @click="onLeftClick(index)">{{item.title}}</div>
		</div>
		<div class="rightColumn" v-if="isActive == 0">
			<div>标题一的内容</div>
		</div>
		<div class="rightColumn" v-if="isActive == 1">
			<div>标题二的内容</div>
		</div>
		<div class="rightColumn" v-if="isActive == 2">
			<div>标题三的内容</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				column: [{
						title: '标题一'
					},
					{
						title: '标题二'
					},
					{
						title: '标题三'
					}
				],
				isActive: 0
			}
		},
		methods: {
			onLeftClick(index) {
				this.isActive = index
			}
		}
	}
</script>

<style>
	.leftColumn {
		width: 150rpx;
	}

	.leftTitle {
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		border-bottom: 2rpx solid #F4F4F4;
	}

	.rightColumn {
		width: calc(100% - 180rpx);
	}

	.choosed {
		color: #0066CC !important;
	}
</style>
