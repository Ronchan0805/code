<template>
	<view class="content">
		<rc-uni-input v-model="data" @input="data=data.replace(/[^\d]/g,'')"></rc-uni-input>
		<!-- <rc-uni-input v-model="data"></rc-uni-input> -->
		data:{{data}}
	</view>
</template>

<script>
	import rcUniInput from "../../../components/rc-uni-input.vue"
	export default {
		components: {
			rcUniInput
		},
		data() {
			return {
				data: ''
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
