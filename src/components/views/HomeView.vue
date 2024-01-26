<script setup>
import Loading from '@/components/parts/Loading.vue';
import Hero from '@/components/views/homeParts/Hero.vue';
import News from '@/components/views/homeParts/News.vue';
import Bikes from '@/components/views/homeParts/Bikes.vue';
import Shoplist from '@/components/views/homeParts/Shoplist.vue';
import OnlineShop from '@/components/views/homeParts/OnlineShop.vue';
import Support from '@/components/views/homeParts/Support.vue';
import History from '@/components/views/homeParts/History.vue';
import { onMounted } from 'vue';

/* Loading ------------ */
function loading() {
	const targets = document.querySelectorAll('.js-load');
	targets.forEach((e) => {
		setTimeout(() => {
			e.classList.add('js-load--on');
		}, 400);
	});
	console.log('loaded');
}

onMounted(() => {
	loading();
});

const beforeRouteEnter = (to, from, next) => {
	console.log('entered');
	loading();
	next();
};
</script>

<template>
	<main id="main">
		<Loading></Loading>
		<Hero></Hero>
		<News></News>
		<Bikes></Bikes>
		<Shoplist></Shoplist>
		<OnlineShop></OnlineShop>
		<Support></Support>
		<History></History>
	</main>
</template>

<style lang="scss">
#main {
	overflow-x: clip;
}
</style>
