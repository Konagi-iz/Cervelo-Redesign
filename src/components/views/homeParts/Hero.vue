<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const modules = [Autoplay, EffectFade, Pagination];

/* スライダー設定 ------------ */
const heroSlide = ref(null);
const currentIndex = ref(1);
const onSwiper = (swiper) => {
	heroSlide.swiper = swiper;
	swiper.slideNext(0, () => {});
};

/* js-load--onが付与された時にスライド開始 ------------ */
const hero = ref(null);
onMounted(() => {
	const observer = new MutationObserver(() => {
		setTimeout(() => {
			heroSlide.swiper.slidePrev(0, () => {});
		}, 800);
	});
	observer.observe(hero.value, {
		attributes: true,
		attributeFilter: ['class'],
	});
});

// スライドのプログレス
const progressCircle = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
	progressCircle.value.style.setProperty('--progress', 1 - progress);
};

// 現在のスライドのindexを取得
const changeSwiperIndex = () => {
	if (heroSlide.swiper !== undefined) {
		currentIndex.value = heroSlide.swiper.realIndex + 1;
	}
};

/* テキストを分割 ------------ */
const splitText = (str) => {
	const result = str.split('');
	let newText = '';
	for (let i = 0; i < result.length; i++) {
		newText += '<span>' + result[i] + '</span>';
	}
	return newText;
};

/* スライダー情報 ------------ */
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
		model: 'SOLOIST',
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

/* lcl-hero-nav ------------ */
const navs = ref(['BIKES', 'SHOP LIST', 'ONLINE SHOP', 'SUPPORT', 'HISTORY']);
</script>

<template>
	<div ref="hero" class="lcl-hero js-load">
		<Swiper
			ref="heroSlide"
			class="lcl-hero-slides"
			@swiper="onSwiper"
			@slideChange="changeSwiperIndex"
			@autoplayTimeLeft="onAutoplayTimeLeft"
			:modules="modules"
			:autoplay="{ delay: 10000, disableOnInteraction: false, waitForTransition: false }"
			effect="fade"
			:loop="true"
			:loop-additional-slides="1"
			:pagination="{ clickable: true }"
			:speed="600"
		>
			<SwiperSlide class="lcl-hero-slides__slide" v-for="(slide, index) in slides" :key="`slide-${index}`">
				<a class="lcl-hero-slides__link" href="#">
					<div class="lcl-hero-slides__bg"></div>
					<img
						class="lcl-hero-slides__bgtxt"
						:src="`/assets/img/home/fv/bg_txt_${slide.type}.png`"
						alt=""
						width="1237"
						height="685
						"
					/>
					<div class="lcl-hero-slides__in">
						<img
							class="lcl-hero-slides__img"
							:src="`/assets/img/home/fv/img_bike_0${index + 1}.png`"
							:alt="`${slide.model}の画像`"
							width="900"
							height="579"
						/>
						<div class="lcl-hero-slides__model-wrp">
							<p class="lcl-hero-slides__model-sub">Model :</p>
							<p class="lcl-hero-slides__model">{{ slide.model }}</p>
						</div>
						<div class="lcl-hero-slides__txts">
							<p class="lcl-hero-slides__copy" v-html="splitText(slide.copy)"></p>
							<p class="lcl-hero-slides__txt" v-text="slide.txt"></p>
						</div>
					</div>
				</a>
			</SwiperSlide>
			<div class="lcl-hero-slides__progress">
				<svg class="lcl-hero-slides__circle" viewBox="0 0 50 50" stroke="#DC1405" stroke-width="1px" fill="none" ref="progressCircle">
					<circle cx="25" cy="25" r="24"></circle>
				</svg>
				<span class="lcl-hero-slides__index">{{ `0${currentIndex}` }}</span>
			</div>
		</Swiper>
		<!-- .swiper -->
		<div class="lcl-hero-foot js-load">
			<div class="lcl-hero-scroll">
				<svg class="lcl-hero-scroll__icon" width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6 5.33965L10.9917 0.5L12 1.68281L6 7.5L2.70212e-07 1.68281L1.00825 0.5L6 5.33965Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6 15.3397L1.00825 10.5L0 11.6828L6 17.5L12 11.6828L10.9917 10.5L6 15.3397Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6 25.3397L10.9917 20.5L12 21.6828L6 27.5L2.70212e-07 21.6828L1.00825 20.5L6 25.3397Z"
						fill="white"
					/>
				</svg>
				<p class="lcl-hero-scroll__txt">SCROLL</p>
			</div>
			<!-- .lcl-hero-scroll -->
			<ul class="lcl-hero-nav">
				<li class="lcl-hero-nav__item" v-for="nav in navs">
					<a class="lcl-hero-nav__link" v-scroll-to="`#${nav.replace(' ', '').toLocaleLowerCase()}`">{{ nav }}</a>
				</li>
			</ul>
			<!-- .lcl-hero-nav -->
		</div>
	</div>
</template>

