<template>
	<view>
		<button type="primary" size="mini" @click="addDeptUser()">添加部门成员</button>
		<view style="height: 30rpx;"></view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">编号</uni-th>
				<uni-th align="center">姓名</uni-th>
				<uni-th align="center">所在部门</uni-th>
				<uni-th align="center">联系方式</uni-th>
				<uni-th align="center">状态</uni-th>
				<uni-th align="center">操作</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="item in tableData">
				<uni-td>{{item.id}}</uni-td>
				<uni-td>{{item.username}}</uni-td>
				<uni-td>{{item.dept}}</uni-td>
				<uni-td>{{item.phone}}</uni-td>
				<uni-td>{{item.status}}</uni-td>
				<uni-td v-if="item.status=='启用'"><button type="warn" @click="disableUser(item)">禁用</button></uni-td>
				<uni-td v-if="item.status=='禁用'"><button type="primary" @click="unDisableUser(item)">启用</button>
				</uni-td>
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
			addDeptUser() {
				uni.navigateTo({
					url: '/pages/managerPage/people/addDeptUser/addDeptUser'
				})
			},
			disableUser(item) {
				const that = this
				uni.showModal({
					title: '禁用',
					content: '警告：禁用该用户后，该账号将无法登录系统。',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({});
							var token = getApp().globalData.token
							uni.request({
								url: getApp().globalData.BASE_URL + '/manager/disableUser',
								data: {
									token: token,
									id: item.id
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
									} else if (response.data === 101) {
										uni.showToast({
											title: '非法禁用管理员',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 102) {
										uni.showToast({
											title: '非法禁用维修人员',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 103) {
										uni.showToast({
											title: '非法禁用部门负责人',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 104) {
										uni.showToast({
											title: '非法禁用非本系部人员',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 105) {
										uni.showToast({
											title: '非法禁用本人',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 1) {
										uni.showToast({
											title: '禁用成功',
											duration: 2000,
											success() {
												// setTimeout(function() {
												// 	that.selectWorkers()
												// }, 2000)
												item.status = "禁用"
											}
										});
									} else {
										uni.showToast({
											title: '禁用失败',
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
			unDisableUser(item) {
				const that = this
				uni.showModal({
					title: '启用',
					content: '确认启用吗',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({});
							var token = getApp().globalData.token
							uni.request({
								url: getApp().globalData.BASE_URL + '/manager/unDisableUser',
								data: {
									token: token,
									id: item.id
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
									} else if (response.data === 101) {
										uni.showToast({
											title: '非法启用管理员',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 102) {
										uni.showToast({
											title: '非法启用维修人员',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 103) {
										uni.showToast({
											title: '非法禁用部门负责人',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 104) {
										uni.showToast({
											title: '非法启用非本系部人员',
											duration: 2000,
											icon: "none"
										});
									} else if (response.data === 1) {
										uni.showToast({
											title: '启用成功',
											duration: 2000,
											success() {
												// setTimeout(function() {
												// 	that.selectWorkers()
												// }, 2000)
												item.status = "启用"
											}
										});
									} else {
										uni.showToast({
											title: '启用失败',
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
			selectDeptUsers() {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token
				uni.request({
					url: getApp().globalData.BASE_URL + '/manager/selectUsersByDept',
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
			this.selectDeptUsers()
		}
	}
</script>

<style>

</style>
