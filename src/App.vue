<script setup>
import 'destyle.css';
import '@/scss/base.scss';
import '@/scss/nwclasses.scss';
import { RouterView, useRoute } from 'vue-router';
import Loading from '@/components/parts/Loading.vue';
import Header from '@/components/parts/Header.vue';
import FooterShopList from '@/components/parts/FooterShopList.vue';
import Footer from '@/components/parts/Footer.vue';

let w = window.innerWidth;
const route = useRoute();

/* Change root font-size ------------ */
function changeRootFontSize() {
	if (w <= 677) {
		document.documentElement.style.setProperty('--fz', (10 / 375) * w + 'px');
	} else {
		document.documentElement.style.setProperty('--fz', '10px');
	}
}
changeRootFontSize();
window.addEventListener('resize', () => {
	w = window.innerWidth;
	changeRootFontSize();
});

/* Loading ------------ */
function loading() {
	const targets = document.querySelectorAll('.js-load');
	targets.forEach((e) => {
		setTimeout(() => {
			e.classList.add('js-load--on');
		}, 400);
	});
	// console.log('loading');
}

/* Loading がマウントされたら loading を実行 ------------ */
const onChildMounted = () => {
	loading();
};
</script>

<template>
	<div class="wrapper">
		<div class="transition"></div>
		<Loading></Loading>
		<Header :w="w"></Header>
		<main id="main">
			<router-view @child-mounted="onChildMounted"></router-view>
		</main>
		<FooterShopList v-if="route.name !== 'home'"></FooterShopList>
		<Footer></Footer>
	</div>
</template>

<style lang="scss">
/* load ------------ */
.transition {
	z-index: 3000;
	position: fixed;
	opacity: 0;
	width: 100%;
	height: 100dvh;
	background: $c-red;
	transition: opacity 0.6s $e-out;
	pointer-events: none;
}
.transition--active {
	opacity: 1;
}
</style>
