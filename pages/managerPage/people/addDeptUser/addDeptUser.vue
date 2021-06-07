<template>
	<view>
		<uni-forms ref="form" :value="formData" :rules="rules">
			<uni-forms-item label="编号" name="id">
				<uni-easyinput type="number" v-model="formData.id" placeholder="请输入编号" />
			</uni-forms-item>
			<uni-forms-item label="手机号" name="phone">
				<uni-easyinput type="number" v-model="formData.phone" placeholder="请输入手机号" />
			</uni-forms-item>
			<uni-forms-item label="姓名" name="username">
				<uni-easyinput type="text" v-model="formData.username" placeholder="请输入姓名" />
			</uni-forms-item>
			<button @click="submit">添加</button>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					id: '',
					phone: '',
					username: '',
				},
				rules: {
					id: {
						rules: [{
							required: true,
							errorMessage: '请输入编号',
						}, ]
					},
					phone: {
						rules: [{
							required: true,
							errorMessage: '请输入手机号',
						}, ]
					},
					username: {
						rules: [{
							required: true,
							errorMessage: '请输入姓名',
						}]
					}
				}
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			submit() {
				this.$refs.form.submit().then(res => {

					const that = this
					uni.showLoading({});
					let id = res.id
					let phone = res.phone
					let username = res.username
					const token = getApp().globalData.token;

					uni.request({
						url: getApp().globalData.BASE_URL + '/manager/addDeptUser',
						data: {
							token: token,
							id: id,
							phone: phone,
							username: username
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
									title: '添加成员成功',
									duration: 2000,
								});
								that.formData.id = null
								that.formData.phone = null
								that.formData.username = null
							} else {
								uni.showToast({
									title: '添加失败',
									duration: 2000,
									icon: "none"
								});
							}
						}
					})

				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
		},
		onShow() {
		}
	}
</script>

<style>

</style>
