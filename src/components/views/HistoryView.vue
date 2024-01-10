<script setup>
import 'normalize.css';
import Header from '@/components/parts/header.vue';
</script>

<template>
	<h1>HISTORY</h1>
	<router-link :to="{name: 'home'}">VIEW HOME</router-link>
</template>

<style scoped lang="scss">
h1 {
	color: red;
	font-size: 24px;
}
</style>
