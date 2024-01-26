<script setup>
import 'destyle.css';
import '@/scss/base.scss';
import '@/scss/nwclasses.scss';
import Header from '@/components/parts/Header.vue';
import Footer from '@/components/parts/Footer.vue';
import { RouterView } from 'vue-router';
import { ref, onMounted, nextTick } from 'vue';

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
