<!--
* @Author: Zhang Guohua
* @Date:   2020-04-29 17:05:07
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-29 17:06:01
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div class="wrapper">
		{{ text || obj.test }}
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			obj: Object
		},
		data () {
			return {
				text: ''
			}
		},
		created () {
			console.log('lazy load')
			// 延迟加载
			setTimeout(() => {
				this.text = '我是需要延迟加载的内容'
			}, 3000)
		}
	}
</script>

<style>
	.wrapper {
		width: 100%;
		height: 500px;
		background: #ccc;
		color: #FFFFFF;
	}
</style>