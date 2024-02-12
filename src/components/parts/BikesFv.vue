<script setup>
const props = defineProps({
	ttl: String,
	ttlBig: Boolean,
	description: String,
});
</script>

<template>
	<section class="bikeFv">
		<div v-if="ttlBig" class="bikeFv__bg dn-n"></div>
		<img
			v-if="ttl === 'BIKES'"
			class="bikeFv__vis"
			src="/assets/img/bikes/img_fv.jpg"
			alt="ロードバイクで走っている男性の写真"
			width="1518"
			height="1246"
		/>
		<img
			v-if="ttl === 'ROAD'"
			class="bikeFv__vis"
			src="/assets/img/bikes/road/img_fv.jpg"
			alt="ロードバイクで走っている男性の写真"
			width="1518"
			height="1246"
		/>
		<img
			v-if="ttl === 'TIME TRIAL'"
			class="bikeFv__vis"
			src="/assets/img/bikes/time-trial/img_fv.jpg"
			alt="タイムトライアルバイクの写真"
			width="1518"
			height="1246"
		/>
		<img
			v-if="ttl === 'OFF-ROAD'"
			class="bikeFv__vis"
			src="/assets/img/bikes/off-road/img_fv.jpg"
			alt="グラベルロードで山の中を走っている女性の写真"
			width="1518"
			height="1246"
		/>
		<img
			v-if="ttl === 'E-BIKE'"
			class="bikeFv__vis"
			src="/assets/img/bikes/e-bike/img_fv.jpg"
			alt="E-Bike Rouvidaの写真"
			width="1518"
			height="1246"
		/>
		<!-- .bikeFv__vis -->

		<p v-if="ttlBig" class="bikeFv__ttlbig dn-n">{{ ttl }}</p>
		<!-- .bikeFv__ttlbig -->

		<div class="bikeFv__txts">
			<h2 class="bikeFv__ttl">{{ ttl }}</h2>
			<!-- .bikeFv__ttl -->

			<p v-if="ttl === 'BIKES'" class="bikeFv__ttlsub">ROAD / TIME TRIAL / OFF-ROAD / E-BIKE</p>
			<p v-else class="bikeFv__ttlsub">{{ `BIKES / ${ttl}` }}</p>
			<!-- .bikeFv__ttlsub -->

			<p class="bikeFv__desc" v-html="description"></p>
		</div>
		<!-- .bikeFv__txts -->
	</section>
</template>

<style scoped lang="scss">
.bikeFv {
	position: relative;
	width: 100%;
	.bikeFv__bg {
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 236px;
		background: $c-red;
	}
	.bikeFv__vis {
		display: block;
		margin-inline: auto 0;
		width: max(609px, 609px + ((100% - 1000px) / 2));
		height: 623px;
		object-fit: cover;
		@include media_narrow {
			height: vw(391);
		}
	}
	.bikeFv__txts {
		@include media_wide {
			position: absolute;
			top: 326px;
			left: calc((100% - 1000px) / 2);
		}
		@include media_narrow {
			margin-top: vw(-55);
			padding-inline: vw(15);
		}
	}
	.bikeFv__ttlbig {
		position: absolute;
		top: 0;
		right: -57px;
		color: $c-red;
		@include font-en;
		@include fz(168);
		font-weight: 600;
		font-style: italic;
		line-height: 1;
		letter-spacing: 0.03em;
		writing-mode: vertical-rl;
		white-space: nowrap;
	}
	.bikeFv__ttl {
		color: $c-red;
		@include font-en;
		@include fz(72);
		font-weight: 600;
		font-style: italic;
		line-height: 1;
		letter-spacing: 0.03em;
		@include media_narrow {
			position: relative;
			padding-top: vw(32);
			padding-right: vw(42);
			width: fit-content;
			background: $c-white;
			@include fz(48);
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				transform: translateX(-100%);
				width: vw(15);
				height: 100%;
				background: $c-white;
				/*---------------- after */
			}
		}
	}
	.bikeFv__ttlsub {
		margin-top: 10px;
		@include font-en;
		@include fz(12);
		font-weight: 500;
		font-style: italic;
		line-height: 1.6;
		letter-spacing: 0.15em;
		@include media_narrow {
			margin-top: vw(10);
			@include fz(10);
		}
	}
	.bikeFv__desc {
		color: $c-red;
		@include fz(12);
		font-weight: 600;
		line-height: 2.2;
		letter-spacing: 0.2em;
		@include media_wide {
			box-sizing: content-box;
			margin-top: 22px;
			padding-top: 60px;
			padding-right: 60px;
			width: 502px;
			min-height: 114px;
			background: $c-white;
		}
		@include media_narrow {
			margin-top: vw(46);
			line-height: 2.3;
			letter-spacing: 0.08em;
		}
	}
}
</style>
