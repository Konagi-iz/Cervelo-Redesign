<script setup>
import LogoMini from '~icons/svg/logo_mini';
</script>

<template>
	<div class="load js-load">
		<div class="load__in">
			<div class="load__bg"></div>
			<div class="load__bg"></div>
			<div class="load__bg"></div>
			<div class="load__bg"></div>
			<div class="load__bg"></div>
			<div class="load__bg"></div>
			<div class="load__bg"></div>
			<div class="load__bg"></div>
		</div>
		<LogoMini class="load__logo"></LogoMini>
	</div>
</template>

<style lang="scss">
.load {
	z-index: 2000;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: $c-white;
	transition: opacity 0.2s ease, visibility 0.2s ease;
	transition-delay: 1.6s;
	.load__in {
		display: flex;
		height: 100%;
	}
	.load__bg {
		flex: 1;
		height: 100%;
		background: $c-red;
		transform: scaleY(0);
		transform-origin: top;
		transition: transform 0.8s $e-out;
		@for $i from 1 through 8 {
			&:nth-of-type(#{$i}) {
				transition-delay: #{0.1 * ($i - 1)}s;
			}
		}
		&:nth-of-type(odd) {
			transform-origin: bottom;
		}
	}
	.load__logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		clip-path: inset(0 0 0 0);
		width: 66px;
		height: auto;
		pointer-events: none;
		transition: clip-path 1s $e-out 1s;
	}
}
.load.js-load--on {
	pointer-events: none;
	opacity: 0;
	visibility: hidden;
	.load__bg {
		transform: scaleY(1);
	}
	.load__logo {
		clip-path: inset(0 0 0 100%);
	}
}
</style>
