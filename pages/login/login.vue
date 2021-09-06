<template>
	<view>
		<uni-forms ref="form" :value="formData" :rules="rules">
			<view class="uni-list">
				<view class="uni-list-cell" style="display: flex;flex-direction: row;">
					<view class="uni-list-cell-left">
						账号类别：
					</view>
					<view style="height: 80rpx;"></view>
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="type">
							<view class="uni-input">{{type[index]}}</view>
						</picker>
					</view>
				</view>
			</view>

			<uni-forms-item label="手机号" name="phone">
				<uni-easyinput type="number" v-model="formData.phone" placeholder="请输入手机号" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<view style="display: flex;flex-direction: row;">
			<view style="width: 150rpx;"></view>
			<uni-data-checkbox multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		</view>
		<view style="height: 50rpx;"></view>
		<button @click="submit" type="primary">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: [0],
				range: [{
					"value": 0,
					"text": "记住密码"
				}],
				flag: true,
				type: ['管理员', '维修人员', '部门负责人', '普通用户'],
				index: 0,
				formData: {
					phone: '',
					password: ''
				},
				rules: {
					phone: {
						rules: [{
							required: true,
							errorMessage: '请输入手机号',
						}, ]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入密码',
						}]
					}
				}
			}
		},
		methods: {
			change(e) {
				console.log(e)
				console.log(e.detail.data.length)
				if (e.detail.data.length == 0) {
					this.flag = false
				}
				if (e.detail.data.length == 1) {
					this.flag = true
				}
				console.log(this.flag)
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			submit() {
				this.$refs.form.submit().then(res => {
					var role = null
					const that = this
					console.log(this.index)
					if (this.index == 0) {
						role = "admin"
					} else if (this.index == 1) {
						role = "worker"
					} else if (this.index == 2) {
						role = "manager"
					} else if (this.index == 3) {
						role = "user"
					}
					uni.showLoading({
						title: '正在登录...'
					});
					uni.request({
						url: getApp().globalData.BASE_URL + '/user/login',
						data: {
							phone: res.phone,
							password: res.password
						},
						header: {

						},
						success(response) {
							console.log(response)
							if (response.data.status == 1) {
								var i = 0
								for (i = 0; i < response.data.user.role.length; i++) {
									if (response.data.user.role[i] == role) {
										uni.hideLoading()
										uni.showToast({
											title: '登录成功',
											duration: 2000
										});
										getApp().globalData.loginState = response.data.status
										getApp().globalData.user = response.data.user
										getApp().globalData.token = response.data.token

										response.data.user.password = res.password

										if (that.flag == true) {
											//缓存用户信息
											console.log("缓存用户信息")
											try {
												uni.setStorageSync('user', response.data.user)
											} catch (e) {
												// error
												console.log("缓存用户信息失败")
											}

											try {
												uni.setStorageSync('typeIndex', that.index)
											} catch (e) {
												// error
												console.log("缓存用户类别失败")
											}
										}else{
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
										}

										const url = '/pages/' + role + 'Page/' + role + 'Index/' + role +
											'Index'
										console.log(url)
										uni.redirectTo({
											url: url,
										});
										break
									}
								}
								if (i >= response.data.user.role.length) {
									uni.hideLoading()
									uni.showToast({
										title: '账号无此登录权限',
										duration: 2000,
										icon: "none"
									});
								}
							} else {
								uni.hideLoading()
								uni.showToast({
									title: '账号或密码错误',
									duration: 2000,
									icon: "none"
								});
							}
						}
					});

				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
		},
		created() {
			try {
				const user = uni.getStorageSync('user');
				console.log(user)
				if (user == '') {
					console.log("用户信息没有缓存")
				} else {
					console.log("用户信息有缓存")
					this.formData.phone = user.phone
					this.formData.password = user.password
				}
			} catch (e) {
				console.log(e)
			}
			try {
				const typeIndex = uni.getStorageSync('typeIndex');
				console.log(typeIndex)
				if (typeIndex == '') {
					console.log("用户类别没有缓存")
				} else {
					console.log("用户类别有缓存")
					this.index = typeIndex
				}
			} catch (e) {
				console.log(e)
			}
		}
	}
</script>

<style>

</style>
