<template>
	<view>
		<uni-card title="消息通知" v-for="item in unReadMessages">
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
			<view style="height: 15rpx;"></view>
			<view style="display: flex;float: right;">
				<button size="mini" type="primary" @click="confirmRead(item.id)">确认已读</button>
			</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				unReadMessages: null
			}
		},
		methods: {
			confirmRead(id) {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token
				uni.request({
					url: getApp().globalData.BASE_URL + '/user/confirmRead',
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
							uni.redirectTo({
								url: "/pages/unReadMessages/unReadMessages"
							})
						} else {
							uni.showToast({
								title: '已读失败',
								duration: 2000,
								icon: "none"
							});
						}
					}
				})
			},
			select() {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token
				uni.request({
					url: getApp().globalData.BASE_URL + '/user/selectMessage',
					data: {
						token: token,
						status: "未读"
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
							that.unReadMessages = response.data.messages
							if (response.data.messages.length === 0) {
								uni.showToast({
									title: "暂无未读消息",
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
