<script setup>
import Button from '@/components/parts/Button.vue';
</script>

<template>
	<section class="lcl-history" id="history">
		<div class="lcl-history-loop">
			<div class="lcl-history-loop__item">
				<img
					class="lcl-history-loop__img"
					src="/assets/img/home/history/img_01.jpg"
					alt="今までのCerveloバイクの写真"
					loading="lazy"
					width="2904"
					height="242"
				/>
				<img
					class="lcl-history-loop__img"
					src="/assets/img/home/history/img_01.jpg"
					alt="今までのCerveloバイクの写真"
					loading="lazy"
					width="2904"
					height="242"
				/>
			</div>
			<div class="lcl-history-loop__item">
				<img
					class="lcl-history-loop__img"
					src="/assets/img/home/history/img_02.jpg"
					alt="今までのCerveloバイクの写真"
					loading="lazy"
					width="2904"
					height="242"
				/>
				<img
					class="lcl-history-loop__img"
					src="/assets/img/home/history/img_02.jpg"
					alt="今までのCerveloバイクの写真"
					loading="lazy"
					width="2904"
					height="242"
				/>
			</div>
		</div>
		<!-- .lcl-history-loop -->
		<div class="lcl-history__in">
			<div class="lcl-history-cnt">
				<h2 class="lcl-history-cnt__ttl">HISTORY</h2>
				<p class="lcl-history-cnt__txt">
					卓越のテクノロジーをパフォーマンスに反映する
					<br />
					高級バイクブランド
				</p>
				<router-link :to="{ name: 'history' }">
					<Button :color="['white', 'white', 'black']" btnStyle="border"></Button>
				</router-link>
			</div>
			<!-- .lcl-history-cnt -->
			<img class="lcl-history__timeline" src="/assets/img/home/history/img_timeline.png" alt="1995 2003 2009 2010..." />
		</div>
		<!-- .lcl-history__in -->
	</section>
</template>

<style lang="scss">
.lcl-history {
	position: relative;
	margin-top: 120px;
	width: 100%;
	height: 484px;
	background: linear-gradient(278deg, rgba(0, 0, 0, 0.95) 50.36%, rgba(0, 0, 0, 0) 100%);
	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		transform: translateX(100%);
		width: calc((100% - 1300px) / 2);
		height: 100%;
		background: $c-black;
		/*---------------- after */
	}
	.lcl-history-loop {
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		width: 100%;
	}
	.lcl-history-loop__item {
		display: flex;
		width: fit-content;
		animation: loop 50s linear infinite;
		&:nth-of-type(2) {
      animation-direction: reverse;
		}
	}
	.lcl-history-loop__img {
		max-width: initial;
		height: 242px;
	}

	.lcl-history__in {
		display: flex;
		align-items: flex-end;
		flex-direction: column;
		gap: 42px;
		margin-inline: auto;
		padding-right: 29px;
		width: 1000px;
	}
	.lcl-history-cnt {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 144px;
		color: $c-white;
	}
	.lcl-history-cnt__ttl {
		@include font-en;
		@include fz(64);
		font-weight: 600;
		line-height: 1.1;
		font-style: italic;
	}
	.lcl-history-cnt__txt {
		@include txt-basic--bold;
	}
	.lcl-history__timeline {
		width: 307px;
	}
}

@keyframes loop {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}
</style>
