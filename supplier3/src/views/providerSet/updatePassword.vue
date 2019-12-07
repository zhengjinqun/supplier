<template>
	<div>
		<!-- 头部 -->
		<div class="top">
			<span>修改密码。</span>
		</div>
		<div class="page-content-w2 add-block150 z-input">
		        <div class="add-content">
					<div class="dl-border">
			<dl class="add-block-li">
		                <dt>输入原密码：</dt>
		                <dd>
		                    <input name="providerPassword" type="password" id="providerPassword" >
		                </dd>
		            </dl>
		            <dl class="add-block-li">
		                <dt>输入新密码：</dt>
		                <dd>
		                    <input name="newpwd" type="password" id="newpwd">
		                </dd>
		            </dl>
		            <dl class="add-block-li">
		                <dt>再次输入新密码：</dt>
		                <dd>
		                    <input name="newpwd2" type="password" id="newpwd2" >
		                </dd>
		            </dl>
		            <dl class="add-block-li bt-step">
		                <dt></dt>
		                <dd>
							<div class="z-button" style="width: 304px;height: 34px;line-height: 34px;">保存</div>
		                </dd>
		            </dl>
			
					</div>
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
	@import "../../css/providerSet/updatePassword.css";
</style>