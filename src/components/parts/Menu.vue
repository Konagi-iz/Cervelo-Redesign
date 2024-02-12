<script setup>
import { ref } from 'vue';

const menu = ref(null);

defineExpose({ menu });
</script>

<template>
	<button ref="menu" class="menu dn-w">
		<span class="menu__in">
			<span class="menu__line"></span>
			<span class="menu__line"></span>
			<span class="menu__line"></span>
		</span>
	</button>
</template>

<style scoped lang="scss">
.menu {
	z-index: 999;
	position: relative;
	width: vw(56);
	height: 100%;
	.menu__in {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: vw(24);
		height: vw(17);
	}
	.menu__line {
		position: absolute;
		height: vw(3);
		background: $c-red;
		transition: transform 0.5s $e-out, background 0.5s $e-out;
		&:nth-of-type(1) {
			top: 0;
			left: 0;
			transform-origin: top;
			width: vw(24);
		}
		&:nth-of-type(2) {
			top: vw(7);
			left: vw(4);
			width: vw(20);
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: $c-red;
				transition: transform 0.5s $e-out, background 0.5s $e-out;
				/*---------------- after */
			}
		}
		&:nth-of-type(3) {
			top: vw(14);
			left: 0;
			transform-origin: bottom;
			width: vw(24);
		}
	}
}
.menu--active {
	.menu__line {
		background: $c-white;
		&:nth-of-type(1) {
			transform: scaleY(0) translateY(-10%);
		}
		&:nth-of-type(2) {
			transform: translateX(vw(-2)) rotate(135deg);
		}
		&:nth-of-type(2)::after {
			transform: rotate(90deg);
			background: $c-white;
		}
		&:nth-of-type(3) {
			transform: scaleY(0) translateY(10%);
		}
	}
}
</style>
