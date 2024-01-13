<script setup>
import Hero from '@/components/views/homeParts/Hero.vue';
import News from '@/components/views/homeParts/News.vue';
import Bikes from './homeParts/Bikes.vue';
</script>

<template>
	<main>
		<Hero></Hero>
		<News></News>
		<Bikes></Bikes>
	</main>
</template>

<style scoped lang="scss">
h1 {
	font-size: 48px;
}
</style>
