<script setup>
import 'destyle.css';
import '@/scss/base.scss';
import '@/scss/nwclasses.scss';
import { ref, onMounted, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import Loading from '@/components/parts/Loading.vue';
import Header from '@/components/parts/Header.vue';
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
	console.log('loading');
	targets.forEach((e) => {
		setTimeout(() => {
			e.classList.add('js-load--on');
		}, 400);
	});
	// console.log('loading');
}

/* マウントされた時に呼ばれる ------------ */
// onMounted(() => {
// 	loading();
// });

/* Loading がマウントされたら loading を実行 ------------ */
const isLoadingMounted = ref(false);

watch(isLoadingMounted, () => {
	if (isLoadingMounted) {
		setTimeout(() => {
			loading();
		}, 700);
	}
});

/* ルートが変更されたときに呼ばれる ------------ */
// watch(route, () => {
// 	reload();
// });
</script>

<template>
	<div class="wrapper">
		<div ref="load" class="load"></div>
		<Loading @update:isMounted="isLoadingMounted = $event"></Loading>
		<Header :w="w"></Header>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<style lang="scss">
.wrapper {
	@include media_wide {
		min-width: 1024px;
	}
}

/* load ------------ */
.load {
	z-index: 1000;
	position: fixed;
	opacity: 0;
	width: 100%;
	height: 100dvh;
	background: $c-red;
	transition: opacity 0.6s $e-out;
	pointer-events: none;
}
.load--active {
	opacity: 1;
}
</style>
