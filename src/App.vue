<script setup>
import 'destyle.css';
import '@/scss/_base.scss';
import Header from '@/components/parts/Header.vue';
import Footer from '@/components/parts/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
	<div class="wrapper">
		<Header></Header>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<style lang="scss">
.wrapper {
	min-width: 1024px;
}
</style>
