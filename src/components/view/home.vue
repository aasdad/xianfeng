<template>
	<div id="home">
		<header>
         <v-Header />
		</header>
		<div class="content">
             <el-button type="primary">
             	<router-link :to="{name:'test'}">test</router-link>
             </el-button> 
		</div>

	</div>
</template>

<script>
	import Header from "../comment/header.vue";
	export default {
		data() {
			return {
				msg: ''
			}
		},
		methods: {

		},
		components: {
        "v-Header":Header
		}
	}
</script>

<style scoped>

</style>