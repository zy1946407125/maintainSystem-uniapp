<template>
	<view>
		<view>
			<uni-table border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th align="center">编号</uni-th>
					<uni-th align="center">维修类别</uni-th>
					<uni-th align="center">维修原因</uni-th>
					<uni-th align="center">维修地址</uni-th>
					<uni-th align="center">提交时间</uni-th>
					<uni-th align="center">更新时间</uni-th>
					<uni-th align="center">当前状态</uni-th>
					<uni-th align="center">提交人姓名</uni-th>
					<uni-th align="center">提交人联系方式</uni-th>
					<uni-th align="center">操作</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr v-for="item in tableData">
					<uni-td>{{item.id}}</uni-td>
					<uni-td>{{item.type}}</uni-td>
					<uni-td>{{item.reason}}</uni-td>
					<uni-td>{{item.address}}</uni-td>
					<uni-td>{{item.starttime}}</uni-td>
					<uni-td>{{item.updatetime}}</uni-td>
					<uni-td>{{item.status}}</uni-td>
					<uni-td>{{item.uname}}</uni-td>
					<uni-td>{{item.uphone}}</uni-td>
					<uni-td>
						<button size="mini" :disabled="item.imgsfileids1==null||item.imgsfileids1=='[]'" type="primary"
							plain="true" @click="lookImg(item.imgsfileids1)">查看申报图片</button>
						<button size="mini" type="primary" plain="true" @click="sendOrder(item.id)">派单</button>
						<button size="mini" type="primary" plain="true" @click="cancelOrder(item.id)">撤单</button>
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
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
			sendOrder(id) {
				uni.navigateTo({
					url: "/pages/adminPage/order/chooseWorker/chooseWorker?id=" + id
				})
			},
			cancelOrder(id) {
				const that = this
				uni.showModal({
					title: "撤单",
					content: "确认撤销该工单吗",
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({});
							var token = getApp().globalData.token
							uni.request({
								url: getApp().globalData.BASE_URL + '/admin/removeOrder',
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
											title: '撤单成功',
											duration: 2000,
											success() {
												setTimeout(function() {
													that.selectOrders()
												}, 2000)
											}
										});
									} else {
										uni.showToast({
											title: '撤单失败',
											duration: 2000,
											icon: "none"
										});
									}
								}
							})
						}
					}
				})
			},
			lookImg(imgs) {
				console.log(imgs)
				imgs = JSON.parse(imgs)
				for (var i = 0; i < imgs.length; i++) {
					imgs[i] = (getApp().globalData.BASE_URL + "/upload/" + imgs[i]).replace(/[\r\n]/g, "")
				}
				console.log(imgs)
				uni.previewImage({
					urls: imgs,
				});
			},
			selectOrders() {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token
				uni.request({
					url: getApp().globalData.BASE_URL + '/admin/selectOrders',
					data: {
						token: token,
						status: '未派单',
						type: '全部类别',
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
							that.tableData = response.data.orders
						}
					}
				})

			},
		},
		created() {
			
		},
		onShow() {
			this.selectOrders()
		}
	}
</script>

<style>

</style>
