<script setup>
import 'normalize.css';
import Header from '@/components/parts/header.vue';
</script>

<template>
	<Header></Header>
	<div class="test">
		<a href="./bikes/bikes.html">bikes</a>
	</div>
	<img src="./assets/imgs/top/fv/img_bike_01.png" alt="" />
</template>

<style lang="scss">
.test {
	width: 100%;
	height: 100vh;
	background: $c-white;
}
</style>
