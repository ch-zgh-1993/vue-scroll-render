<!--
* @Author: Zhang Guohua
* @Date:   2020-04-29 16:06:14
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-29 17:14:01
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div ref="wrapper">
		<slot v-if="judgeShow"></slot>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'scroll-load',
	props: {
		showBlock: {
			type: Boolean,
			default: null
		},
		bottom: {
			type: Number,
			default: null
		}
	},
	data () {
		return {
			show: false,
			ticking: false,
			height: 100
		}
	},
	computed: {
		showHeight () {
			const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			const bottom = this.bottom !== null ? this.bottom : this.height
			return viewPortHeight + bottom
		},
		judgeShow () {
			if (this.showBlock !== null) return this.showBlock
			return this.show
		}
	},
	mounted () {
		this.showBlock === null && document.addEventListener('scroll', this.watchScroll, false)
	},
	methods: {
		watchScroll (event){
			const vm = this
			
			if (!vm.ticking && !vm.judgeShow) {
		    window.requestAnimationFrame(function() {
		    	const offsetTop = vm.$refs.wrapper.offsetTop
		    	const scrollTop = document.documentElement.scrollTop
		    	if (offsetTop - scrollTop < vm.showHeight) {
		    		vm.show = true
		    	}
		      vm.ticking = false
		    })
		  }
		  vm.ticking = true;
		}
	},
	destoryed () {
		this.showBlock === null && document.removeEventListener('scroll', this.watchScroll, false)
	}
}
</script>