<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
const modules = [Autoplay, EffectCreative, Pagination];
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { ref } from 'vue';

const heroSlide = ref(null);
const currentIndex = ref(1);
const onSwiper = (_swiper) => {
	heroSlide.swiper = _swiper;
	// currentIndex.value = heroSlide.swiper.activeIndex;
	// console.log(currentIndex.value);
	// console.log(heroSlide.swiper);
};

const progressCircle = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
	progressCircle.value.style.setProperty('--progress', 1 - progress);
};

const changeSwiperIndex = () => {
	if (heroSlide.swiper !== undefined) {
		currentIndex.value = heroSlide.swiper.realIndex + 1;
	}
};

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

const splitText = (str) => {
	const result = str.split('');
	let newText = '';
	for (let i = 0; i < result.length; i++) {
		newText += '<span>' + result[i] + '</span>';
	}
	return newText;
};

const navs = ref(['BIKES', 'SHOP LIST', 'ONLINE SHOP', 'SUPPORT', 'HISTORY']);
</script>

<template>
	<div class="lcl-hero">
		<Swiper
			class="lcl-hero-slides"
			@swiper="onSwiper"
			@slideChange="changeSwiperIndex"
			@autoplayTimeLeft="onAutoplayTimeLeft"
			ref="heroSlide"
			:modules="modules"
			:autoplay="{ delay: 6000 }"
			effect="creative"
			:loop="true"
			:loop-additional-slides="1"
			:pagination="{ clickable: true }"
			:speed="300"
		>
			<SwiperSlide class="lcl-hero-slides__slide" v-for="(slide, index) in slides" :key="`slide-${index}`">
				<div class="lcl-hero-slides__in">
					<img class="lcl-hero-slides__bgtxt" :src="`/assets/img/home/fv/bg_txt_${slide.type}.png`" alt="" />
					<img class="lcl-hero-slides__img" :src="`/assets/img/home/fv/img_bike_0${index + 1}.png`" :alt="`${slide.model}の画像`" />
					<div class="lcl-hero-slides__model-wrp">
						<p class="lcl-hero-slides__model-sub">Cervelo</p>
						<p class="lcl-hero-slides__model">{{ slide.model }}</p>
					</div>
					<div class="lcl-hero-slides__txts">
						<p class="lcl-hero-slides__copy" v-html="splitText(slide.copy)"></p>
						<p class="lcl-hero-slides__txt" style="white-space: pre-wrap" v-text="slide.txt"></p>
					</div>
				</div>
			</SwiperSlide>
			<div class="lcl-hero-slides__progress">
				<svg class="lcl-hero-slides__circle" viewBox="0 0 50 50" stroke="#DC1405" stroke-width="1px" fill="none" ref="progressCircle">
					<circle cx="25" cy="25" r="24"></circle>
				</svg>
				<span class="lcl-hero-slides__index">{{ currentIndex }}</span>
			</div>
		</Swiper>
		<div class="lcl-hero-foot">
			<ul class="lcl-hero-foot__nav">
				<li class="lcl-hero-foot__nav-item" v-for="nav in navs">
					<a class="lcl-hero-foot__nav-link" :href="`#${nav.replace(' ', '').toLocaleLowerCase()}`">{{ nav }}</a>
				</li>
			</ul>
			<div class="lcl-hero-foot__scroll">
				
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.lcl-hero {
	position: relative;
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
	.lcl-hero-slides__bgtxt {
		position: absolute;
		top: 0;
		left: 0;
		width: vwclamp(900);
	}
	.lcl-hero-slides__img {
		position: absolute;
		top: 0;
		left: 0;
		// transform: translateX(-30%);
		opacity: 0;
		width: pcvw(900);
		transition: opacity 0.5s $e-out;
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
		span {
			display: inline-block;
			transform: translateX(200%);
			opacity: 0;
			transition: transform 0.5s $e-out, opacity 0.5s $e-out;
			@for $i from 1 through 50 {
				&:nth-of-type(#{$i}) {
					transition-delay: calc(0.03s * ($i - 1) + 0.7s);
				}
			}
		}
	}
	.lcl-hero-slides__txt {
		transform: skewX(-10deg);
		opacity: 0;
		color: $c-red;
		font-size: vwclamp(12);
		font-weight: 600;
		line-height: 1.9;
	}
	.lcl-hero-slides__progress {
		position: absolute;
		right: vwclamp(189);
		bottom: vwclamp(120);
	}
	.lcl-hero-slides__circle {
		--progress: 0;
		width: vwclamp(50);
		height: vwclamp(50);
		stroke-dashoffset: calc(150.72 * (1 - var(--progress)));
		stroke-dasharray: 150.72;
	}
	.lcl-hero-slides__index {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: $c-red;
		@include font-en;
		@include fz(12);
		font-weight: 500;
		line-height: 1.5;
		font-style: italic;
	}
	/* swiper ------------ */
	.swiper-slide {
		opacity: 0 !important;
	}
	.swiper-slide-active {
		opacity: 1 !important;
	}
	.swiper-pagination {
		position: absolute;
		top: auto !important;
		right: vwclamp(212) !important;
		bottom: vwclamp(203) !important;
		left: auto !important;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: vwclamp(6);
		width: auto !important;
	}
	.swiper-pagination-bullet {
		display: block;
		transform: skewX(-45deg);
		opacity: 0.3;
		margin: 0 !important;
		border-radius: 0 !important;
		width: vwclamp(4);
		height: vwclamp(15);
		background: $c-red;
	}
	.swiper-pagination-bullet-active {
		opacity: 1;
	}
	/* active ------------ */
	.swiper-slide-active {
		.lcl-hero-slides__img {
			transform: translateX(0);
			opacity: 1;
			animation: img-active 3s 0.1s $e-out;
		}
		.lcl-hero-slides__model {
			animation: model-active 4s $e-out;
		}
		.lcl-hero-slides__copy {
			span {
				transform: translateX(0);
				opacity: 1;
			}
		}
		.lcl-hero-slides__txt {
			animation: txt-active 4s 1s $e-out forwards;
		}
	}
	@keyframes img-active {
		0% {
			transform: translate(-50%, 0);
			opacity: 1;
		}
		1% {
			opacity: 0;
		}
		2% {
			opacity: 1;
		}
		3% {
			opacity: 0;
		}
		4% {
			opacity: 1;
		}
		5% {
			opacity: 0;
		}
		19% {
			transform: translate(0, 0);
		}
		20% {
			transform: translate(0, 0);
			opacity: 1;
		}
		21% {
			transform: translate(0, 0);
			opacity: 0;
		}
		22% {
			transform: translate(0, 0);
			opacity: 1;
		}
		23% {
			transform: translate(0, 0);
			opacity: 0;
		}
		24% {
			transform: translate(0, 0);
			opacity: 1;
		}
		25% {
			transform: translate(0, 0);
			opacity: 1;
		}
		100% {
			transform: translate(0, 0);
			opacity: 1;
		}
	}
	@keyframes model-active {
		0% {
			transform: scale(5) translate(-50%, 20%);
			opacity: 1;
		}
		1% {
			opacity: 0;
		}
		2% {
			opacity: 1;
		}
		3% {
			opacity: 0;
		}
		4% {
			opacity: 1;
		}
		5% {
			opacity: 0;
		}
		19% {
			transform: scale(5) translate(0, 20%);
		}
		20% {
			transform: scale(5) translate(0, 0);
			opacity: 1;
		}
		21% {
			transform: scale(5) translate(0, 0);
			opacity: 0;
		}
		22% {
			transform: scale(5) translate(0, 0);
			opacity: 1;
		}
		23% {
			transform: scale(5) translate(0, 0);
			opacity: 0;
		}
		24% {
			transform: scale(5) translate(0, 0);
			opacity: 1;
		}
		25% {
			transform: scale(1) translate(0, 0);
			opacity: 1;
		}
		100% {
			transform: scale(1) translate(0, 0);
			opacity: 1;
		}
	}
	@keyframes txt-active {
		0% {
			opacity: 0;
		}
		1% {
			opacity: 1;
		}
		2% {
			opacity: 0;
		}
		3% {
			opacity: 1;
		}
		4% {
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		6% {
			opacity: 0;
		}
		7% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
	/* prev ------------ */
	.swiper-slide-prev {
		.lcl-hero-slides__img {
			transform: translateX(30%);
		}
	}
	/* foot ------------ */
	.lcl-hero-foot {
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		width: 100%;
		height: vwclamp(64);
	}
	.lcl-hero-foot__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: vwclamp(73);
		width: vwclamp(689);
		height: 100%;
	}
	.lcl-hero-foot__nav-item {
	}
	.lcl-hero-foot__nav-link {
		color: $c-darkgray;
		@include font-en;
		@include fz(10);
		font-weight: 300;
		line-height: 1.2;
		font-style: italic;
	}
}
</style>
