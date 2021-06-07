<template>
	<view>
		<uni-card title="消息通知" v-for="item in historyMessages">
			<view>
				发信人：{{item.sname}}
			</view>
			<view style="height: 10rpx;"></view>
			<view>
				发信时间：{{item.time}}
			</view>
			<view style="height: 10rpx;"></view>
			<view>
				消息内容：{{item.content}}
			</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyMessages: null
			}
		},
		methods: {
			select() {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token
				uni.request({
					url: getApp().globalData.BASE_URL + '/user/selectMessage',
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
							that.historyMessages = response.data.messages
							if (response.data.messages.length === 0) {
								uni.showToast({
									title: "暂无消息",
									icon: "none"
								})
							}
						}
					}
				})
			}
		},
		created() {
			this.select()
		}
	}
</script>

<style>

</style>
