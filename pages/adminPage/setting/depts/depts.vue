<template>
	<view>
		<view style="display: flex;flex-direction: row;">
			<uni-easyinput v-model="dept" placeholder="请输入部门名称"></uni-easyinput>
			<button type="primary" size="mini" @click="addDept()">添加</button>
		</view>
		<view style="height: 30rpx;"></view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">部门名称</uni-th>
				<uni-th align="center">创建时间</uni-th>
				<uni-th align="center">创建人</uni-th>
				<uni-th align="center">操作</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="item in tableData">
				<uni-td>{{item.dept}}</uni-td>
				<uni-td>{{item.createtime}}</uni-td>
				<uni-td>{{item.createname}}</uni-td>
				<uni-td><button type="primary" plain="true" @click="deleteDept(item.dept)">删除</button></uni-td>
			</uni-tr>
		</uni-table>
		</script>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tableData: null,
				dept: null
			}
		},
		methods: {
			addDept() {
				if (this.dept == "" || this.dept == null) {
					uni.showToast({
						title: "请输入部门名称",
						duration: 2000,
						icon: "none"
					})
				} else {
					var token = getApp().globalData.token
					const that = this;
					uni.showLoading({});

					uni.request({
						url: getApp().globalData.BASE_URL + '/superAdmin/addDept',
						data: {
							token: token,
							dept: this.dept
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
									title: '添加成功',
									duration: 2000,
									success() {
										setTimeout(function() {
											that.dept = null
											that.selectDepts()
										}, 2000)
									}
								});
							} else {
								uni.showToast({
									title: '添加失败',
									duration: 2000,
									icon: "none"
								});
							}

						}
					})

				}
			},
			deleteDept(dept) {
				const that = this
				uni.showModal({
					title: '删除',
					content: '确认删除吗',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({});
							var token = getApp().globalData.token
							uni.request({
								url: getApp().globalData.BASE_URL + '/superAdmin/deleteDept',
								data: {
									token: token,
									dept:dept
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
													that.selectDepts()
												}, 2000)
											}
										});
									} else if (response.data === -1) {
										uni.showToast({
											title: '该部门已有用户，无法删除',
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
			selectDepts() {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token
				uni.request({
					url: getApp().globalData.BASE_URL + '/user/selectDept',
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
			this.selectDepts()
		}
	}
</script>

<style>

</style>
