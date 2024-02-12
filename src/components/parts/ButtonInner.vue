<script setup>
import IconRight from '~icons/svg/icon_right';

const props = defineProps({
	content: { default: 'VIEW MORE' },
	color: { default: 'black' },
});

const colorConvert = (color) => {
	return color == 'red' ? '#DC1405' : color == 'white' ? '#ffffff' : '#000000';
};
</script>

<template>
	<div class="btn-inner" :style="`--color: ${colorConvert(color)}`">
		<span class="btn-inner__txt">{{ content }}</span>
		<IconRight></IconRight>
	</div>
</template>

<style lang="scss">
.btn-inner {
	display: flex;
	align-items: center;
	gap: 10px;
	@include media_narrow {
		gap: vw(9);
	}
	.btn-inner__txt {
		color: var(--color);
		@include font-en;
		@include fz(14);
		font-weight: 600;
		font-style: italic;
		line-height: 1;
		white-space: nowrap;
		transition: color 0.4s ease;
		@include media_narrow {
			@include fz(13);
		}
	}
	.icon-right {
		width: 14px;
		height: auto;
		transition: transform 0.4s ease;
		@include media_narrow {
			width: vw(12);
		}
	}
	.icon-right__path {
		stroke: var(--color);
		transition: stroke 0.4s ease;
	}
}
</style>
