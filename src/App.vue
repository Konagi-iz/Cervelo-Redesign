<script setup>
import Loading from '@/components/parts/Loading.vue';
import 'destyle.css';
import '@/scss/base.scss';
import '@/scss/nwclasses.scss';
import Header from '@/components/parts/Header.vue';
import Footer from '@/components/parts/Footer.vue';
import { RouterView } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

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

/* onMounted ------------ */
onMounted(() => {
	// loading();
});

const reloadKey = ref(0);
function reload() {
	return reloadKey.value++;
}

const isMounted = ref(false);
const mounted = (newVal) => {
	isMounted.value = newVal;
};

watch(isMounted, () => {
	if (isMounted) {
		// console.log('mounted');
		loading();
	}
});

watch(route, () => {
	if (route.name === 'home') {
		reload();
	}
});
</script>

<template>
	<div class="wrapper">
		<div ref="load" class="load"></div>
		<Loading :key="reloadKey" @isMounted="mounted"></Loading>
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
