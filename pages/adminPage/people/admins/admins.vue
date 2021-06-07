<template>
	<view>
		<button type="primary" size="mini" @click="addAdmin()">添加管理人员</button>
		<view style="height: 30rpx;"></view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">编号</uni-th>
				<uni-th align="center">姓名</uni-th>
				<uni-th align="center">联系方式</uni-th>
				<uni-th align="center">权限</uni-th>
				<uni-th align="center">操作</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="item in tableData">
				<uni-td>{{item.id}}</uni-td>
				<uni-td>{{item.username}}</uni-td>
				<uni-td>{{item.phone}}</uni-td>
				<uni-td v-if="item.power=='Max'">超级管理员</uni-td>
				<uni-td v-else>普通管理员</uni-td>
				<uni-td><button type="primary" plain="true" @click="deleteAdmin(item.id)">删除</button></uni-td>
			</uni-tr>
		</uni-table>
		</script>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tableData: null
			}
		},
		methods: {
			addAdmin(){
				uni.navigateTo({
					url:'/pages/adminPage/people/addAdmin/addAdmin'
				})
			},
			deleteAdmin(id) {
				const that = this
				uni.showModal({
					title: '删除',
					content: '确认删除吗',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({});
							var token = getApp().globalData.token
							uni.request({
								url: getApp().globalData.BASE_URL + '/superAdmin/deleteAdmin',
								data: {
									token: token,
									id: id
								},
								header: {},
								success(response) {
									console.log(response)
									uni.hideLoading()
									if (response.data.status === 444) {
										uni.showToast({
											title: '您的登录信息已过期，请重新登录',
											duration: 2000,
											icon: "none",
											success() {
												setTimeout(function() {
													uni.reLaunch({
														url: "/pages/login/login",
													})
												}, 2000)
											}
										});
									} else if (response.data.status === 445) {
										uni.showToast({
											title: '您没有此操作权限',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 1) {
										uni.showToast({
											title: '删除成功',
											duration: 2000,
											success() {
												setTimeout(function() {
													that.selectAdmins()
												}, 2000)
											}
										});
									} else {
										uni.showToast({
											title: '删除失败',
											duration: 2000,
											icon: "none"
										});
									}
								}
							})
						}
					}
				});
			},
			selectAdmins() {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token
				uni.request({
					url: getApp().globalData.BASE_URL + '/admin/selectAdmins',
					data: {
						token: token
					},
					header: {},
					success(response) {
						console.log(response)
						uni.hideLoading()
						if (response.data.status === 444) {
							uni.showToast({
								title: '您的登录信息已过期，请重新登录',
								duration: 2000,
								icon: "none",
								success() {
									setTimeout(function() {
										uni.reLaunch({
											url: "/pages/login/login",
										})
									}, 2000)
								}
							});
						} else if (response.data.status === 445) {
							uni.showToast({
								title: '您没有此操作权限',
								duration: 2000,
								icon: "none"
							});
						} else {
							that.tableData = response.data
						}
					}
				})
			},
		},
		created() {
			
		},
		onShow() {
			this.selectAdmins()
		}
	}
</script>

<style>

</style>
