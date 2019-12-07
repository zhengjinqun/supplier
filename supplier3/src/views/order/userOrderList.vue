<template>
	<div>
		<!-- 头部 -->
		<div class="top">
			<span>查看并处理会员（消费者）在微商城所下的订单，可根据订单号、下单人微信昵称、下单时间、支付方式等进行筛选查看订单。</span>
		</div>
		<!-- shousuo -->
		<div class="page-search page-search1">
			<div class="dl-border">
				<div class="z-button">导出订单</div>
				<ul class="f-c">
					<li>
						<span>收件人名称：</span>
						<input name="orderTravelers" type="text">
					</li>
					<li>
						<span>收件人电话：</span>
						<input name="orderTravelers" type="text">
					</li>
					<li>
						<span>订单号：</span>
						<input name="orderTravelers" type="text">
					</li>

					<li>
						<span>配送方式：</span>
						<select name="Logistics" id="Logistics">
							<option selected="selected" value="-1">全部</option>
							<option value="0">快递送货</option>
							<option value="1">门店自提</option>
						</select>
					</li>
					<li>
						<span>配送方式：</span>
						<select name="orderPaymethod" id="orderPaymethod">
							<option selected="selected" value="-1">全部</option>
							<option value="0">微信支付</option>
							<option value="1">货到付款</option>
							<option value="2">余额支付</option>
							<option value="3">扫码支付</option>
						</select>
					</li>
					<li>
						<el-form ref="form" label-width="80px" style="margin:0px;margin-left:0;width:60%;min-width:500px;">
							<el-form-item label="下单时间：">

								<el-col :span="11">
									<el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
								</el-col>
								<el-col class="line" :span="2">-</el-col>
								<el-col :span="11">
									<el-date-picker type="date" placeholder="选择结束日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
								</el-col>
							</el-form-item>
						</el-form>
					</li>
					<li>
						<div class="z-button " style="height:34px;width: 150px;line-height: 32px;">
							搜索</div>
						<!-- <input type="button" class="z-button" name=" " value="搜索" onclick="selectOrder()" id="btnSubmit"></span> -->
					</li>
				</ul>
			</div>
		</div>
		<!--  -->
		<div class="tabs clearfix mgt15 tabs-width order-numbers">
			<ul id="activeOrNo">
				<li class="active" id="suoyou"><span>所有订单<span id="suoyouText">(6)</span></span></li>
				<li id="daifukuan"><span >待付款<span class="daifuText" id="daifuText">(6)</span></span></li>
				<li id="daifahuo"><span >待发货<span id="daifaText">(0)</span></span></li>
				<li id="daishouhuo"><span >待收货<span id="daishouText">(0)</span></span></li>
				<li id="wanchengjiaoyi"><span>完成交易<span id="wanchengText">(0)</span></span></li>
			</ul>
		</div>
		<!--  -->
		<div class="page-count">

		</div>
		<!--  -->
		<div class="page-list">
			<table width="100%" border="0" cellspacing="1" cellpadding="0">
				<tbody id="tableDate">
					<tr>
						<th width="100px">订单号码</th>
						<th width="200px">下单时间</th>
						<th width="100px">订单金额</th>
						<th width="150px">收件人信息</th>
						<th width="100px">买家昵称</th>
						<th width="100px">当天金价</th>
						<th width="80px">订单状态</th>
						<th width="350px">操作</th>
					</tr>
					<tr style="" v-for="(item,index) in list" :key="index">
						<td>{{item.danhao}}</td>
						<td>{{item.time}}</td>
						<td>{{item.jinge}}</td>
						<td>{{item.name}}<br>{{item.phone}}</td>
						<td>{{item.username}}</td>
						<td>{{item.static}}</td>
						<td>{{item.caozuo}}</td>
						<td>
							<span @click="$router.push('/orderWSInfo')" class="btn-a btn-a-primary">订单详情</span>
							<span href="javascript:;" class="btn-a btn-a-disabled">发货</span>
						</td>
					</tr>

				</tbody>

			</table>
		</div>
		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				total: 10,
				page: "",
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				list: [{
					caozuo: "未付款",
					static: "已完成",
					username: "020-81167888",
					phone: "020-81167888",
					name: "张三",
					jinge: "344",
					danhao: "181911231729567169",
					time: "2019-11-23 17:29:56"
				},{
					caozuo: "未付款",
					static: "已完成",
					username: "020-81167888",
					phone: "020-81167888",
					name: "张三",
					jinge: "344",
					danhao: "181911231729567169",
					time: "2019-11-23 17:29:56"
				},{
					caozuo: "未付款",
					static: "已完成",
					username: "020-81167888",
					phone: "020-81167888",
					name: "张三",
					jinge: "344",
					danhao: "181911231729567169",
					time: "2019-11-23 17:29:56"
				}]

			}
		},
		methods: {
			handleCurrentChange(val) {
				this.page = val;

			},
		},
		mounted() {

		}
	};
</script>
<style scoped="scoped">
	@import "../../css/order/userOrderList.css";
</style>
