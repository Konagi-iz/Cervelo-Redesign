<script setup>
import 'destyle.css';
import '@/scss/base.scss';
import '@/scss/nwclasses.scss';
import { RouterView } from 'vue-router';
import Loading from '@/components/parts/Loading.vue';
import Header from '@/components/parts/Header.vue';
import Footer from '@/components/parts/Footer.vue';

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
		<router-view @child-mounted="onChildMounted"></router-view>
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
