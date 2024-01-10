<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';

const slides = ref([
	{
		type: 'road',
		model: 'S5',
		copy: '紛れもなく現代最速',
		txt: 'Sシリーズを駆るライダーに共通して最も必要なこと。\nそれは、トップスピードを1秒でも長く維持し、\nそれを1mmでも遠くまで伸ばしていけるか。',
	},
	{
		type: 'road',
		model: 'R5',
		copy: '登りの先には下りがある',
		txt: 'R5の目的はただ一つ、誰よりも早く頂上へ到達すること。\nレースは通常下りで勝つことはないが、下りで負けることもある。\nヘアピンを曲がれないクライミングバイクは、\nカフェイン抜きのコーヒーのようなものだ。',
	},
	{
		type: 'road',
		model: 'Soloist',
		copy: 'S5の速さとR5の軽さを',
		txt: '軽量化とエアロダイナミクス性能のバランスを取り、\nまさに「ちょうどいい」バイクを実現しました。\nこれこそ、私たちCervéloが支持できるトレードオフです。',
	},
	{
		type: 'tt',
		model: 'P5',
		copy: 'シンプルに、より速く',
		txt: 'UCIが規定する枠内でエアロ性能に徹底的にこだわった。\nその結果、可能な限りの限界に\n挑戦したバイクが誕生した。',
	},
]);
</script>

<template>
	<div class="lcl-hero">
		<Swiper class="lcl-hero-slides">
			<SwiperSlide class="lcl-hero-slides__slide" v-for="(slide, index) in slides" :key="`slide-${index}`">
				<div class="lcl-hero-slides__in">
					<img :src="`/assets/img/home/fv/bg_txt_${slide}`" alt="" />
					<img class="lcl-hero-slides__img" :src="`/assets/img/home/fv/img_bike_0${index + 1}.png`" :alt="`${slide.model}の画像`" />
					<div class="lcl-hero-slides__model-wrp">
						<p class="lcl-hero-slides__model-sub">Cervelo</p>
						<p class="lcl-hero-slides__model">{{ slide.model }}</p>
					</div>
					<div class="lcl-hero-slides__txts">
						<p class="lcl-hero-slides__copy">{{ slide.copy }}</p>
						<p class="lcl-hero-slides__txt" style="white-space: pre-wrap" v-text="slide.txt"></p>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style lang="scss">
.lcl-hero {
	width: 100%;
	height: 100vh;
	background: url('/assets/img/bg/bg_grid.png') repeat left top, $c-lightgray;
	.lcl-hero-slides {
		width: 100%;
		height: 100%;
	}
	.lcl-hero-slides__slide {
		width: 100%;
		height: 100%;
	}
	.lcl-hero-slides__in {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: vwclamp(1174);
		height: vwclamp(579);
	}
	.lcl-hero-slides__img {
		position: absolute;
		top: 0;
		left: 0;
		width: pcvw(900);
	}
	.lcl-hero-slides__model-wrp {
		position: absolute;
		top: vwclamp(89);
		left: vwclamp(97);
	}
	.lcl-hero-slides__model-sub {
		color: $c-red;
		@include font-en;
		font-size: vwclamp(14);
		font-weight: 400;
		letter-spacing: 0.05em;
		line-height: 1.2;
		font-style: italic;
	}
	.lcl-hero-slides__model {
		color: $c-red;
		@include font-en;
		font-size: vwclamp(48);
		font-weight: 700;
		line-height: 0.9;
		font-style: italic;
	}
	.lcl-hero-slides__txts {
		position: absolute;
		top: vwclamp(89);
		right: vwclamp(43);
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: vwclamp(16);
		text-align: right;
	}
	.lcl-hero-slides__copy {
		transform: skewX(-10deg);
		color: $c-red;
		font-size: vwclamp(32);
		font-weight: 600;
		line-height: 1.8;
	}
	.lcl-hero-slides__txt {
		transform: skewX(-10deg);
		color: $c-red;
		font-size: vwclamp(12);
		font-weight: 600;
		line-height: 1.9;
	}
}
</style>
