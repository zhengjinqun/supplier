<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
			<el-col :span="10">
				<div class="tools">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<div style="height: 45px;border-bottom: 0px solid #fff;padding: 0 20px;line-height: 45px;">后台首页</div>
				<div @mouseleave="showcaidan()" @mouseover="hiddcaidan()">
					<div class="suoyougongn" :class="dongtaia == 1 ? 'suoyougongn1' : ''"><i class="el-icon-message"></i>所有功能</div>
					<div class="dongtai" :class="dongtaia == 1 ? 'dongtaia' : ''">
						<p class="closeFatherClass" @click="showcaidan()"><img src="/static/images/local.svg" alt=""></p>
						<div class="historyContent">
							<h4>最近访问
								<span style="padding-left:20px;">一键删除</span>
							</h4>
							<ul class="befor">
								<li v-for="(item,index) in list2" @click="$router.push(item.path),showcaidan()" :key="index"><span>{{item.name}}</span></li>
							</ul>
						</div>
						<div>
							<div class="allMenu collect" style="width:600px;">
								<div class="forContent">
									<div id="dl3" style="display: block;">
										<ul v-for="(item,index) in list" :key="index">
											<li class="border-bottom">
												<h5>{{item.name}}</h5>
											</li>
											<li v-for="(child,childindex) in item.children" :key="childindex" @mouseleave="ishideimg()" @mouseover="ishowimg(child.path)">
												<span @click="$router.push(child.path),showcaidan()">{{child.name}}</span>
												<img class="icon" v-if="child.path == path" src="/static/images/xingxingactive.svg" alt="">
												<!-- <img class="icon" src="/static/images/xingxing.svg" alt=""> -->
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ul class="leftcon">
					<li v-for="(item,index) in list3" @click="$router.push(item.path)" :key="index" @mouseleave="hideleftimg(index)"
					 @mouseover="showleftimg(index)">
						<span>{{item.name}}</span>
						<img v-if="leftimgshow == index" src="/static/images/detail.svg" alt="">
					</li>
				</ul>
				<!--导航菜单-->
				<!-- <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose"
				 @select="handleselect" unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu> -->
				<!--导航菜单-折叠后-->
				<!-- <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
					<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i
								 :class="item.iconCls"></i></div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;"
								 :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
							</ul>
						</template>
						<template v-else>
					<li class="el-submenu">
						<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;"
						 :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i
							 :class="item.iconCls"></i></div>
					</li>
				</template>
				</li>
				</ul> -->
			</aside>
			<div class="kuaijie">
				<ul>
					<li v-for="(item,index) in list2" :key="index">
						<span @click="$router.push(item.path),showcaidan()">{{item.name}}</span>
						<img src="/static/images/local1.svg" alt="">
					</li>
					<div style="clear:both;height: 5px;background: #f3f3f3;"></div>
				</ul>
			</div>

			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<!-- <el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col> -->
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>

		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: "店铺管理",
						children: [
							{ path: '/tgPostersSet',  name: '分销名片'},
							{ path: '/adsPicture', name: '广告图片'},
						]
					},
					{
						name: "订单管理",
						children: [
							 { path: '/userOrderList',  name: '所有订单' },
							
						]
					},
					{
						name: "会员管理",
						children: [
							 { path: '/userList',  name: '会员列表' },
							
						]
					},
					{
						name: "商品管理",
						children: [
							{ path: '/productList', name: '商品库'},
							{ path: '/productTypeList', name: '商品分类'},
							{ path: '/brandList', name: '品牌管理'},
							{ path: '/productThemeList', name: '商品主题'}
						]
					},
					{
						name: "设置",
						children: [
							{ path: '/updatePassword', name: '修改密码'},
							 { path: '/providerSubList',  name: '管理员设置' },
							 { path: '/providerRoleList', name: '权限角色设置' },
							 { path: '/providerInfo', name: '企业信息' }
						]
					},
					{
						name: "导航一",
						children: [{
								path: "/table",
								name: "table"
							},
							{
								path: "/main",
								name: "主页"
							},
							{
								path: "/form",
								name: "Form"
							},
							{
								path: "/user",
								name: "列表"
							},
							{
								path: "text",
								name: "测试"
							},
						]
					},
					{
						name: "导航二",
						children: [{
								path: "/page4",
								name: "页面4"
							},
							{
								path: "/page5",
								name: "页面5"
							},

						]
					},
					
					{
						name: "Charts",
						children: [{
							path: "/echarts",
							name: "echarts"
						}, ]
					},
				],
				list2: [{
						path: "/table",
						name: "table"
					},
					{
						path: "/main",
						name: "主页"
					},
					{
						path: "/form",
						name: "Form"
					},
					{
						path: "/user",
						name: "列表"
					},
					{
						path: "text",
						name: "测试"
					},
					{
						path: "/page4",
						name: "页面4"
					},
					{
						path: "/page5",
						name: "页面5"
					},
				],
				list3: [{
						path: "/table",
						name: "table"
					},
					{
						path: "/main",
						name: "主页"
					},
					{
						path: "/form",
						name: "Form"
					},
					{
						path: "/user",
						name: "列表"
					},
					{
						path: "text",
						name: "测试"
					},
					{
						path: "/page4",
						name: "页面4"
					},
				],
				path: "",
				leftimgshow: '-1',
				dongtaia: "0",
				sysName: 'VUEADMIN',
				collapsed: false,
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		
		methods: {
			indexshow (){
				var that = this;
				that.$router.push('/echarts');
			},
			hideleftimg() {
				this.leftimgshow = "-1";
			},
			showleftimg(index) {
				this.leftimgshow = index;
			},
			ishowimg(path) {
				// console.log(path)
				this.path = path
			},
			ishideimg() {
				// console.log(path)
				this.path = "";

			},
			showcaidan() {
				this.dongtaia = 0;

			},
			hiddcaidan() {
				this.dongtaia = 1;
				// console.log(this.dongtaia)
			},
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function(a, b) {},
			//退出登录
			logout: function() {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
			//折叠导航栏
			collapse: function() {
				this.collapsed = !this.collapsed;
			},
			showMenu(i, status) {
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
			}
		},
		created (){
			this.indexshow();
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_vars';
	@import '../css/Home.css';

	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;

		.header {
			height: 60px;
			line-height: 60px;
			background: $color-primary;
			color: #fff;

			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;

				.userinfo-inner {
					cursor: pointer;
					color: #fff;

					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}

			.logo {
				//width:230px;
				height: 60px;
				font-size: 22px;
				padding-left: 20px;
				padding-right: 20px;
				border-color: rgba(238, 241, 146, 0.3);
				border-right-width: 1px;
				border-right-style: solid;

				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}

				.txt {
					color: #fff;
				}
			}

			.logo-width {
				width: 230px;
			}

			.logo-collapse-width {
				width: 60px
			}

			.tools {
				padding: 0px 23px;
				width: 14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}

		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;

			aside {
				flex: 0 0 230px;
				width: 230px;

				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu {
					height: 100%;
				}

				.collapsed {
					width: 60px;

					.item {
						position: relative;
					}

					.submenu {
						position: absolute;
						top: 0px;
						left: 60px;
						z-index: 99999;
						height: auto;
						display: none;
					}

				}
			}

			.menu-collapsed {
				flex: 0 0 60px;
				width: 60px;
				background: #eef1f6;
			}

			.menu-expanded {
				flex: 0 0 230px;
				width: 230px;
				background: #eef1f6;
			}

			.content-container {
				// background: #f1f2f7;
				flex: 1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				margin-top: 50px;

				.breadcrumb-container {

					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}

					.breadcrumb-inner {
						float: right;
					}
				}

				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
