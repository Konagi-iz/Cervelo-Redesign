<script setup>
import 'destyle.css';
import '@/scss/_base.scss';
import Header from '@/components/parts/header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
	<div class="wrapper">
		<Header></Header>
		<router-view></router-view>
	</div>
</template>

<style lang="scss">
.wrapper {
	min-width: 1000px;
}
</style>