<style scoped lang="scss">
.lcl-hero {
	position: relative;
	width: 100%;
	height: max(100vh, 730px);
	background: url('/assets/img/common/bg_grid.png') repeat left top / 93px, $c-lightgray;
	@include media_narrow {
		height: 100dvh;
		background-size: vw(93);
	}
	.lcl-hero-slides {
		width: 100%;
		height: 100%;
	}
	.lcl-hero-slides__slide {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.lcl-hero-slides__bg {
		position: absolute;
		top: 0;
		left: 0;
		clip-path: inset(0 0 0 0);
		opacity: 1;
		width: 100%;
		height: 100%;
		background: $c-red;
		transition: clip-path 0.4s 0.7s $e-out, opacity 0.3s ease;
	}
	.lcl-hero-slides__bgtxt {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(-7%, -50%);
		opacity: 0;
		height: vwclamp(685);
		transition: transform 0.5s $e-out, opacity 0.5s $e-out;
		transition-delay: 1.2s;
		@include media_narrow {
			max-width: initial;
			height: vw(437);
		}
	}
	.lcl-hero-slides__in {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: vwclamp(1174);
		height: vwclamp(579);
		@include media_narrow {
			width: 100%;
			height: vw(483);
		}
	}
	.lcl-hero-slides__img {
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		width: vwclamp(900);
		transition: opacity 1s 0.9s ease;
		@include media_narrow {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
		}
	}
	.lcl-hero-slides__model-wrp {
		position: absolute;
		top: vwclamp(64);
		left: vwclamp(97);
		@include media_narrow {
			top: vw(340);
			left: vw(15);
		}
	}
	.lcl-hero-slides__model-sub {
		display: block;
		transform: translateX(-10%);
		opacity: 0;
		color: $c-red;
		@include font-en;
		font-size: vwclamp(14);
		font-weight: 400;
		letter-spacing: 0.05em;
		line-height: 1.2;
		font-style: italic;
		transition: transform 0.5s $e-out, opacity 0.4s $e-out;
		transition-delay: 1.7s;
		@include media_narrow {
			@include fz(14);
		}
	}
	.lcl-hero-slides__model {
		opacity: 0;
		transform-origin: left;
		color: $c-red;
		@include font-en;
		font-size: vwclamp(142);
		font-weight: 700;
		line-height: 0.9;
		font-style: italic;
		@include media_narrow {
			@include fz(72);
		}
	}
	.lcl-hero-slides__txts {
		z-index: 2;
		position: absolute;
		top: vwclamp(89);
		right: vwclamp(0);
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: vwclamp(24);
		text-align: right;
		white-space: pre-wrap;
		@include media_narrow {
			top: 0;
			right: vw(15);
			gap: vw(16);
		}
	}
	.lcl-hero-slides__copy {
		transform: skewX(-10deg);
		color: $c-red;
		font-size: vwclamp(36);
		font-weight: 600;
		line-height: 1.15;
		white-space: pre-wrap;
		@include media_narrow {
			@include fz(28);
		}
		:deep(span) {
			display: inline-block;
			transform: translateX(-200%);
			opacity: 0;
			transition: transform 0.5s $e-out, opacity 0.5s $e-out;
			@for $i from 1 through 50 {
				&:nth-of-type(#{$i}) {
					transition-delay: calc(0.03s * ($i - 1) + 1.5s);
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
		line-height: 2.2;
		@include media_narrow {
			@include fz(10);
		}
	}
	.lcl-hero-slides__progress {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		@include media_wide {
			right: vwclamp(63);
			translate: 0 vwclamp(221);
		}
		@include media_narrow {
			left: vw(15);
			translate: 0 vw(222.5);
		}
	}
	.lcl-hero-slides__circle {
		--progress: 0;
		transform: rotate(-90deg);
		width: vwclamp(50);
		height: vwclamp(50);
		stroke-dashoffset: calc(150.72 * (1 - var(--progress)));
		stroke-dasharray: 150.72;
		@include media_narrow {
			width: vw(36);
			height: vw(36);
		}
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
		@include media_narrow {
			@include fz(10);
		}
	}

	/* swiper ------------ */
	:deep(.swiper-slide) {
		opacity: 0 !important;
	}
	:deep(.swiper-slide-active) {
		opacity: 1 !important;
	}
	:deep(.swiper-pagination) {
		position: absolute;
		top: 50%;
		right: vwclamp(78) !important;
		bottom: auto !important;
		left: auto !important;
		transform: translateY(-50%);
		translate: 0 vwclamp(123);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: vwclamp(6);
		width: auto !important;
		@include media_narrow {
			right: auto !important;
			left: vw(62) !important;
			translate: 0 vw(223.5);
			flex-direction: row;
			gap: vw(2);
		}
	}
	:deep(.swiper-pagination-bullet) {
		display: block;
		opacity: 0.3;
		margin: 0 !important;
		border-radius: 0 !important;
		width: vwclamp(19);
		height: vwclamp(15);
		background: url(/assets/img/home/fv/icon_pagination.svg) no-repeat left top / contain;
		@include media_narrow {
			width: vw(13);
			height: vw(10);
		}
	}
	:deep(.swiper-pagination-bullet-active) {
		opacity: 1;
	}

	/* swiper active ------------ */
	:deep(.swiper-slide-active) {
		.lcl-hero-slides__bg {
			clip-path: inset(0 0 0 100%);
			opacity: 1;
		}
		.lcl-hero-slides__bgtxt {
			transform: translate(0, -50%);
			opacity: 1;
		}
		.lcl-hero-slides__img {
			opacity: 1;
			animation: img-active 3s 0.9s $e-out;
		}
		.lcl-hero-slides__model-sub {
			transform: translateX(0);
			opacity: 1;
		}
		.lcl-hero-slides__model {
			animation: model-active 4s 0.9s $e-out forwards;
		}
		.lcl-hero-slides__copy {
			span {
				transform: translateX(0);
				opacity: 1;
			}
		}
		.lcl-hero-slides__txt {
			animation: txt-active 4s 1.8s $e-out forwards;
		}
	}

	/* foot ------------ */
	.lcl-hero-foot {
		z-index: 1;
		position: absolute;
		bottom: 0;
		left: 0;
		transform: translateY(100%);
		display: flex;
		width: 100%;
		transition: transform 1s $e-out 2.2s;
		@include media_wide {
			height: vwclamp(64);
		}
		@include media_narrow {
			flex-direction: column-reverse;
		}
		&.js-load--on {
			transform: translateY(0);
		}
	}
	.lcl-hero-scroll {
		display: flex;
		align-items: center;
		gap: vwclamp(50);
		padding-left: vwclamp(100);
		background: $c-red;
		@include media_wide {
			flex: 1;
		}
		@include media_narrow {
			gap: vw(20);
			padding-left: vw(15);
			width: vw(187);
			height: vw(44);
		}
	}
	.lcl-hero-scroll__icon {
		width: vwclamp(12);
		height: vwclamp(27);
		@include media_narrow {
			width: vw(8);
			height: vw(18);
		}
		path {
			&:nth-of-type(1) {
				animation: scroll-icon--top 1s $e-out infinite;
			}
			&:nth-of-type(2) {
				animation: scroll-icon--mid 1s $e-out infinite;
			}
			&:nth-of-type(3) {
				animation: scroll-icon--btm 1s $e-out infinite;
			}
		}
	}
	.lcl-hero-scroll__txt {
		color: $c-white;
		@include font-en;
		@include fz(10);
		font-weight: 600;
		font-style: italic;
	}
	.lcl-hero-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: vwclamp(73);
		width: vwclamp(689);
		height: 100%;
		@include media_narrow {
			padding-inline: vw(15);
			width: 100%;
			height: vw(38);
		}
	}
	.lcl-hero-nav__item {
	}
	.lcl-hero-nav__link {
		position: relative;
		display: inline-block;
		color: $c-red;
		@include font-en;
		@include fz(10);
		font-weight: 500;
		line-height: 1.2;
		font-style: italic;
		cursor: pointer;
		transition: transform 0.3s ease-out;
		@include media_narrow {
			@include fz(9);
		}
		@include media_hover {
			&:hover {
				transform: translateY(-20%);
			}
			&:hover::after {
				translate: 0 50%;
				opacity: 1;
			}
		}
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%, 100%);
			opacity: 0;
			width: vwclamp(8);
			height: vwclamp(5);
			background: url(/assets/img/home/fv/icon_down.svg) no-repeat left top / contain;
			transition: translate 0.3s ease-out, opacity 0.3s ease-out;
			/*---------------- after */
		}
	}
}

/* keyframes ------------ */
@keyframes img-active {
	0% {
		translate: -50% 0;
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
	20% {
		translate: 0 0;
		opacity: 1;
	}
	100% {
		translate: 0 0;
		opacity: 1;
	}
}
@keyframes model-active {
	0% {
		transform: scale(4) translate(-200px, 20%);
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
	19% {
		transform: scale(4) translate(0, 20%);
		opacity: 1;
	}
	20% {
		transform: scale(4) translate(0, 20%);
		opacity: 1;
	}
	21% {
		transform: scale(4) translate(0, 20%);
		opacity: 0;
	}
	22% {
		transform: scale(4) translate(0, 20%);
		opacity: 1;
	}
	23% {
		transform: scale(4) translate(0, 20%);
		opacity: 0;
	}
	24% {
		transform: scale(4) translate(0, 20%);
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
@keyframes scroll-icon--top {
	0% {
		opacity: 0.4;
	}
	25% {
		opacity: 1;
	}
	100% {
		opacity: 0.4;
	}
}
@keyframes scroll-icon--mid {
	0% {
		opacity: 0.4;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0.4;
	}
}
@keyframes scroll-icon--btm {
	0% {
		opacity: 0.4;
	}
	75% {
		opacity: 1;
	}
	100% {
		opacity: 0.4;
	}
}
</style>
