<template>
	<div>
		<!-- 头部 -->
		<div class="top">
			<span>订单详情。</span>
		</div>
		<div class="page-content-w2 add-block150">
			<div class="add-content">
				<!--=====订单信息===-->
				<div class="dl-border">
					<h4>订单详情</h4>
					<dl>
						<dt>订单号：</dt>
						<dd>
							<span id="ContentPlaceHolder1_ordernumber">181911231729567169</span>
						</dd>
					</dl>
					<dl>
						<dt>订单状态：</dt>
						<dd>
							<span id="ContentPlaceHolder1_orderstatus">未付款</span>
						</dd>
					</dl>
					<!--===微信支付新订单 订单状态-->
					<dl class="marginT10">
						<dt>支付方式：</dt>
						<dd>
							<span id="ContentPlaceHolder1_payway">微信支付</span>
						</dd>
					</dl>
					<!--========微信支付新订单end-->
					<dl>
						<dt>物流方式：</dt>
						<dd>
							<span id="ContentPlaceHolder1_payprice">快递送货</span>
						</dd>
					</dl>
					<dl>
						<dt>发货单号：</dt>
						<dd>
							<span id="ContentPlaceHolder1_expressnumber"></span></dd>
					</dl>
					<!--与上面内容隔开一段距离 marginT10是距离上面10px -->
					<dl id="shouhuoInfo" style="">
						<dt>收货信息：</dt>
						<dd id="shouhuoInfo">
							<span id="ContentPlaceHolder1_consignee">收件人：张三</span><br>
							<span id="ContentPlaceHolder1_mobile">联系电话：020-81167888</span><br>
							<span id="ContentPlaceHolder1_address">地址：广东省-广州市-海珠区-新港中路397号</span>
						</dd>
						<span style="color: blue">复制</span>
					</dl>
					<dl style="margin-left: 47px;">
						<dt>会员ID/姓名/手机/微信昵称：</dt>
						<dd id="userInfo">
						</dd>
					</dl>
					<dl>
						<dt>买家留言：</dt>
						<dd>
							<span id="ContentPlaceHolder1_postcode">联系电话：</span>
						</dd>
					</dl>
				</div>


				<!--==商品详情=======-->
				<div class="page-list">
					<table width="100%" border="0" cellspacing="1" cellpadding="0">
						<tbody id="tableDate">
							<tr>
								<th>商品</th>
								<th>商品名称</th>
								<th>商品属性</th>
								<th>商品数量</th>
								<th>商品单价</th>
								<th>商品总价</th>
								<th>交易状态</th>
							</tr>

							<tr>
								<td><img src="https://testimg.milaidoo.com//productImg/2019/8/1565099401468_m.jpg" style="width: 130px;height: 130px"></td>
								<td>积分测试产品2</td>
								<td></td>
								<td>1</td>
								<td>344</td>
								<td>NaN</td>
								<td>未付款</td>
							</tr>
							<tr></tr>
						</tbody>
					</table>
					<div class="clearfix">
						<ul class="order-statistics fr">
							<li class="formitems">
								<label class="fi-name">商品小计：</label>
								<span class="form-controls" id="xiaoji">¥344</span>
							</li>
							<li class="formitems">
								<label class="fi-name">运费：</label>
								<span class="form-controls" id="yunfei">¥0</span>
							</li>
							<li class="formitems">
								<label class="fi-name">实际支付：</label>
								<span class="form-controls realPrice" id="shifu">¥344</span>
							</li>
							<li class="txtCenter">
								<span class="btn-a btn-a-primary" id="j-order-deliver">确定</span>
							</li>
						</ul>
					</div>
				</div>
				<!--======商品详情end======-->
				<!--有输入框的 dl加 class="add-block-li" 纯文字的不用加-->
				<div class="bottomshow">
					<dl class="add-block-li" id="sendCom">
						<dt>配送公司：</dt>
						<dd>
							<select id="expressCompany" name="expressCompany">
								<option value="SF">顺丰快递</option>
								<option value="YTO">圆通快递</option>
								<option value="ZTO">中通快递</option>
								<option value="STO">申通快递</option>
								<option value="YD">韵达快运</option>
								<option value="JYM">加运美快运</option>
								<option value="HTKY">百世汇通</option>
								<option value="EMS">EMS</option>
								<option value="HHTT">天天快递</option>
								<option value="LHT">联昊通速递</option>
								<option value="FAST">快捷速递</option>
							</select>
							<!-- <input type="text" size="20" maxlength="20" class="inta" id="expressCompany" name="expressCompany"/><span class="shuoming">(快递公司名称)</span> -->
						</dd>
					</dl>
					<dl class="add-block-li" id="fahuoNum">
						<dt>发货单号：</dt>
						<dd>
							<input type="text" maxlength="20" class="inta" id="expressNumber" name="expressNumber"><span class="shuoming">(快递单号)</span>
						</dd>
					</dl>
					<!---->
					<dl class="add-block-li bt-step">
						<dt></dt>
						<dd id="dibuBut">
							<input type="" value="6" id="orderId" name="orderId">
						</dd>
					</dl>
					<!---->
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

	}
</script>

<style>
	@import "../../css/order/orderWSInfo.css";
</style>
