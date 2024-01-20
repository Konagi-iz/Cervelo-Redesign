<script setup>
const props = defineProps({
	category: String,
});
</script>

<template>
	<div class="lcl-bikes-head">
		<Transition name="bg">
			<img
				class="lcl-bikes-head__bg"
				v-if="category === 'road'"
				src="/assets/img/home/bikes/img_bg_road.jpg"
				alt=""
				loading="lazy"
				width="1300"
				height="355"
			/>
			<img
				class="lcl-bikes-head__bg"
				v-else-if="category === 'time-trial'"
				src="/assets/img/home/bikes/img_bg_time-trial.jpg"
				alt=""
				loading="lazy"
				width="1300"
				height="355"
			/>
			<img
				class="lcl-bikes-head__bg"
				v-else-if="category === 'off-road'"
				src="/assets/img/home/bikes/img_bg_off-road.jpg"
				alt=""
				loading="lazy"
				width="1300"
				height="355"
			/>
			<img
				class="lcl-bikes-head__bg"
				v-else
				src="/assets/img/home/bikes/img_bg_e-bike.jpg"
				alt=""
				loading="lazy"
				width="1300"
				height="355"
			/>
		</Transition>
		<!-- .lcl-bikes-head__bg -->
		<div class="lcl-bikes-head__loop-wrp">
			<Transition name="loop">
				<div class="lcl-bikes-head__loop-in" v-if="category === 'road'">
					<img class="lcl-bikes-head__loop" src="/assets/img/home/bikes/text_loop_road.svg" alt="" loading="lazy" height="108" />
					<img class="lcl-bikes-head__loop" src="/assets/img/home/bikes/text_loop_road.svg" alt="" loading="lazy" height="108" />
				</div>
				<div class="lcl-bikes-head__loop-in" v-else-if="category === 'time-trial'">
					<img class="lcl-bikes-head__loop" src="/assets/img/home/bikes/text_loop_time-trial.svg" alt="" loading="lazy" height="108" />
					<img class="lcl-bikes-head__loop" src="/assets/img/home/bikes/text_loop_time-trial.svg" alt="" loading="lazy" height="108" />
				</div>
				<div class="lcl-bikes-head__loop-in" v-else-if="category === 'off-road'">
					<img class="lcl-bikes-head__loop" src="/assets/img/home/bikes/text_loop_off-road.svg" alt="" loading="lazy" height="108" />
					<img class="lcl-bikes-head__loop" src="/assets/img/home/bikes/text_loop_off-road.svg" alt="" loading="lazy" height="108" />
				</div>
				<div class="lcl-bikes-head__loop-in" v-else>
					<img class="lcl-bikes-head__loop" src="/assets/img/home/bikes/text_loop_e-bike.svg" alt="" loading="lazy" height="108" />
					<img class="lcl-bikes-head__loop" src="/assets/img/home/bikes/text_loop_e-bike.svg" alt="" loading="lazy" height="108" />
				</div>
			</Transition>
		</div>
		<!-- .lcl-bikes-head__loop -->
		<div class="lcl-bikes-ttl">
			<h2 class="lcl-bikes-ttl__main">BIKES</h2>
			<p class="lcl-bikes-ttl__sub">肉体的な試練を<br class="dn-w" />超えたところに、<br class="dn-w" />私たちを駆り立てるものがある。</p>
		</div>
	</div>
</template>

<style lang="scss">
.lcl-bikes-head {
	position: relative;
	width: 100%;
	height: 355px;
	@include media_narrow {
		height: vw(250);
	}
	.lcl-bikes-head__bg {
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		transition: opacity 0.5s linear;
	}
	.bg-enter-from,
	.bg-leave-to {
		opacity: 0;
	}
	.lcl-bikes-head__loop-wrp {
		z-index: -1;
		position: absolute;
		top: 78px;
		left: 0;
		overflow: hidden;
		width: 100%;
		height: 120px;
		@include media_narrow {
			top: vw(64);
			height: vw(75);
		}
	}
	.lcl-bikes-head__loop-in {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		height: 100%;
		transition: transform 0.3s $e-out, opacity 0.3s $e-out;
		animation: loop-txt 20s linear infinite reverse;
		@include media_narrow {
			animation: loop-txt 25s linear infinite reverse;
		}
	}
	.lcl-bikes-head__loop {
		max-width: initial;
		height: 100%;
	}
	.loop-enter-from {
		transform: translateY(25%);
		opacity: 0;
	}
	.loop-leave-to {
		transform: translateY(-25%);
		opacity: 0;
	}

	.lcl-bikes-ttl {
		display: flex;
		flex-direction: column;
		width: 1000px;
		padding-top: 98px;
		margin-inline: auto;
		color: $c-white;
		@include media_narrow {
			align-items: center;
			flex-direction: row;
			gap: vw(12);
			width: 100%;
			padding-top: vw(78);
			padding-left: vw(26);
		}
	}
	.lcl-bikes-ttl__main {
		@include font-en;
		@include fz(64);
		font-weight: 600;
		line-height: 1;
		font-style: italic;
		@include media_narrow {
			@include fz(40);
		}
	}
	.lcl-bikes-ttl__sub {
		@include fz(12);
		font-weight: 600;
		line-height: 1.9;
		@include media_narrow {
			@include fz(10);
			line-height: 1.7;
			letter-spacing: 0.07em;
		}
	}
}
@keyframes loop-txt {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}
</style>
