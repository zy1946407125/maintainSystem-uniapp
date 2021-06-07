<template>
	<view>
		<view>
			<modal v-if="showPop" title="工单评价" confirm-text="确定" cancel-text="取消" @cancel="cancelPop"
				@confirm="confirmPop">
				<input type='text' placeholder="请输入维修评价" v-model="comment" />
				<view style="height: 40rpx;"></view>
				<view style="display: flex;flex-direction: row;">
					维修速度：
					<uni-rate allow-half v-model="score1" :margin="15" />
				</view>
				<view style="height: 20rpx;"></view>
				<view style="display: flex;flex-direction: row;">
					维修质量：
					<uni-rate allow-half v-model="score2" :margin="15" />
				</view>
				<view style="height: 20rpx;"></view>
				<view style="display: flex;flex-direction: row;">
					维修态度：
					<uni-rate allow-half v-model="score3" :margin="15" />
				</view>
			</modal>
		</view>
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
					<uni-th align="center">维修人姓名</uni-th>
					<uni-th align="center">维修人联系方式</uni-th>
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
					<uni-td>{{item.wname}}</uni-td>
					<uni-td>{{item.wphone}}</uni-td>
					<uni-td>
						<button size="mini" :disabled="item.imgsfileids1==null||item.imgsfileids1=='[]'" type="primary"
							plain="true" @click="lookImg(item.imgsfileids1)">申报图片</button>
						<button size="mini" :disabled="item.imgsfileids2==null||item.imgsfileids2=='[]'" type="primary"
							plain="true" @click="lookImg(item.imgsfileids2)">维修图片</button>
						<button size="mini" type="primary" plain="true" @click="confirmOrder(item.id)">确认完成</button>
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
				tableData: null,
				id: null,
				showPop: false, //弹窗
				comment: null,
				score1: 3,
				score2: 3,
				score3: 3,
			}
		},
		methods: {
			confirmOrder(id) {
				this.id = id
				this.showPop = true
			},
			//弹窗
			confirmPop() { //确认
				if (this.comment == null || this.comment == "") {
					uni.showToast({
						title: "请填写维修评价",
						icon: "none"
					})
				} else {
					console.log(this.score1)
					console.log(this.score2)
					console.log(this.score3)
					const that = this
					uni.showLoading({});
					var token = getApp().globalData.token
					uni.request({
						url: getApp().globalData.BASE_URL + '/user/completeOrder',
						data: {
							token: token,
							id: that.id,
							comment: that.comment,
							score1: that.score1,
							score2: that.score2,
							score3: that.score3,
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
								that.showPop = false
								that.id = null
								that.comment = null
								that.score1 = 3
								that.score2 = 3
								that.score3 = 3
								uni.showToast({
									title: '确认成功',
									duration: 2000,
									success() {
										setTimeout(function() {
											that.selectOrders()
										}, 2000)
									}
								});
							} else {
								uni.showToast({
									title: '确认失败',
									duration: 2000,
									icon: "none"
								});
							}
						}
					})
				}
			},
			cancelPop() { //取消
				this.comment = null
				this.showPop = false
				this.score1 = 3
				this.score2 = 3
				this.score3 = 3
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
					url: getApp().globalData.BASE_URL + '/user/selectOrders',
					data: {
						token: token,
						status: '工人已完成',
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
