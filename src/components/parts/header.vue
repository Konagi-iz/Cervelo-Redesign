<script setup>
import Logo from '~icons/svg/logo';
import LogoMini from '~icons/svg/logo_mini';
import IconRight from '~icons/svg/icon_right';
import IconLeft from '~icons/svg/icon_left';
import Menu from '@/components/parts/Menu.vue';
import { ref, watch } from 'vue';
import router from '../../router';
import { useRoute } from 'vue-router';

const props = defineProps(['w']);

/* ナビゲーション ------------ */
const navs = ref(['history', 'shop list', 'support', 'news']);
const navChilds = ref([
	{
		category: 'ROAD',
		items: ['R5', 'S5', 'Soloist', 'Caledonia-5', 'Caledonia'],
	},
	{
		category: 'TIME TRIAL',
		items: ['P5', 'P-Series'],
	},
	{
		category: 'OFF-ROAD',
		items: ['R5-CX', 'Áspero-5', 'Áspero', 'ZHT-5', 'ZFS-5'],
	},
	{
		category: 'E-BIKE',
		items: ['Rouvida'],
	},
]);

/* スクロールしたらヘッダーが小さくなる ------------ */
window.addEventListener('scroll', () => {
	headerCompact();
});

function headerCompact() {
	const h = window.innerHeight;
	const scroll = window.scrollY;
	const header = document.getElementById('header');
	if (scroll > h) {
		header.classList.add('header--scrolled');
	} else {
		header.classList.remove('header--scrolled');
	}
}

/* メニュートグル ------------ */
const menu = ref(null);
const nav = ref(null);

function menuToggle() {
	menu.value.menu.classList.toggle('menu--active');
	nav.value.classList.toggle('nav--active');
	pages.value = '';

	const body = document.body;
	if (getComputedStyle(body).overflowY === 'hidden') {
		body.style.overflowY = '';
	} else {
		body.style.overflowY = 'hidden';
	}
}

function menuClose() {
	menu.value.menu.classList.remove('menu--active');
	nav.value.classList.remove('nav--active');
	pages.value = '';
	const body = document.body;
	body.style.overflowY = '';
}

// ルートが変わったらメニューを閉じる
const route = useRoute();
watch(route, () => {
	menuClose();
});

/* SP版ナビゲーション ------------ */
const pages = ref(null);

let isSp = props.w <= 677 ? true : false;
window.addEventListener('resize', () => {
	isSp = props.w <= 677 ? true : false;
});

function preventLink(event) {
	if (isSp) {
		event.preventDefault();
	}
}

function pageSwitch(page) {
	if (isSp) {
		pages.value = page;
	}
}
</script>

<template>
	<header id="header" :class="{ 'js-load': router.currentRoute.value.name === 'home' }">
		<router-link class="header__logo-wrp" :to="{ name: 'home' }" v-scroll-to="'#main'">
			<h1 class="header__ttl">
				<Logo class="header__logo"></Logo>
				<LogoMini class="header__logo--mini"></LogoMini>
			</h1>
		</router-link>

		<Menu ref="menu" @click="menuToggle"></Menu>

		<nav ref="nav" class="nav">
			<ul class="nav-list">
				<li class="nav-list__item">
					<router-link :to="{ name: 'bikes' }" class="nav-list__link">
						<span @click="preventLink" v-on:click="pageSwitch('bikes')" class="nav-list__ttl">BIKES</span>
						<IconRight @click="preventLink" v-on:click="pageSwitch('bikes')" class="dn-w"></IconRight>
					</router-link>
					<!-- .nav-list__links -->

					<div class="nav-child nav-page" :class="{ 'nav-page--active': pages !== '' }">
						<button @click="pageSwitch('')" class="nav-back dn-w">
							<IconLeft></IconLeft>
							<span class="nav-back__txt">BACK</span>
						</button>
						<!-- .nav-back -->
						<router-link :to="{ name: 'bikes' }" class="nav-ttl dn-w">BIKES</router-link>
						<ul class="nav-child-list">
							<li class="nav-child-list__item" v-for="navChild in navChilds">
								<router-link to="" class="nav-child-list__link">
									<span @click="preventLink" v-on:click="pageSwitch(navChild.category)" class="nav-child-list__ttl">
										{{ navChild.category }}
									</span>
									<IconRight @click="preventLink" v-on:click="pageSwitch(navChild.category)" class="dn-w"></IconRight>
								</router-link>
								<!-- .nav-child-list-list__ttl -->

								<div class="nav-product nav-page" :class="{ 'nav-page--active': pages === navChild.category }">
									<button @click="pageSwitch('bikes')" class="nav-back dn-w">
										<IconLeft></IconLeft>
										<span class="nav-back__txt">BACK</span>
									</button>
									<!-- .nav-back -->
									<router-link to="" class="nav-ttl dn-w">{{ navChild.category }}</router-link>
									<ul class="nav-product-list">
										<li class="nav-product-list__item" v-for="item in navChild.items">
											<router-link to="" class="nav-product-list__link">{{ item }}</router-link>
										</li>
										<!-- .nav-product-list__item -->
									</ul>
									<!-- .nav-product-list -->
								</div>
								<!-- .nav-product -->
							</li>
							<!-- .nav-child-list__item -->
						</ul>
						<!-- .nav-child-list -->
					</div>
					<!-- .nav-child -->
				</li>
				<!-- .nav-list__item -->

				<li class="nav-list__item" v-for="nav in navs">
					<router-link class="nav-list__link" :to="{ name: nav }">
						<span class="nav-list__ttl">{{ nav.toUpperCase() }}</span>
					</router-link>
				</li>
				<!-- .nav-list__item -->
			</ul>
			<!-- .nav-list -->
		</nav>
		<!-- .nav -->
		<div class="nav-loop-wrp">
			<div class="nav-loop dn-w">
				<div class="nav-loop__in">
					<img class="nav-loop__item" src="/assets/img/header/img_loop.svg" alt="Cervelo Cervelo" width="580" height="39" />
					<img class="nav-loop__item" src="/assets/img/header/img_loop.svg" alt="Cervelo Cervelo" width="580" height="39" />
				</div>
			</div>
		</div>
	</header>
	<!-- .header -->
