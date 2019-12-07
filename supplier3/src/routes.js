import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import text from './views/nav1/text.vue'
import tgPostersSet from './views/provider/tgPostersSet.vue'
import adsPicture from './views/provider/adsPicture.vue'
import updatePassword from './views/providerSet/updatePassword.vue'
import productList from './views/product/productList.vue'
import productTypeList from './views/product/productTypeList.vue'
import brandList from './views/brand/brandList.vue'
import productThemeList from './views/product/productThemeList.vue'
import userOrderList from './views/order/userOrderList.vue'
import userList from './views/user/userList.vue'
import providerSubList from './views/permissions/providerSubList.vue'
import providerRoleList from './views/role/providerRoleList.vue'
import providerInfo from './views/providerSet/providerInfo.vue'
import orderWSInfo from './views/order/orderWSInfo.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
			{ path: '/text', component: text, name: '测试' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '店铺管理',
        iconCls: 'fa fa-address-card',
        //leaf: true,//只有一个节点
        children: [
			{ path: '/tgPostersSet', component: tgPostersSet, name: '分销名片'},
			{ path: '/adsPicture', component: adsPicture, name: '广告图片',}
			
        ]
    },
	{
	    path: '/',
	    component: Home,
	    name: '商品管理',
	    iconCls: 'fa fa-address-card',
	    children: [
	       { path: '/productList', component: productList, name: '商品库'},
	       { path: '/productTypeList', component: productTypeList, name: '商品分类'},
	       { path: '/brandList', component: brandList, name: '品牌管理'},
	       { path: '/productThemeList', component: productThemeList, name: '商品主题'}
			
	    ]
	},
	{
	    path: '/',
	    component: Home,
	    name: '订单管理',
	    iconCls: 'fa fa-address-card',
	    children: [
	        { path: '/userOrderList', component: userOrderList, name: '所有订单'},
			{ path: '/orderWSInfo', component: orderWSInfo, name: '订单详情' },

			
	    ]
	},
	{
	    path: '/',
	    component: Home,
	    name: '会员管理',
	    iconCls: 'fa fa-address-card',
	    children: [
	        { path: '/userList', component: userList, name: '会员管理' },
			
	    ]
	},
	{
	    path: '/',
	    component: Home,
	    name: '设置',
	    children: [
			{ path: '/updatePassword', component: updatePassword, name: '修改密码'},
	        { path: '/providerSubList', component: providerSubList, name: '管理员设置' },
			{ path: '/providerRoleList', component: providerRoleList, name: '权限角色设置' },
			{ path: '/providerInfo', component: providerInfo, name: '企业信息' }
	    ]
	},
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;