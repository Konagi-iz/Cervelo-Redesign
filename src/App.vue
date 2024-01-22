<script setup>
import 'destyle.css';
import '@/scss/base.scss';
import '@/scss/nwclasses.scss';
import Header from '@/components/parts/Header.vue';
import Footer from '@/components/parts/Footer.vue';
import { RouterView } from 'vue-router';

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
		}, 1000);
	});
}
window.addEventListener('load', () => {
	Loading();
});
</script>

<template>
	<div class="wrapper">
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
</style>