</template>

<style lang="scss">
#header {
	z-index: 999;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	width: fit-content;
	height: 64px;
	transition: transform 1s $e-out 2.2s;
	@include media_narrow {
		justify-content: space-between;
		width: 100%;
		height: vw(56);
		transition: transform 1s $e-out 2.2s, height 0.5s $e-out, background 0.5s $e-out;
	}
	&.js-load {
		transform: translateY(-100%);
	}
	&.js-load--on {
		transform: translateY(0);
	}
	.header__logo-wrp {
		z-index: 999;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 190px;
		height: 100%;
		background: $c-red;
		transition: width 0.5s $e-out;
		@include media_narrow {
			width: 160px;
		}
	}
	.header__logo {
		translate: 0 0;
		width: 90px;
		height: auto;
		transition: opacity 0.4s $e-out, translate 0.4s $e-out;
		@include media_narrow {
			width: vw(90);
		}
	}
	.header__logo--mini {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		translate: 20px 0;
		opacity: 0;
		width: 22px;
		height: auto;
		transition: opacity 0.4s $e-out, translate 0.4s $e-out;
		@include media_narrow {
			width: vw(22);
		}
	}

	/* nav ------------ */
	.nav {
		height: 100%;
		background: $c-darkgray;
		transition: background 0.4s $e-out, clip-path 0.6s $e-out;
		@include media_wide {
			padding-inline: 50px;
		}
		@include media_narrow {
			z-index: 900;
			position: fixed;
			top: 0;
			left: 0;
			clip-path: polygon(0 0, 0 vw(56), vw(160) vw(56), vw(160) 0);
			width: 100%;
			height: 100dvh;
			background: $c-red;
		}
	}
	.nav-list {
		display: flex;
		height: 100%;
		@include media_wide {
			align-items: center;
			gap: 35px;
		}
		@include media_narrow {
			flex-direction: column;
			margin-top: vw(111);
			padding-inline: vw(15);
		}
	}
	.nav-list__item {
		position: relative;
		@include media_wide {
			height: 100%;
		}
		@include media_narrow {
			padding: vw(10) vw(15);
		}
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			transform: scaleY(0);
			transform-origin: bottom;
			width: 100%;
			height: 4px;
			background: $c-white;
			transition: transform 0.3s $e-inOut;
			@include media_narrow {
				display: none;
			}
			/*---------------- after */
		}
		@include media_hover {
			&:has(.nav-child-list):hover .nav-child-list {
				opacity: 1;
				visibility: visible;
			}
			&:hover::after {
				transform: scaleY(1);
			}
		}
		&:has(.nav-list__link.router-link-active)::after {
			transform: scaleY(1);
		}
	}
	.nav-list__link {
		height: 100%;
		color: $c-white;
		@include font-en;
		@include fz(12);
		font-weight: 600;
		line-height: 1.5;
		font-style: italic;
		transition: color 0.4s $e-out;
		@include media_wide {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		@include media_narrow {
			display: flex;
			align-items: center;
			justify-content: space-between;
			transform: translateY(-100%);
			clip-path: inset(100% 0 0 0);
			transition: transform 0.5s $e-out 0s, clip-path 0.5s $e-out;
			@include fz(32);
		}
		.icon-right {
			width: vw(20);
			height: auto;
		}
	}
	.nav-list__ttl {
		@include media_narrow {
			flex: 1;
		}
	}

	/* nav--active ------------ */
	.nav--active {
		clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
		.nav-list__item {
			@for $i from 1 through 5 {
				&:nth-of-type(#{$i}) .nav-list__link {
					transition-delay: #{0.06 * ($i - 1) + 0.3}s;
				}
			}
		}
		.nav-list__link {
			transform: translateY(0);
			clip-path: inset(0 0 0 0);
		}
	}

	.nav-page {
		@include media_narrow {
			transform: translateX(20%);
			clip-path: inset(0 0 0 100%);
			transition: transform 0.5s $e-out, clip-path 0.5s $e-out;
		}
	}
	.nav-page--active {
		@include media_narrow {
			transform: translateX(0);
			clip-path: inset(0 0 0 0);
		}
	}
	.nav-back {
		@include media_narrow {
			display: flex;
			align-items: center;
			gap: vw(14);
			padding-left: vw(15);
		}
	}
	.nav-back__txt {
		color: $c-white;
		@include font-en;
		@include fz(14);
		font-weight: 600;
		line-height: 1.5;
		font-style: italic;
	}
	.nav-ttl {
		@include media_narrow {
			display: inline-block;
			margin-top: vw(60);
			padding-left: vw(15);
			color: $c-white;
			@include font-en;
			@include fz(12);
			font-weight: 500;
			line-height: 1.5;
			font-style: italic;
		}
	}

	/* mega drop menu ------------ */
	.nav-child {
		@include media_narrow {
			z-index: 999;
			position: fixed;
			top: 0;
			left: 0;
			padding-top: vw(133);
			padding-inline: vw(15);
			width: 100%;
			height: 100dvh;
			background: $c-red;
		}
	}
	.nav-child-list {
		display: flex;
		transition: opacity 0.4s ease, visibility 0.4s ease;
		@include media_wide {
			z-index: -1;
			position: absolute;
			bottom: 0;
			left: -50px;
			transform: translateY(100%);
			opacity: 0;
			box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
			visibility: hidden;
			gap: 75px;
			padding: 50px 120px;
			background: $c-white;
		}
		@include media_narrow {
			flex-direction: column;
			margin-top: vw(10);
		}
	}
	.nav-child-list__item {
		display: flex;
		flex-direction: column;
		@include media_narrow {
			padding: vw(10) vw(15);
		}
	}
	.nav-child-list__link {
		@include font-en;
		@include fz(16);
		font-weight: 700;
		line-height: 1.5;
		font-style: italic;
		white-space: nowrap;
		transition: color 0.15s ease-out;
		@include media_wide {
			margin-bottom: 25px;
		}
		@include media_narrow {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: $c-white;
			@include fz(32);
			font-weight: 600;
		}
		@include media_hover {
			&:hover {
				color: $c-red;
			}
		}
		.nav-child-list__ttl {
			flex: 1;
		}
		.icon-right {
			width: vw(20);
			height: auto;
		}
	}

	.nav-product {
		@include media_narrow {
			z-index: 999;
			position: fixed;
			top: 0;
			left: 0;
			padding-top: vw(133);
			padding-inline: vw(15);
			width: 100%;
			height: 100dvh;
			background: $c-red;
		}
	}
	.nav-product-list {
		display: flex;
		flex-direction: column;
		@include media_wide {
			gap: 13px;
		}
	}
	.nav-product-list__item {
		@include media_narrow {
			padding: vw(10) vw(15);
		}
	}
	.nav-product-list__link {
		display: block;
		@include font-en;
		@include fz(14);
		font-weight: 500;
		line-height: 1.3;
		white-space: nowrap;
		transition: color 0.15s ease-out;
		@include media_narrow {
			flex: 1;
			color: $c-white;
			@include fz(24);
			font-weight: 600;
			line-height: 1.5;
			font-style: italic;
		}
		@include media_hover {
			&:hover {
				color: $c-red;
			}
		}
	}

	/* nav-loop ------------ */
	.nav-loop-wrp {
		z-index: 999;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100dvh;
		pointer-events: none;
	}
	.nav-loop {
		position: absolute;
		bottom: vw(26);
		left: 0;
		clip-path: inset(0 100% 0 0);
		overflow: hidden;
		width: 100%;
		transition: clip-path 0.5s $e-out 0s;
	}
	.nav-loop__in {
		display: flex;
		width: fit-content;
		animation: nav-loop 15s linear infinite;
	}
	.nav-loop__item {
		max-width: initial;
		width: vw(580);
	}
	&:has(.nav--active) {
		.nav-loop {
			clip-path: inset(0 0 0 0);
			transition: clip-path 0.5s $e-out 0.5s;
		}
	}
}

#header.header--scrolled {
	@include media_narrow {
		height: vw(42);
		background: $c-white;
	}
	.header__logo-wrp {
		width: 118px;
		@include media_narrow {
			width: vw(100);
		}
	}
	.header__logo {
		translate: -20px 0;
		opacity: 0;
	}
	.header__logo--mini {
		translate: 0 0;
		opacity: 1;
	}

	.nav {
		@include media_wide {
			background: $c-white;
		}
		@include media_narrow {
			clip-path: polygon(0 0, 0 vw(42), vw(100) vw(42), vw(100) 0);
		}
	}
	.nav-list__item {
		&::after {
			background: $c-red;
			/*---------------- after */
		}
	}
	.nav-list__link {
		@include media_wide {
			color: $c-black;
		}
	}

	.nav--active {
		clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
	}
}

@keyframes nav-loop {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}
</style>
