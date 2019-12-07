<template>
	<div>
		<div class="content">
			<!-- 头部 -->
			<div class="top">
				<span>设置专属商城推广海报里的推广主题和推广图片。首次设置即时生效，非首次设置则2小时后生效。</span>
				<span class="color">什么是专属商城推广海报？</span>
			</div>
			<!-- content -->
			<div class="contnet flex">
				<div class="left">
					<div class="left-item left-item1">
						<span>推广主题：</span>
						<input type="text">
						<span class="sian">（最多15个字符）</span>
					</div>
					<!--  -->
					<div class="flex flex-align left-item left-bot">
						<span>推广图片：</span>
						<div class="flex flex-column flex-justify flex-center left-bot1">
							<img src="/static/images/shangchuang.svg" alt="">
							<span>选择文件</span>
							<input type="file" class="z-input-sc">
						</div>
					</div>
					<!--  -->
					<div class="flex flex-align left-item left-bot">
						<span>上传图片：</span>
						<div class="shangc">
							<div class="sian" style="margin-bottom: 10px;">（建议尺寸：750*500，最大支持 1 MB 的图片）</div>
							<img src="https://testimg.milaidoo.com//provider/pic/2019/8/1564740492446.jpg" alt="">
							<div class="z-button" style="margin-top: 20px;">保存</div>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="dahao">示例</div>
					<div>
						<img class="shili" src="/static/images/tuiguangmobatu.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				
			}
		},
		methods: {
	
		},
		mounted() {
			
		}
	};
	
</script>

<style scoped="scoped">
	@import "../../css/provider/tgPostersSet.css";
</style>
