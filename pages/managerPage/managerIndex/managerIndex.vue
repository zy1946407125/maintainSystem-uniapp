<template>
	<view>
		<uni-card title="人员管理" mode="title" :is-shadow="true">
			<uni-grid :column="3" :showBorder="false" :square="false">
				<uni-grid-item>
					<view @click="selectUsers()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/u1.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">部门成员</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-card>
		<uni-card title="工单管理" mode="title" :is-shadow="true">
			<uni-grid :column="3" :showBorder="false" :square="false">
				<uni-grid-item>
					<view @click="selectOrders()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/gdcx.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">部门工单</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-card>
		<uni-card title="设置" mode="title" :is-shadow="true">
			<uni-grid :column="3" :showBorder="false" :square="false">
				<uni-grid-item>
					<view @click="updatePassword()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/lock.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">修改密码</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="updatePhone()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/phone.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">修改手机号</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			//人员管理
			selectUsers() {
				uni.navigateTo({
					url: "/pages/managerPage/people/deptUsers/deptUsers"
				})
			},
			//工单管理
			selectOrders() {
				uni.navigateTo({
					url: "/pages/managerPage/order/deptOrders/deptOrders",
				})
			},

			//设置
			updatePassword() {
				uni.navigateTo({
					url: "/pages/updatePassword/updatePassword"
				})
			},
			updatePhone() {
				uni.navigateTo({
					url: "/pages/updatePhone/updatePhone"
				})
			},
		}
	}
</script>

<style>

</style>
