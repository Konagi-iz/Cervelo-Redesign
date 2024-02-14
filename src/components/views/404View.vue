<script setup>
import { onMounted, getCurrentInstance } from 'vue';

const emit = defineEmits(['childMounted']);

/* マウントされたら親に通知 ------------ */
onMounted(() => {
	const instance = getCurrentInstance();
	if (instance && instance.parent) {
		instance.parent.emit('child-mounted');
	}
});
</script>

<template>
	<section class="lcl-404">
		<h2 class="lcl-404__ttl">404</h2>
		<p class="lcl-404__en">Page Not Found</p>
		<p class="lcl-404__jp">
			大変ご迷惑をおかけしますが、
			<br class="dn-w" />
			このページは削除された可能性があります。
		</p>
	</section>
</template>

<style scoped lang="scss">
.lcl-404 {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100dvh;
	background: url('/assets/img/common/bg_grid.png') repeat left top / 93px, $c-lightgray;
	.lcl-404__ttl {
		color: $c-red;
		@include font-en;
		@include fz(262);
		font-weight: 600;
		font-style: italic;
		line-height: 1;
		@include media_narrow {
			@include fz(160);
		}
	}
	.lcl-404__en {
		padding: 3px 52px;
		width: fit-content;
		background: $c-red;
		color: $c-white;
		@include font-en;
		@include fz(32);
		font-weight: 600;
		font-style: italic;
		line-height: 1.2;
		@include media_narrow {
			padding: vw(2) vw(32);
			@include fz(22);
		}
	}
	.lcl-404__jp {
		margin-top: 35px;
		@include fz(14);
		font-weight: 600;
		line-height: 1.7;
		letter-spacing: 0.07em;
		text-align: center;
	}
}
</style>
