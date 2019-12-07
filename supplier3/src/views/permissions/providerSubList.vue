<template>
	<div>
		<!-- 头部 -->
		<div class="top">
			<span>管理员设置</span>
		</div>
		<div class="fxssq page-content-w1 zcontnet">
			<div class="page-search">
				<div class="z-button" @click="handleEdit()">添加管理员</div>
			</div>
		</div>
		<div class="page-list">
			<table width="100%" border="0" cellspacing="1" cellpadding="0">
				<tbody id="tableDate">
					<tr>
						<th width="2%">
							<input class="checkbox" type="checkbox">
						</th>
						<th width="160px">管理员账号</th>
						<th width="250px">名称</th>
						<th width="90px">状态</th>
						<th width="100px">注册时间</th>
						<th width="180px">操作</th>
					</tr>
					<tr>
						<td><input class="checkbox" type="checkbox"></td>
						<td>1</td>
						<td>江李冬</td>
						<td>有效</td>
						<td>2019-12-06</td>
						<td>
							<span class="btn-a btn-a-detail" style="color:#fff;" @click="handleEdit()">修改</span>
							<span class="btn-a btn-a-del" style="color:#fff;">删除</span>
						</td>
					</tr>
				</tbody>

			</table>
		</div>
		<!--  -->
		<!--编辑界面-->
		<el-dialog class="xiugaizhuj1" title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<div class="flex flex-align item">
				<span>管理员：</span>
				<input type="text">
			</div>
			<div class="flex flex-align item">
				<span>角色名称：</span>
				<select name="" id="">
					<option value="">供货商</option>
					<option value="">供货商</option>
					<option value="">供货商</option>
				</select>
			</div>
			<div class="flex flex-align item">
				<span>账户号：</span>
				<input type="text">
			</div>
			<div class="flex flex-align item">
				<span>密码：</span>
				<input type="password">
			</div>
			<div class="flex flex-align item">
				<span>确认密码：</span>
				<input type="password">
			</div>
			<div class="flex flex-align item">
				<span>是否禁用：</span>
				<input name="providersubIsvalid" class="radio" type="radio">
				<label for="qiyong_y">否</label>
				<input name="providersubIsvalid" class="radio" type="radio">
				<label for="qiyong_n">是</label>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editFormVisible = false">提交</el-button>
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
				listLoading: false,
				editFormVisible:false,
				page:1,
				total:1,
			}
		},
		methods: {
			//显示编辑界面
			handleEdit: function(index) {
				this.editFormVisible = true;
				
			},
			handleCurrentChange(val) {
				this.page = val;
			
			},
		},
		mounted() {

		}
	};
</script>

<style>
	@import "../../css/permissions/providerSubList.css";
</style>
