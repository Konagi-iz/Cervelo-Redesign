<script setup>
const props = defineProps({
	content: { default: 'VIEW ALL' },
	color: { default: 'black' },
});

const colorConvert = (color) => {
	return color == 'red' ? '#DC1405' : color == 'white' ? '#ffffff' : '#000000';
};
</script>

<template>
	<div class="btn-inner" :style="`--color: ${colorConvert(color)}`">
		<span class="btn-inner__txt">{{ content }}</span>
		<svg class="btn-inner__icon" width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 1L5 4L2 7" stroke-width="1.5" />
		</svg>
	</div>
</template>

<style lang="scss">
.btn-inner {
	display: flex;
	align-items: center;
	gap: 10px;
	.btn-inner__txt {
		color: var(--color);
		@include font-en;
		@include fz(14);
		font-weight: 600;
		line-height: 1;
		font-style: italic;
		transition: color 0.4s ease;
	}
	.btn-inner__icon {
		width: 7px;
		height: 8px;
		transition: transform 0.4s ease;
		path {
			stroke: var(--color);
			transition: stroke 0.4s ease;
		}
	}
}
</style>
