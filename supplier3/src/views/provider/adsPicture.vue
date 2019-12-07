<template>
	<div>
		<div class="z-button" @click="handleEdit()">添加广告</div>
		<!-- 头部 -->
		<div class="top">
			<span>对商城产品的广告进行添加和管理，当产品广告底下有产品时，不能删除该广告，名称可以进行修改。</span>
		</div>
		<!-- content-top -->
		<div class="conenttop flex flex-align">
			<span>广告名称：</span>
			<input class="continput" type="text">
			<span>广告位置：</span>
			<select name="" id="" class="continput continput1">
				<option value="0">0</option>
				<option value="1">1</option>
				<option value="2">2</option>
			</select>
			<div class="z-button z-button1" style="">搜索</div>
		</div>
		<!-- content -->

		<div>
			<div class="guangago">广告数 : <span style="color: red;">3</span></div>
			<div class="page-list">
				<table width="100%" border="0" cellspacing="1" cellpadding="0" id="tableDate">
					<tbody>
						<tr>
							<th width="2%">
								<input class="checkbox" type="checkbox">
							</th>
							<th width="16%">广告图片</th>
							<th width="16%">广告名称</th>
							<th width="16%">广告位置</th>
							<th width="16%">期限时间至</th>
							<th width="14%">排序</th>
							<th width="16%">操作</th>
						</tr>
						<tr v-for="(item,index) in sels" :key="index">
							<td >
								<input class="checkbox" type="checkbox">
							</td>
							<td><img style="width: 145px;" :src="item.img"></td>
							<td>{{item.name}}</td>
							<td>{{item.title}}</td>
							<td>{{item.time}}</td>
							<td>{{item.paixi}}</td>
							<td>
								<span class="btn-a  btn-a-primary" style="color:#fff;" @click="handleEdit()">修改</span>
								<span class="btn-a  btn-a-del" @click="batchRemove">删除</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!--工具条-->
			<el-col :span="24" class="toolbar">
				<el-button type="danger" :disabled="this.sels.length===0">批量删除</el-button>
				<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total"
				 style="float:right;">
				</el-pagination>
			</el-col>
		</div>
		<!--编辑界面-->
		<el-dialog class="xiugaizhuj" title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<div class="bianji-item">
				<span>广告名称 : </span>
				<input type="text"></input>
			</div>
			<div class="bianji-item">
				<span>广告分类 : </span>
				<select name="" id="">
					<option value="0"></option>
				</select>
			</div>
			<div class="bianji-item">
				<span>广告链接 : </span>
				<input type="text"></input>
			</div>
			<el-form ref="form" label-width="80px" style="margin:20px;margin-left:0;width:60%;min-width:600px;">
				<el-form-item label="活动时间">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择结束日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
			</el-form>
			<div class="bianji-item flex flex-align">
				<span>广告图片 : </span>
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
			<div class="bianji-item flex flex-align">
				<span>广告描述 : </span>
				<textarea style="" name="" id="" cols="30" rows="10">
				</textarea>
			</div>
			<div class="bianji-item">
				<span>广告排序 : </span>
				<input type="text"></input>
				<span>（仅数值，数值越大，排序越靠前）</span>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editFormVisible = false">提交</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
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
				filters: {
					name: ''
				},
				users: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [{
						name: "测试1",
						title: "首页头部广告",
						time: "2019-08-31 17:20:17",
						paixi: "11",
						img: 'https://testimg.milaidoo.com//ads/proAds/2019/8/1565169437736.png'
					},
					{
						name: "测试1",
						title: "首页头部广告",
						time: "2019-08-31 17:20:17",
						paixi: "11",
						img: 'https://testimg.milaidoo.com//ads/proAds/2019/8/1565169437736.png'
					},
					{
						name: "测试1",
						title: "首页头部广告",
						time: "2019-08-31 17:20:17",
						paixi: "11",
						img: 'https://testimg.milaidoo.com//ads/proAds/2019/8/1565169437736.png'
					},
				], //列表选中列

				editFormVisible: false, //编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				},

				addFormVisible: false, //新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}

			}
		},
		methods: {

			handleCurrentChange(val) {
				this.page = val;
			},

			//删除
			handleDel: function(index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = {
						id: row.id
					};
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function(index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd: function() {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
			},
			//编辑
			editSubmit: function() {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth),
								'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
							});
						});
					}
				});
			},
			//新增
			addSubmit: function() {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.addForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth),
								'yyyy-MM-dd');
							addUser(para).then((res) => {
								this.addLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
							});
						});
					}
				});
			},
			selsChange: function(sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function() {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = {
						ids: ids
					};
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
					});
				}).catch(() => {

				});
			}
		},
		mounted() {}
	}
</script>

<style scoped="scoped">
	@import "../../css/provider/adsPicture.css";
</style>
