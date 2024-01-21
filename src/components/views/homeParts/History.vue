<script setup>
import Button from '@/components/parts/Button.vue';
</script>

<template>
	<section class="lcl-history scr-anin" id="history">
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
	width: 100%;
	background: linear-gradient(278deg, rgba(0, 0, 0, 0.95) 25%, transparent 50%);
	background-size: 200%;
	background-position: 0%;
	height: 484px;
	transition: background-position 1.5s $e-out;
	@include media_narrow {
		height: vw(682);
		background: linear-gradient(17deg, #000 50.36%, rgba(0, 0, 0, 0) 100%);
		background: linear-gradient(17deg, rgba(0, 0, 0, 1) 25%, transparent 50%);
		background-size: 100% 200%;
	}
	&::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $c-black;
		/*---------------- before */
	}
	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		transform: translateX(100%);
		width: calc((100% - 1300px) / 2);
		height: 100%;
		background: $c-black;
		@include media_narrow {
			display: none;
		}
		/*---------------- after */
	}
	&.scr-anin--on {
		background-position: 100%;
		@include media_narrow {
			background-position: 0% 100%;
		}
	}
	&.scr-anin--on .lcl-history__in {
		transform: translateY(0);
		opacity: 1;
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
		@include media_narrow {
			height: vw(190);
		}
	}

	.lcl-history__in {
		transform: translateY(20%);
		opacity: 0;
		display: flex;
		align-items: flex-end;
		flex-direction: column;
		gap: 42px;
		margin-inline: auto;
		padding-top: 141px;
		width: 1000px;
		transition: transform 1.4s $e-out, opacity 1.4s $e-out;
		@include media_wide {
			padding-right: 29px;
		}
		@include media_narrow {
			align-items: center;
			flex-direction: column-reverse;
			gap: vw(34);
			padding-top: vw(340);
			width: 100%;
		}
	}
	.lcl-history-cnt {
		display: flex;
		flex-direction: column;
		gap: 20px;
		color: $c-white;
		@include media_narrow {
			gap: vw(20);
		}
	}
	.lcl-history-cnt__ttl {
		@include font-en;
		@include fz(64);
		font-weight: 600;
		line-height: 1.1;
		font-style: italic;
		@include media_narrow {
			@include fz(58);
		}
	}
	.lcl-history-cnt__txt {
		@include txt-basic--bold;
	}
	.lcl-history__timeline {
		width: 307px;
		@include media_narrow {
			width: vw(307);
		}
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
