<template>
	<view>
		<uni-forms ref="form" :value="formData" :rules="rules">
			<view class="uni-list">
				<view class="uni-list-cell" style="display: flex;flex-direction: row;">
					<view class="uni-list-cell-left">
						维修类别：
					</view>
					<view style="height: 80rpx;"></view>
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="optionsType">
							<view class="uni-input">{{optionsType[index]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<uni-forms-item label="维修原因" name="reason">
				<uni-easyinput type="text" v-model="formData.reason" />
			</uni-forms-item>
			<uni-forms-item label="维修地址" name="address">
				<uni-easyinput type="text" v-model="formData.address" />
			</uni-forms-item>
			<view class="content">
				<g-upload ref='gUpload' :mode="imgList" @chooseFile='chooseFile' @imgDelete='imgDelete' :control='true'
					:maxCount="9" :columnNum="columnNum"></g-upload>
			</view>
			<button @click="submit" type="primary">提交</button>
		</uni-forms>
	</view>
</template>

<script>
	import gUpload from "@/components/g-upload/g-upload.vue"
	export default {
		components: {
			gUpload
		},
		data() {
			return {
				columnNum: 3,
				imgList: [],
				imgPath: [],
				optionsType: [],
				index: 0,
				formData: {
					reason: '',
					address: '',
				},
				rules: {
					reason: {
						rules: [{
							required: true,
							errorMessage: '请输入维修原因',
						}, ]
					},
					address: {
						rules: [{
							required: true,
							errorMessage: '请输入维修地址',
						}, ]
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
					if (this.imgList.length == 0) {
						console.log("没有选择图片，直接提交工单")
						this.addOrder()
					} else {
						this.uploadImg(this.imgList, 0)
					}
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			addOrder() {
				const that = this
				uni.showLoading({
					title: "正在提交"
				});
				const token = getApp().globalData.token;
				let type = that.optionsType[that.index]
				let reason = that.formData.reason
				let address = that.formData.address
				let imgsfileids1 = JSON.stringify(that.imgPath)
				uni.request({
					url: getApp().globalData.BASE_URL + '/user/addOrder',
					data: {
						token: token,
						type: type,
						reason: reason,
						address: address,
						imgsfileids1: imgsfileids1
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
								title: '提交成功',
								duration: 2000,
								success() {
									setTimeout(function() {
										uni.redirectTo({
											url: "/pages/userPage/order/addOrder/addOrder"
										})
									}, 2000)
								}
							});
						} else {
							uni.showToast({
								title: '提交失败',
								duration: 2000,
								icon: "none"
							});
						}
					}
				})
			},
			chooseFile(list, v) {
				this.imgList = list
			},
			imgDelete(list, eq) {
				this.imgList = list
			},
			uploadImg(imgList, i) {
				const that = this
				uni.showLoading({
					title: "正在上传第" + (i + 1) + "张图片"
				})
				uni.uploadFile({
					url: getApp().globalData.BASE_URL + '/user/uploadImgOne',
					filePath: imgList[i],
					name: 'file',
					success(response) {
						uni.hideLoading()
						console.log(response)
						that.imgPath.push(response.data)
						if (++i < imgList.length) {
							that.uploadImg(imgList, i)
						} else {
							that.addOrder()
						}
					}
				});
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
							for (let i = 0; i < response.data.length; i++) {
								that.optionsType.push(response.data[i].type)
							}
						}
					}
				})
			},
		},
		created() {
			this.selectWorkType()
		}
	}
</script>

<style scoped>
	.content {
		padding: 40rpx;
	}

	/* 上传控件 */
	.uploadControl {
		border: 1rpx solid #eee;
		border-radius: 10rpx;
		width: 130rpx;
		display: block;
		height: 130rpx;
		text-align: center;
		line-height: 130rpx;
		font-size: 30rpx;
		color: #888;
		background-color: #EEEEEE;
	}
</style>
