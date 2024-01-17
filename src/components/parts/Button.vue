<script setup>
import ButtonInner from './ButtonInner.vue';

const props = defineProps({
	content: { default: 'VIEW ALL' },
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
		:style="`background: ${colorConvert(color[0])}; border-color: ${colorConvert(color[0])}`"
	>
		<ButtonInner :color="color[1]" :content="content"></ButtonInner>
	</div>
</template>

<style lang="scss">
.btn {
	border-radius: 999px;
	padding: 9px 24px;
	width: fit-content;
}
.btn--border {
	border: 1px solid transparent;
	background: transparent !important;
}
</style>
