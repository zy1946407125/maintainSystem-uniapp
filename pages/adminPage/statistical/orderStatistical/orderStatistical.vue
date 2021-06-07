<template>
	<view>
		<view>
			<view style="display: flex;flex-direction: row;">
				<view style="width: 10%;">起止日期</view>
				<uni-datetime-picker type="daterange" v-model="timestamp" return-type="timestamp" :end="defaultEndTime"
					@change="dateChange"></uni-datetime-picker>
			</view>
			<view style="height: 50rpx;"></view>
			<button @click="select" type="primary">查询</button>
		</view>
		<view style="height: 50rpx;"></view>
		<view>
			<uni-table border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th align="center">维修类别</uni-th>
					<uni-th align="center">申报数</uni-th>
					<uni-th align="center">完成数</uni-th>
					<uni-th align="center">完成率</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr v-for="item in tableData">
					<uni-td>{{item.type}}</uni-td>
					<uni-td>{{item.acceptnum}}</uni-td>
					<uni-td>{{item.completenum}}</uni-td>
					<uni-td>{{item.percentage}}</uni-td>
				</uni-tr>
			</uni-table>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timestamp: null,
				selectStartTime: null,
				selectEndTime: null,
				defaultStartTime: null,
				defaultEndTime: null,
				tableData: null
			}
		},
		methods: {
			select() {
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
						url: getApp().globalData.BASE_URL + '/admin/orderStatistical',
						data: {
							token: token,
							startTime: that.selectStartTime,
							endTime: that.selectEndTime,
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
								for (var i = 0; i < response.data.length; i++) {
									that.tableData[i].percentage = (response.data[i].completenum * 100.0 / response
										.data[i].acceptnum).toFixed(2) + '%'
								}
							}
						}
					})
				}
			},
			dateChange(e) {
				console.log(e)
				this.selectStartTime = e[0]
				this.selectEndTime = e[1] + 86400000 - 1
				console.log(this.selectStartTime)
				console.log(this.selectEndTime)
			},
		},
		created() {
			this.defaultEndTime = new Date(new Date().toLocaleDateString()).getTime()
			this.selectEndTime = this.defaultEndTime + 86400000 - 1
		}
	}
</script>

<style>

</style>
