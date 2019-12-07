<template>
	<div>
		<div>
			<div class="z-button" @click="handleEdit()">添加品牌</div>
		</div>
		<!-- 头部 -->
		<div class="top">
			<span>对商城产品的品牌进行添加和管理，当该品牌底下有产品时，不能删除该分类，名称可以进行修改。</span>
		</div>
		<!-- 搜索 -->
		<div class="flex align-flex listprodr">
			<div class="flex flex-align">
				<span>品牌名称：</span>
				<input type="text">
				<div class="z-button">搜索</div>
			</div>
		</div>
		<!--  -->
		<div class="page-list">
			<table width="100%" border="0" cellspacing="1" cellpadding="0">
				<tbody id="tableDate">
					<tr>
						<th style="width:2%;">
							<input class="checkbox" type="checkbox">
						</th>
						<th width="100px">品牌Logo</th>
						<th width="120px">品牌名称</th>
						<th width="65px">产品数量</th>
						<th width="100px">排序</th>
						<th width="200px">操作</th>
					</tr>
					<tr id="tableTd2" >
						<td style="width:2%;">
							<input class="checkbox" type="checkbox">
						</td>
						<td><img style="width: 150px;" src="https://testimg.milaidoo.com//ads/proAds/2019/8/1565169437736.png" alt=""></td>
						<td>测试1</td>
						<td>100</td>
						<td>2</td>
						<td>
							<span class="btn-a btn-a-detail" style="color:#fff;" @click="handleEdit()">详情</span>
							<span class="btn-a btn-a-del">删除</span>
							<span class="btn-a btn-a-revise" @click="handleEdit1()">修改</span>
						</td>
					</tr>
					<tr id="tableTd2" >
						<td style="width:2%;">
							<input class="checkbox" type="checkbox">
						</td>
						<td><img style="width: 150px;" src="https://testimg.milaidoo.com//ads/proAds/2019/8/1565169437736.png" alt=""></td>
						<td>测试1</td>
						<td>100</td>
						<td>2</td>
						<td>
							<span class="btn-a btn-a-detail" style="color:#fff;" @click="handleEdit()">详情</span>
							<span class="btn-a btn-a-del">删除</span>
							<span class="btn-a btn-a-revise" @click="handleEdit1()">修改</span>
						</td>
					</tr>
					<tr id="tableTd2" >
						<td style="width:2%;">
							<input class="checkbox" type="checkbox">
						</td>
						<td><img style="width: 150px;" src="https://testimg.milaidoo.com//ads/proAds/2019/8/1565169437736.png" alt=""></td>
						<td>测试1</td>
						<td>100</td>
						<td>2</td>
						<td>
							<span class="btn-a btn-a-detail" style="color:#fff;" @click="handleEdit()">详情</span>
							<span class="btn-a btn-a-del">删除</span>
							<span class="btn-a btn-a-revise" @click="handleEdit1()">修改</span>
						</td>
					</tr>
				</tbody>

			</table>
		</div>
		<!--编辑界面-->
		<el-dialog class="axiugaizhuj" title="添加品牌" v-model="editFormVisible" :close-on-click-modal="false">
			<div class="bianji-item1">
				<span>品牌名称 : </span>
				<input type="text"></input>
				<span style="color: #929191;font-size: 12px;">（不能为空，限20字内）</span>
			</div>
			
			<div class="bianji-item1 flex flex-align">
				<span>品牌logo: </span>
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
			<div class="bianji-item1">
				
				<span style="padding-left: 60px;color:rgb(146, 145, 145);">（图片必须上传，大小不超过200K）</span>
			</div>
			<div class="bianji-item1">
				<span>品牌排序 : </span>
				<input type="text"></input>
				<span style="color: #929191;font-size: 12px;">（仅数值，数值越大，排序越靠前）</span>
			</div>
			
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editFormVisible = false">保存</el-button>
			</div>
		</el-dialog>
		<!--修改-->
		<el-dialog class="axiugaizhuj" title="修改品牌信息" v-model="editFormVisible1" :close-on-click-modal="false">
			<div class="bianji-item1  flex flex-align">
				<span class="leftwidth">品牌ID : </span>
				<span >123783 </span>
			</div>
			<div class="bianji-item1  flex flex-align">
				<span class="leftwidth">品牌名称 : </span>
				<input type="text">
			</div>
			<div class="bianji-item1 flex flex-align">
				<span class="leftwidth">品牌排序 : </span>
				<input type="text"></input>
				<span style="color: #929191;font-size: 12px;">（仅数值，数值越大，排序越靠前）</span>
			</div>
			
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible1 = false">取消</el-button>
				<el-button type="primary" @click.native="editFormVisible1 = false">确认修改</el-button>
			</div>
		</el-dialog>
		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" >批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			total:1,
			page:1,
			editFormVisible:false,
			editFormVisible1:false,
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.page = val;
			},
			//显示编辑界面
			handleEdit: function(index) {
				this.editFormVisible = true;
			},
			handleEdit1: function(index) {
				this.editFormVisible1 = true;
			},
		},
		mounted() {
			
		}
	};
</script>
<style>
	@import "../../css/brand/brandList.css";
</style>