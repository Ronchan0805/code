<template>
	<view class="ea-uni-box">

		<input
		 ref="input"
     v-bind="$attrs"
		 @input="handleInput"
		 />

	</view>
</template>
<script>
	export default {

		props: {
			value: [String,Number]
		},
		watch: {

		},
		data() {
			return {

			}
		},
		computed: {
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : String(this.value);
      }
		},
		methods: {
			// 输入框输入事件
			handleInput (e) {
        console.log(e)
				this.$emit('input',e.detail.value);
				this.$nextTick(() => {
					this.$refs.input.valueSync = this.value;
				})
			}
		}
	}
</script>

<style>
.ea-uni-box {
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.ea-uni-box input {
	width: 100%;
}
.ea-uni-box .input-down {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
}
</style>
