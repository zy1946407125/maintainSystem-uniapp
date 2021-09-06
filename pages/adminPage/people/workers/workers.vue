<template>
	<view>
		<button type="primary" size="mini" @click="addWorker()">添加维修人员</button>
		<view style="height: 30rpx;"></view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">编号</uni-th>
				<uni-th align="center">姓名</uni-th>
				<uni-th align="center">联系方式</uni-th>
				<uni-th align="center">维修类别</uni-th>
				<uni-th align="center">状态</uni-th>
				<uni-th align="center">操作</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="item in tableData">
				<uni-td>{{item.id}}</uni-td>
				<uni-td>{{item.username}}</uni-td>
				<uni-td>{{item.phone}}</uni-td>
				<uni-td>{{item.type}}</uni-td>
				<uni-td>{{item.status}}</uni-td>
				<uni-td v-if="item.status=='启用'"><button type="warn" @click="disableWorker(item.id)">禁用</button></uni-td>
				<uni-td v-if="item.status=='禁用'"><button type="primary" @click="unDisableWorker(item.id)">启用</button></uni-td>
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
			addWorker() {
				uni.navigateTo({
					url:'/pages/adminPage/people/addWorker/addWorker'
				})
			},
			disableWorker(id) {
				const that = this
				uni.showModal({
					title: '禁用',
					content: '警告：禁用该维修人员后，其下所有未完成工单将被重置为“未派单”，已完成工单将会保留。同时该账号将无法登录系统。',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({});
							var token = getApp().globalData.token
							uni.request({
								url: getApp().globalData.BASE_URL + '/superAdmin/disableWorker',
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
											title: '禁用成功',
											duration: 2000,
											success() {
												setTimeout(function() {
													that.selectWorkers()
												}, 2000)
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
			unDisableWorker(id) {
				const that = this
				uni.showModal({
					title: '启用',
					content: '确认启用吗',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({});
							var token = getApp().globalData.token
							uni.request({
								url: getApp().globalData.BASE_URL + '/superAdmin/unDisableWorker',
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
											title: '启用成功',
											duration: 2000,
											success() {
												setTimeout(function() {
													that.selectWorkers()
												}, 2000)
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
			selectWorkers() {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token
				uni.request({
					url: getApp().globalData.BASE_URL + '/admin/selectWorkers',
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
			this.selectWorkers()
		}
	}
</script>

<style>

</style>
