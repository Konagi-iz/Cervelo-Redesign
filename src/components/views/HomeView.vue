<script setup>
import { onMounted, getCurrentInstance } from 'vue';
import Hero from '@/components/views/homeParts/Hero.vue';
import News from '@/components/views/homeParts/News.vue';
import Bikes from '@/components/views/homeParts/Bikes.vue';
import Shoplist from '@/components/views/homeParts/Shoplist.vue';
import OnlineShop from '@/components/views/homeParts/OnlineShop.vue';
import Support from '@/components/views/homeParts/Support.vue';
import History from '@/components/views/homeParts/History.vue';

const emit = defineEmits(['childMounted']);

// マウントされたら親に伝える
onMounted(() => {
	const instance = getCurrentInstance();
	if (instance && instance.parent) {
		instance.parent.emit('child-mounted');
	}
});
</script>

<template>
	<main id="main">
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
