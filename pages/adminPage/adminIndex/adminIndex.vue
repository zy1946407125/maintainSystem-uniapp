<template>
	<view>
		<uni-card title="人员管理" mode="title" :is-shadow="true">
			<uni-grid :column="3" :showBorder="false" :square="false">
				<uni-grid-item>
					<view @click="selectAdmins()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/u1.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">管理员</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="selectWorkers()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/u2.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">维修人员</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="selectManagers()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/u3.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">部门负责人</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-card>
		<uni-card title="工单管理" mode="title" :is-shadow="true">
			<uni-grid :column="4" :showBorder="false" :square="false">
				<uni-grid-item>
					<view @click="selectOrders()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/gdcx.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">工单查询</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="sendOrders()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/gdzp.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">工单指派</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="handOrders()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/gdth.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">退单申请</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="warnOrders()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/gdyj.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">预警提醒</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-card>
		<uni-card title="图表统计" mode="title" :is-shadow="true">
			<uni-grid :column="3" :showBorder="false" :square="false">
				<uni-grid-item>
					<view @click="orderStatistical()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/tb1.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">工单统计</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="workerStatistical()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/tb2.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">工人统计</view>
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
				<uni-grid-item>
					<view @click="selectWorkTypes()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/wxlb.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">维修类别</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="selectDepts()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/dept.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">部门管理</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @click="selectWarnNum()">
						<view style="display: flex;align-items: center;flex-direction: column;">
							<image src="/static/icon/yjts.png" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view style="text-align: center;">预警天数</view>
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
			selectAdmins() {
				uni.navigateTo({
					url: "/pages/adminPage/people/admins/admins"
				})
			},
			selectWorkers() {
				uni.navigateTo({
					url: "/pages/adminPage/people/workers/workers"
				})
			},
			selectManagers() {
				uni.navigateTo({
					url: "/pages/adminPage/people/managers/managers"
				})
			},
			//工单管理
			selectOrders() {
				uni.navigateTo({
					url: "/pages/adminPage/order/allOrders/allOrders",
				})
			},
			sendOrders() {
				uni.navigateTo({
					url: "/pages/adminPage/order/sendOrder/sendOrder",
				})
			},
			handOrders() {
				uni.navigateTo({
					url: "/pages/adminPage/order/handOrder/handOrder"
				})
			},
			warnOrders() {
				uni.navigateTo({
					url: "/pages/adminPage/order/warning/warning"
				})
			},


			//图表统计
			orderStatistical() {
				uni.navigateTo({
					url: "/pages/adminPage/statistical/orderStatistical/orderStatistical"
				})
			},
			workerStatistical() {
				uni.navigateTo({
					url: "/pages/adminPage/statistical/workerStatistical/workerStatistical"
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
			selectWorkTypes() {
				uni.navigateTo({
					url: "/pages/adminPage/setting/workTypes/workTypes"
				})
			},
			selectDepts() {
				uni.navigateTo({
					url: "/pages/adminPage/setting/depts/depts"
				})
			},
			selectWarnNum() {
				uni.navigateTo({
					url: "/pages/adminPage/setting/WarnNum/WarnNum"
				})
			}
		}
	}
</script>

<style>

</style>
