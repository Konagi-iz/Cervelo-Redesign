<script setup>
import 'destyle.css';
import '@/scss/base.scss';
import '@/scss/nwclasses.scss';
import Header from '@/components/parts/Header.vue';
import Footer from '@/components/parts/Footer.vue';
import { RouterView,  } from 'vue-router';
import { ref, onMounted } from 'vue';

let w = window.innerWidth;

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

/* Scroll Animation ------------ */
function scrollAnimation() {
	const targets = document.querySelectorAll('.scr-anin');

	targets.forEach((e) => {
		window.addEventListener('scroll', () => {
			const scroll = window.scrollY;
			const h = window.innerHeight;
			const pos = scroll + e.getBoundingClientRect().top;

			if (scroll + h * 0.8 > pos) {
				e.classList.add('scr-anin--on');
			}
		});
	});
}
window.addEventListener('DOMContentLoaded', () => {
	scrollAnimation();
});

/* Loading ------------ */
function Loading() {
	const targets = document.querySelectorAll('.js-load');

	targets.forEach((e) => {
		setTimeout(() => {
			e.classList.add('js-load--on');
		}, 400);
	});
}
window.addEventListener('load', () => {
	Loading();
});

/* 画面遷移アニメーション ------------ */
const load = ref(null);
</script>

<template>
	<div class="wrapper">
		<div ref="load" class="load"></div>
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
	opacity: 0;
	width: 100%;
	height: 100dvh;
	background: $c-red;
	transition: opacity 0.6s $e-out;
}
.load--active {
	opacity: 1;
}
</style>
