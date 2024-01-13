<script setup>
import { ref } from 'vue';

const categorys = ref([
	{
		id: '1',
	},
]);
</script>

<template>
	<div class="lcl-bikes-head">
		<img class="lcl-bikes-head__bg" :src="`/assets/img/home/bikes/img_bg_01.jpg`" alt="" loading="lazy" width="1300" height="355" />
		<img class="lcl-bikes-head__loop" :src="`/assets/img/home/bikes/text_loop_road.svg`" alt="" loading="lazy" height="108" />
		<div class="lcl-bikes-ttl">
			<h2 class="lcl-bikes-ttl__main">BIKES</h2>
			<p class="lcl-bikes-ttl__sub">肉体的な試練を超えたところに、私たちを駆り立てるものがある。</p>
		</div>
	</div>
</template>

<style lang="scss">
.lcl-bikes-head {
	position: relative;
	width: 100%;
	height: 355px;
	.lcl-bikes-head__bg {
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.lcl-bikes-head__loop {
		z-index: -1;
		position: absolute;
		top: 78px;
		left: 0;
		max-width: initial;
		height: 120px;
		animation: loop-txt 20s linear infinite;
	}
	.lcl-bikes-head__loop--reverse {
		animation: loop-txt 20s linear infinite alternate;
	}
	.lcl-bikes-ttl {
		width: 1000px;
		padding-top: 98px;
		margin-inline: auto;
		color: $c-white;
	}
	.lcl-bikes-ttl__main {
		@include font-en;
		@include fz(64);
		font-weight: 600;
		line-height: 1;
		font-style: italic;
	}
	.lcl-bikes-ttl__sub {
		@include fz(12);
		font-weight: 600;
		line-height: 1.9;
	}
}
@keyframes loop-txt {
	0% {
		transform: translateX(0);
	}
	0% {
		transform: translateX(-50%);
	}
}
</style>
