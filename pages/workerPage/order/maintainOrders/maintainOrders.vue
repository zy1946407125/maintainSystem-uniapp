<template>
	<view>
		<view>
			<modal v-if="showPop" title="确认完成" confirm-text="确定" cancel-text="取消" @cancel="cancelPop"
				@confirm="confirmPop">
				<view style="display: flex;flex-direction: row;">
					维修耗材：
					<input type='text' placeholder="请输入维修耗材" v-model="consumable" />
				</view>
				<view style="height: 20rpx;"></view>
				<view>上传图片（可选）</view>
				<view style="height: 10rpx;"></view>
				<view class="content">
					<g-upload ref='gUpload' :mode="imgList" @chooseFile='chooseFile' @imgDelete='imgDelete'
						:control='true' :maxCount="9" :columnNum="columnNum"></g-upload>
				</view>
			</modal>
		</view>
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
					<uni-th align="center">提交人联系方式</uni-th>
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
					<uni-td>
						<button size="mini" :disabled="item.imgsfileids1==null||item.imgsfileids1=='[]'" type="primary"
							plain="true" @click="lookImg(item.imgsfileids1)">查看申报图片</button>
						<button size="mini" type="primary" plain="true" @click="confirmOrder(item.id)">确认完成</button>
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
				columnNum: 3,
				imgList: [],
				imgPath: [],
				tableData: null,
				id: null,
				showPop: false, //弹窗
				consumable: null,
			}
		},
		methods: {
			confirmOrder(id) {
				this.id = id
				this.showPop = true
			},
			//弹窗
			confirmPop() { //确认
				if (this.consumable == null || this.consumable == "") {
					uni.showToast({
						title: "请填写维修耗材",
						icon: "none"
					})
				} else {
					if (this.imgList.length == 0) {
						console.log("没有选择图片，直接提交确认")
						this.addConsumable()
					} else {
						this.uploadImg(this.imgList, 0)
					}
				}
			},
			cancelPop() { //取消
				this.consumable = null
				this.showPop = false
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
							that.addConsumable()
						}
					}
				});
			},
			addConsumable() {
				const that = this
				uni.showLoading({
					title: "正在确认"
				});
				const token = getApp().globalData.token;
				let id = that.id
				let consumable = that.consumable
				let imgsfileids2 = JSON.stringify(that.imgPath)
				uni.request({
					url: getApp().globalData.BASE_URL + '/worker/completeOrder',
					data: {
						token: token,
						id: id,
						consumable: consumable,
						imgsfileids2: imgsfileids2
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
								title: '确认成功',
								duration: 2000,
								success() {
									setTimeout(function() {
										uni.redirectTo({
											url: "/pages/workerPage/order/maintainOrders/maintainOrders"
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
			selectOrders() {
				const that = this
				uni.showLoading({});
				var token = getApp().globalData.token
				uni.request({
					url: getApp().globalData.BASE_URL + '/worker/selectOrders',
					data: {
						token: token,
						status: '工人已接单',
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
						}
					}
				})

			},
		},
		created() {
			this.selectOrders()
		},
		onShow() {}
	}
</script>

<style>

</style>
