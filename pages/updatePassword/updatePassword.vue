<template>
	<view>
		<view>
			<uni-forms ref="form" :value="formData" :rules="rules">

				<uni-forms-item label="编号" name="id">
					<uni-easyinput disabled v-model="formData.id" :clearable="false"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="手机号" name="phone">
					<uni-easyinput disabled v-model="formData.phone" :clearable="false"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="新密码" name="password1">
					<uni-easyinput type="password"  v-model="formData.password1" :clearable="false">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="确认密码" name="password2">
					<uni-easyinput type="password"  v-model="formData.password2" :clearable="false">
					</uni-easyinput>
				</uni-forms-item>
				<view style="display: flex;flex-direction: row;">
					<uni-forms-item label="验证码" name="code">
						<uni-easyinput type="number" v-model="formData.code" placeholder="请输入验证码" />
					</uni-forms-item>
					<view class="btn" @click="getCaptcha">
						<text>{{time==0? captchaText: time+"s后重新获取"}}</text>
					</view>
				</view>
				<button @click="submit" type="primary">更新</button>
			</uni-forms>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: 0,
				captchaText: '获取验证码',
				formData: {
					id: '',
					phone: '',
					password1: '',
					password2: '',
					code: '',
				},
				rules: {
					password1: {
						rules: [{
							required: true,
							errorMessage: '请输入新密码',
						}, ]
					},
					password2: {
						rules: [{
							required: true,
							errorMessage: '请再次输入密码',
						}, ]
					},
					code: {
						rules: [{
							required: true,
							errorMessage: '请输入姓名',
						}]
					}
				}
			}
		},
		methods: {
			submit() {
				this.$refs.form.submit().then(res => {

					if (this.formData.password1 !== this.formData.password2) {
						uni.showToast({
							title: "密码不一致",
							icon: "none"
						})
					} else {
						const that = this
						uni.showLoading({});
						let password = that.formData.password2
						let code = res.code
						const token = getApp().globalData.token;

						uni.request({
							url: getApp().globalData.BASE_URL + '/user/changePassword',
							data: {
								token: token,
								password: password,
								code: code
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
									console.log("清空用户缓存信息")
									try {
									    uni.removeStorageSync('user');
									} catch (e) {
									    // error
										console.log("清空用户信息失败")
									}
									try {
									    uni.removeStorageSync('typeIndex');
									} catch (e) {
									    // error
										console.log("清空用户类别失败")
									}
									uni.showToast({
										title: '修改成功',
										duration: 2000,
										success() {
											setTimeout(function() {
												uni.reLaunch({
													url: "/pages/login/login",
												})
											}, 2000)
										}
									});
								} else if (response.data === 2) {
									uni.showToast({
										title: '验证码错误',
										duration: 2000,
										icon: "none"
									});
								} else {
									uni.showToast({
										title: '修改失败',
										duration: 2000,
										icon: "none"
									});
								}
							}
						})
					}

				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			getCaptcha() {
				if (this.time != 0) {
					uni.showToast({
						title: '请' + this.time + 's后再重新获取',
						icon: 'none'
					})
					return false
				}

				if (this.formData.phone === '' || this.formData.phone === null) {
					uni.showToast({
						title: "请输入新手机号",
						icon: "none"
					})
				} else {
					const that = this
					uni.showLoading({});
					let phone = that.formData.phone
					const token = getApp().globalData.token;
					uni.request({
						url: getApp().globalData.BASE_URL + '/sendCode',
						data: {
							token: token,
							phone: phone
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
									title: '发送成功',
									duration: 2000,
								});
								that.captchaText = '重新获取'
								that.time = 60
								const fn = setInterval(function() {
									that.time--
									if (that.time == 0) {
										clearInterval(fn)
									}
								}, 1000);
							} else {
								uni.showToast({
									title: '发送失败',
									duration: 2000,
									icon: "none"
								});
							}
						}
					})
				}
			},
		},
		created() {
			this.formData.id = getApp().globalData.user.id
			this.formData.phone = getApp().globalData.user.phone
		}
	}
</script>

<style>
	.btn {
		width: 300rpx;
		height: 100rpx;
		border: 0;
		background-color: #14b3fc;
		margin-left: 20rpx;
		border-radius: 10rpx;
		line-height: 100rpx;
		text-align: center;
		color: #000000;
	}
</style>
