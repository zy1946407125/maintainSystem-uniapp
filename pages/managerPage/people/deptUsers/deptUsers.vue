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
				<uni-th align="center">操作</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="item in tableData">
				<uni-td>{{item.id}}</uni-td>
				<uni-td>{{item.username}}</uni-td>
				<uni-td>{{item.dept}}</uni-td>
				<uni-td>{{item.phone}}</uni-td>
				<uni-td><button type="primary" plain="true" @click="deleteDeptUser(item.id)">删除</button></uni-td>
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
			deleteDeptUser(id) {
				const that = this
				uni.showModal({
					title: '删除',
					content: '确认删除吗',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({});
							var token = getApp().globalData.token
							uni.request({
								url: getApp().globalData.BASE_URL + '/manager/deleteDeptUser',
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
													that.selectDeptUsers()
												}, 2000)
											}
										});
									} else if (response.data === -1) {
										uni.showToast({
											title: '该用户存在工单，无法删除',
											duration: 2000,
											icon: "none"
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
