<script setup>
import ButtonInner from './ButtonInner.vue';

const props = defineProps({
	content: { default: 'VIEW MORE' },
	color: Array,
	btnStyle: String,
});

const colorConvert = (color) => {
	return color == 'red' ? '#DC1405' : color == 'white' ? '#ffffff' : '#000000';
};
</script>

<template>
	<div
		class="btn"
		:class="{ 'btn--border': btnStyle === 'border' }"
		:style="`--color-btn: ${colorConvert(color[0])}; --color-cnt: ${colorConvert(color[1])}; --color-hover: ${colorConvert(color[2])}`"
	>
		<ButtonInner :color="color[1]" :content="content"></ButtonInner>
	</div>
</template>

<style lang="scss">
.btn {
	border-radius: 9999px;
	padding: 14px 28px;
	width: fit-content;
	background: var(--color-btn);
	transition: background 0.3s ease-out;
	@include media_narrow {
		padding: vw(16) vw(30);
	}
	@include media_hover {
		&:hover {
			background: var(--color-hover);
		}
		&:hover .btn-inner__txt {
			color: var(--color-btn);
		}
		&:hover .icon-right {
			transform: translateX(50%);
		}
		&:hover .icon-right__path {
			stroke: var(--color-btn);
		}
	}
}
.btn--border {
	border: 2px solid var(--color-btn);
	background: transparent;
	@include media_narrow {
		border-width: vw(2);
	}
	@include media_hover {
		&:hover {
			background: var(--color-btn);
		}
		&:hover .btn-inner__txt {
			color: var(--color-hover);
		}
		&:hover .icon-right__path {
			stroke: var(--color-hover);
		}
	}
}
</style>
