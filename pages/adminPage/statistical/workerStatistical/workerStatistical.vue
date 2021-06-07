<template>
	<view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">编号</uni-th>
				<uni-th align="center">姓名</uni-th>
				<uni-th align="center">维修类别</uni-th>
				<uni-th align="center">联系方式</uni-th>
				<uni-th align="center">接单数</uni-th>
				<uni-th align="center">完成数</uni-th>
				<uni-th align="center">完成率</uni-th>
				<uni-th align="center">维修速度</uni-th>
				<uni-th align="center">维修质量</uni-th>
				<uni-th align="center">维修态度</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="item in tableData">
				<uni-td>{{item.id}}</uni-td>
				<uni-td>{{item.username}}</uni-td>
				<uni-td>{{item.type}}</uni-td>
				<uni-td>{{item.phone}}</uni-td>
				<uni-td>{{item.acceptnum}}</uni-td>
				<uni-td>{{item.completenum}}</uni-td>
				<uni-td>{{item.percentage}}</uni-td>
				<uni-td v-if="item.score1==null">暂无评分</uni-td>
				<uni-td v-else>{{item.score1}}</uni-td>
				<uni-td v-if="item.score2==null">暂无评分</uni-td>
				<uni-td v-else>{{item.score2}}</uni-td>
				<uni-td v-if="item.score3==null">暂无评分</uni-td>
				<uni-td v-else>{{item.score3}}</uni-td>
			</uni-tr>
		</uni-table>
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

		},
		created() {
			const that = this
			uni.showLoading({});
			var token = getApp().globalData.token
			uni.request({
				url: getApp().globalData.BASE_URL + '/admin/workerStatistical',
				data: {
					token: token,
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
							that.tableData[i].percentage = (response.data[i].completenum * 100.0 / response.data[i]
								.acceptnum).toFixed(2) + '%'
						}
					}
				}
			})
		}
	}
</script>

<style>

</style>
