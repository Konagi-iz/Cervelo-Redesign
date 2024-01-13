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
	<div class="btn-inner">
		<span class="btn-inner__txt" :style="`color: ${colorConvert(color)}`">{{ content }}</span>
		<svg class="btn-inner__icon" width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 1L5 4L2 7" :stroke="colorConvert(color)" stroke-width="1.5" />
		</svg>
	</div>
</template>

<style lang="scss">
.btn-inner {
	display: flex;
	align-items: center;
	gap: 10px;
	.btn-inner__txt {
		@include font-en;
		@include fz(14);
		font-weight: 600;
		line-height: 1;
		font-style: italic;
	}
	.btn-inner__icon {
		width: 7px;
		height: 8px;
	}
}
</style>
