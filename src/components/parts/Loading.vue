<script setup>
import { onMounted } from 'vue';
import { isLoadReady } from '@/store';
import LogoMini from '~icons/svg/logo_mini';

const emit = defineEmits(['update:isMounted']);

/* マウントされたことを親に伝える ------------ */
onMounted(() => {
	emit('update:isMounted', true);
});
</script>

<template>
	<div class="loading" :class="{ 'js-load': isLoadReady }">
		<p class="loading__txt">LOADING...</p>
		<div class="loading__in">
			<div class="loading__bg"></div>
			<div class="loading__bg"></div>
			<div class="loading__bg"></div>
			<div class="loading__bg"></div>
			<div class="loading__bg"></div>
		</div>
		<LogoMini class="loading__logo"></LogoMini>
	</div>
</template>

<style scoped lang="scss">
.loading {
	z-index: 2000;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: $c-white;
	transition: opacity 0s ease, visibility 0s ease;
	.loading__txt {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: $c-red;
		@include font-en;
		@include fz(24);
		font-weight: 600;
		line-height: 1.5;
		letter-spacing: 0.1em;
		font-style: italic;
		animation: loading 0.6s infinite alternate ease-in-out;
	}
	.loading__in {
		display: flex;
		height: 100%;
	}
	.loading__bg {
		flex: 1;
		height: 100%;
		background: $c-red;
		transform: scaleY(0);
		transform-origin: top;
		transition: transform 0s $e-out;
		&:nth-of-type(odd) {
			// transform-origin: bottom;
		}
	}
	.loading__logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		clip-path: inset(-1% 100% -1% -1%);
		width: 66px;
		height: auto;
		pointer-events: none;
		transition: clip-path 1s $e-out 1s;
	}
}
/* load--on ------------ */
.loading.js-load--on {
	pointer-events: none;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.2s ease, visibility 0.2s ease;
	transition-delay: 1.6s;
	.loading__bg {
		transform: scaleY(1);
		transition: transform 0.8s $e-out;
		@for $i from 1 through 8 {
			&:nth-of-type(#{$i}) {
				transition-delay: #{0.1 * ($i - 1)}s;
			}
		}
	}
	.loading__logo {
		animation: logo 2s $e-inOut 0.7s;
	}
}
@keyframes loading {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
@keyframes logo {
	0% {
		clip-path: inset(-1% 100% -1% -1%);
	}
	25% {
		clip-path: inset(-1% -1% -1% -1%);
	}
	75% {
		clip-path: inset(-1% -1% -1% -1%);
	}
	100% {
		clip-path: inset(-1% -1% -1% 100%);
	}
}
</style>
