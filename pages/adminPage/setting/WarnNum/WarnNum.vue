<template>
	<view>
		<view style="display: flex;flex-direction: row;">
			<view style="width: 50rpx;"></view>
			<view>蓝色预警：</view>
			<view style="width: 50rpx;"></view>
			<uni-number-box :min="0" v-model="blueNum" />
		</view>
		<view style="display: flex;flex-direction: row;">
			<view style="width: 50rpx;"></view>
			<view>黄色预警：</view>
			<view style="width: 50rpx;"></view>
			<uni-number-box :min="0" v-model="yellowNum" />
		</view>
		<view style="display: flex;flex-direction: row;">
			<view style="width: 50rpx;"></view>
			<view>红色预警：</view>
			<view style="width: 50rpx;"></view>
			<uni-number-box :min="0" v-model="redNum" />
		</view>
		<view style="height: 200rpx;"></view>
		<button @click="setWarnNum()" type="primary">提交修改</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				blueNum: null,
				yellowNum: null,
				redNum: null
			}
		},
		methods: {
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
			setWarnNum() {
				var token = getApp().globalData.token
				const that = this;
				uni.showLoading({});
				uni.request({
					url: getApp().globalData.BASE_URL + '/admin/warnSet',
					data: {
						token: token,
						blueNum: that.blueNum,
						yellowNum: that.yellowNum,
						redNum: that.redNum
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
								title: '设置成功',
								duration: 2000,
								success() {
									setTimeout(function() {
										that.dept = null
									}, 2000)
								}
							});
						} else {
							uni.showToast({
								title: '预警天数设置失败',
								duration: 2000,
								icon: "none"
							});
						}
					}
				})
			}
		},
		created() {
			this.selectWarnNum()
		}
	}
</script>

<style>

</style>
