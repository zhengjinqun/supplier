<template>
	<div>
		<!-- 头部 -->
		<div class="top">
			<span>注意：企业名称填写保存之后将不能修改，请谨慎填写。</span>
		</div>
		<!-- contnet -->
		<div class="page-content-w2 wd z-input1">
			<div class="add-content">
				<dl class="add-block-li">
					<dt>帐号：</dt>
					<dd>
						<label id="accountText">admin</label>
					</dd>
				</dl>
				
				<div class="bianji-item flex flex-align" style="padding-left: 40px;">
					<span>广告图片：</span>
					<div class="item-item">
						<img class="itemimg" src="https://testimg.milaidoo.com//ads/proAds/2019/8/1565169437736.png" alt="">
						<span class="loca">x</span>
					</div>
					<div class="item-item">
						<div class="flex flex-column flex-justify flex-center left-bot2">
							<img src="/static/images/shangchuang.svg" alt="">
							<span>选择文件</span>
							<input type="file" class="z-input-sc">
						</div>
					</div>
				</div>

				<dl class="add-block-li">
					<dt>企业名称：</dt>
					<dd>
						<input name="providerCompany" type="text" id="providerCompany"  value=""><span class="shuoming">(填写后不可修改，请慎重填写)</span>
					</dd>
				</dl>
				<dl class="add-block-li">
					<dt>企业地址：</dt>
					<dd>
						<input name="providerAddress" type="text" id="providerAddress"  value=""><span class="shuoming">(选填)</span>
					</dd>
				</dl>
				<dl class="add-block-li">
					<dt>手机号：</dt>
					<dd>
						<input name="providerTel" type="text" id="providerTel"  value=""><span class="shuoming">(选填)</span>
					</dd>
				</dl>
				<dl class="add-block-li">
					<dt>服务电话：</dt>
					<dd>
						<input name="providerHotline" type="text" id="providerHotline"  value=""><span class="shuoming">(选填)</span>
					</dd>
				</dl>
				<dl class="add-block-li">
					<dt>服务微信：</dt>
					<dd>
						<input name="providerHotweixin" type="text" id="providerHotweixin"  value=""><span class="shuoming">(选填)</span>
					</dd>
				</dl>

				<dl class="add-block-li bt-step">
					<dt></dt>
					<dd>
						<span class="btMid2">
							<input type="hidden" name="providerId" id="providerId" value="1">
							<div class="z-button">保存</div>
						</span>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {


			}
		},
		methods: {

		},
		mounted() {

		}
	};
</script>

<style>
	@import "../../css/providerSet/providerInfo.css";
</style>
