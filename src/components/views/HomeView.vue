<script setup>
import Loading from '@/components/parts/Loading.vue';
import Hero from '@/components/views/homeParts/Hero.vue';
import News from '@/components/views/homeParts/News.vue';
import Bikes from '@/components/views/homeParts/Bikes.vue';
import Shoplist from '@/components/views/homeParts/Shoplist.vue';
import OnlineShop from '@/components/views/homeParts/OnlineShop.vue';
import Support from '@/components/views/homeParts/Support.vue';
import History from '@/components/views/homeParts/History.vue';
import router from '../../router';

/* Loading ------------ */
function loading() {
	const targets = document.querySelectorAll('.js-load');

	targets.forEach((e) => {
		setTimeout(() => {
			e.classList.add('js-load--on');
		}, 400);
	});
}
window.addEventListener('load', () => {
	loading();
});
const beforeRouteEnter = (to, from, next) => {
	// ルートが適用される前の処理
	next((vm) => {
		// vmはVueインスタンスを参照
		// コンポーネントが適用された後の処理
		console.log('Component entered:', vm);
	});
};
// `beforeRouteUpdate`のガード
const beforeRouteUpdate = (to, from, next) => {
  // ルートが再利用されるときの処理
	console.log('upadate');
  next();
};

// `beforeRouteLeave`のガード
const beforeRouteLeave = (to, from, next) => {
	// ルートを離れる前の処理
	console.log('leave');
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
