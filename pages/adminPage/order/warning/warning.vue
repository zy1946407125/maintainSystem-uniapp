<template>
	<view>
		<view>
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
				<view style="width: 10%;">起始日期</view>
				<uni-datetime-picker type="date" v-model="timestamp" return-type="timestamp" :end="defaultEndTime"
					@change="dateChange"></uni-datetime-picker>
			</view>
			<view style="height: 50rpx;"></view>
			<view class="uni-list">
				<view class="uni-list-cell" style="display: flex;flex-direction: row;">
					<view class="uni-list-cell-left">
						预警等级：
					</view>
					<view style="height: 80rpx;"></view>
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange3" :value="index3" :range="warn">
							<view class="uni-input">{{warn[index3]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view style="height: 30rpx;"></view>
			<button @click="selectOrders" type="primary">查询</button>
		</view>
		<view style="height: 50rpx;"></view>
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
					<uni-th align="center">维修人联系方式</uni-th>
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
					<uni-td>{{item.uname}}</uni-td>
					<uni-td>{{item.uphone}}</uni-td>
					<uni-td>{{item.wname}}</uni-td>
					<uni-td>{{item.wphone}}</uni-td>
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
				type: [],
				index2: 0,
				warn: ["蓝色", "黄色", "红色"],
				blueNum: null,
				yellowNum: null,
				redNum: null,
				index3: 0,
				total: 0,
				current: 1,
				pageSize: 10,
				timestamp: null,
				selectStartTime: null,
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
			bindPickerChange3: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index3 = e.target.value
			},
			dateChange(e) {
				console.log(e)
				this.selectStartTime = e
			},
			selectOrders() {
				console.log(this.type[this.index2])
				if (this.selectStartTime == null) {
					uni.showToast({
						title: "请选择起始日期",
						icon: "none"
					})
				} else {
					const that = this
					uni.showLoading({});
					var token = getApp().globalData.token
					var num1 = 0
					var num2 = 0
					if (that.warn[that.index3] === '蓝色') {
						num1 = that.blueNum
						num2 = that.yellowNum
					} else if (that.warn[that.index3] === '黄色') {
						num1 = that.yellowNum
						num2 = that.redNum
					} else if (that.warn[that.index3] === '红色') {
						num1 = that.redNum
						num2 = 0
					}
					uni.request({
						url: getApp().globalData.BASE_URL + '/admin/warning',
						data: {
							token: token,
							startTime: that.selectStartTime,
							endTime: that.defaultEndTime,
							type: that.type[that.index2],
							num1: num1,
							num2: num2,
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
				console.log(this.type[this.index2])
				if (this.selectStartTime == null) {
					uni.showToast({
						title: "请选择起始日期",
						icon: "none"
					})
				} else {
					const that = this
					uni.showLoading({
						title: "加载第" + that.current + "页"
					});
					var token = getApp().globalData.token
					var num1 = 0
					var num2 = 0
					if (that.warn[that.index3] === '蓝色') {
						num1 = that.blueNum
						num2 = that.yellowNum
					} else if (that.warn[that.index3] === '黄色') {
						num1 = that.yellowNum
						num2 = that.redNum
					} else if (that.warn[that.index3] === '红色') {
						num1 = that.redNum
						num2 = 0
					}
					uni.request({
						url: getApp().globalData.BASE_URL + '/admin/warning',
						data: {
							token: token,
							startTime: that.selectStartTime,
							endTime: that.defaultEndTime,
							type: that.type[that.index2],
							num1: num1,
							num2: num2,
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
			selectWarnNum() {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token

				uni.request({
					url: getApp().globalData.BASE_URL + '/admin/selectWarnSet',
					data: {
						token: token,
						type: this.type
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
							that.blueNum = response.data.bluenum
							that.yellowNum = response.data.yellownum
							that.redNum = response.data.rednum
						}
					}
				})

			},
		},
		created() {
			this.selectWorkType()
			this.selectWarnNum()
			this.defaultEndTime = new Date().getTime()
		}
	}
</script>

<style>

</style>
