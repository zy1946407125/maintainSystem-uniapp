<template>
	<view>
		<uni-card title="消息列表" mode="title" :is-shadow="true">
			<uni-grid :column="3" :showBorder="false" :square="false">
				<uni-grid-item>
					<view @click="selectUnreadMessages()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/xx1.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">未读消息</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="selectHistoryMessages()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/xx2.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">历史消息</view>
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
						<view style="text-align: center;">我的工单</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="maintainOrders()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/wxlb.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">正在维修</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="addOrder()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/xjgd.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">新建工单</view>
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
			//消息列表
			selectUnreadMessages() {
				uni.navigateTo({
					url: "/pages/unReadMessages/unReadMessages"
				})
			},
			selectHistoryMessages() {
				uni.navigateTo({
					url: "/pages/historyMessages/historyMessages"
				})
			},
			//工单管理
			selectOrders() {
				uni.navigateTo({
					url: "/pages/userPage/order/allOrders/allOrders",
				})
			},
			maintainOrders() {
				uni.navigateTo({
					url: "/pages/userPage/order/maintainOrders/maintainOrders",
				})
			},
			addOrder() {
				uni.navigateTo({
					url: "/pages/userPage/order/addOrder/addOrder",
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
