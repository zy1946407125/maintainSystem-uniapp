<template>
	<view>
		<view>
			<view class="uni-list">
				<view class="uni-list-cell" style="display: flex;flex-direction: row;">
					<view class="uni-list-cell-left">
						工单状态：
					</view>
					<view style="height: 80rpx;"></view>
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange1" :value="index1" :range="status">
							<view class="uni-input">{{status[index1]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" style="display: flex;flex-direction: row;">
					<view class="uni-list-cell-left">
						维修类别：
					</view>
					<view style="height: 80rpx;"></view>
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange2" :value="index2" :range="type">
							<view class="uni-input">{{type[index2]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view style="display: flex;flex-direction: row;">
				<view style="width: 10%;">起止日期</view>
				<uni-datetime-picker type="daterange" v-model="timestamp" return-type="timestamp" :end="defaultEndTime"
					@change="dateChange"></uni-datetime-picker>
			</view>
			<view style="height: 50rpx;"></view>
			<button @click="selectOrders" type="primary">查询</button>
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
					<uni-th align="center">工人申请退单理由</uni-th>
					<uni-th align="center">管理员拒绝退单理由</uni-th>
					<uni-th align="center">维修耗材</uni-th>
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
					<uni-td v-if="item.wname=='不可用'">暂未派单</uni-td>
					<uni-td v-else>{{item.wname}}</uni-td>
					<uni-td v-if="item.wphone=='0'">暂未派单</uni-td>
					<uni-td v-else>{{item.wphone}}</uni-td>
					<uni-td v-if="item.workerreason==null"></uni-td>
					<uni-td v-else>{{item.workerreason}}</uni-td>
					<uni-td v-if="item.adminreason==null"></uni-td>
					<uni-td v-else>{{item.adminreason}}</uni-td>
					<uni-td v-if="item.consumable==null"></uni-td>
					<uni-td v-else>{{item.consumable}}</uni-td>
					<uni-td>
						<button size="mini" :disabled="item.imgsfileids1==null||item.imgsfileids1=='[]'" type="primary"
							plain="true" @click="lookImg(item.imgsfileids1)">查看申报图片</button>
						<button size="mini" :disabled="item.imgsfileids2==null||item.imgsfileids2=='[]'" type="primary"
							plain="true" @click="lookImg(item.imgsfileids2)">查看维修图片</button>
						<button size="mini" :disabled="item.status!='未派单'" type="primary" plain="true"
							@click="cancelOrder(item.id)">撤单</button>
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
				index1: 0,
				status: ["全部状态", "未派单", "用户已撤单", "管理员已撤单", "管理员已派单", "工人申请退单", "工人已退单", "工人已接单", "工人已完成", "已完成"],
				type: [],
				index2: 0,
				total: 0,
				current: 1,
				pageSize: 10,
				timestamp: null,
				selectStartTime: null,
				selectEndTime: null,
				defaultStartTime: null,
				defaultEndTime: null,
				tableData: null
			}
		},
		onReachBottom() {
			console.log("触底")
			if (this.total / this.pageSize > this.current) {
				this.current = this.current + 1
				this.selectOrders2()
			} else {
				uni.showToast({
					title: "没有更多了",
					icon: "none"
				})
			}
		},
		methods: {
			change(e) {
				console.log(e)
				this.currentIndex = e.current
				this.selectOrders2()
			},
			cancelOrder(id){
				const that = this
				uni.showModal({
					title: "撤单",
					content: "确认撤销该工单吗",
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({});
							var token = getApp().globalData.token
							uni.request({
								url: getApp().globalData.BASE_URL + '/user/removeOrder',
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
			bindPickerChange1: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index1 = e.target.value
			},
			bindPickerChange2: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index2 = e.target.value
			},
			dateChange(e) {
				console.log(e)
				this.selectStartTime = e[0]
				this.selectEndTime = e[1] + 86400000 - 1
				console.log(this.selectStartTime)
				console.log(this.selectEndTime)
			},
			selectOrders() {
				console.log(this.status[this.index1])
				console.log(this.type[this.index2])
				if (this.selectStartTime == null || this.selectEndTime == null) {
					uni.showToast({
						title: "请选择起止日期",
						icon: "none"
					})
				} else {
					const that = this
					uni.showLoading({});
					var token = getApp().globalData.token
					uni.request({
						url: getApp().globalData.BASE_URL + '/user/selectOrders',
						data: {
							token: token,
							status: that.status[that.index1],
							type: that.type[that.index2],
							startTime: that.selectStartTime,
							endTime: that.selectEndTime,
							pageNum: 1,
							pageSize: that.pageSize
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
								that.total = response.data.total
								that.current = 1
							}
						}
					})
				}

			},
			selectOrders2() {
				console.log(this.status[this.index1])
				console.log(this.type[this.index2])
				if (this.selectStartTime == null || this.selectEndTime == null) {
					uni.showToast({
						title: "请选择起止日期",
						icon: "none"
					})
				} else {
					const that = this
					uni.showLoading({
						title: "加载第" + that.current + "页"
					});
					var token = getApp().globalData.token
					uni.request({
						url: getApp().globalData.BASE_URL + '/user/selectOrders',
						data: {
							token: token,
							status: that.status[that.index1],
							type: that.type[that.index2],
							startTime: that.selectStartTime,
							endTime: that.selectEndTime,
							pageNum: that.current,
							pageSize: that.pageSize
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
								// that.tableData = response.data.orders
								that.tableData = [...that.tableData, ...response.data.orders]
								that.total = response.data.total
							}
						}
					})
				}

			},
			selectWorkType() {
				const token = getApp().globalData.token;
				const that = this;
				uni.showLoading({});
				uni.request({
					url: getApp().globalData.BASE_URL + '/user/selectWorkType',
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
							that.type.push("全部类别")
							for (let i = 0; i < response.data.length; i++) {
								that.type.push(response.data[i].type)
							}
						}
					}
				})
			},
		},
		created() {
			this.selectWorkType()
			this.defaultEndTime = new Date(new Date().toLocaleDateString()).getTime()
			this.selectEndTime = this.defaultEndTime + 86400000 - 1
		}
	}
</script>

<style>

</style>
