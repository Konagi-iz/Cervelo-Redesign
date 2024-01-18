<script setup>
import { ref } from 'vue';

const navs = ref(['history', 'shop list', 'support', 'news']);
const navChilds = ref([
	{
		ttl: 'ROAD',
		items: ['R5', 'S5', 'Soloist', 'Caledonia-5', 'Caledonia'],
	},
	{
		ttl: 'TIME TRIAL',
		items: ['P5', 'P-Series'],
	},
	{
		ttl: 'OFF-ROAD',
		items: ['R5-CX', 'Áspero-5', 'Áspero', 'ZHT-5', 'ZFS-5'],
	},
	{
		ttl: 'E-BIKE',
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
	const header = document.querySelector('.header');
	if (scroll > h) {
		header.classList.add('header--scrolled');
	} else {
		header.classList.remove('header--scrolled');
	}
}
</script>

<template>
	<header class="header">
		<a class="header__logo-wrp" href="../../index.html">
			<h1 class="header__ttl">
				<img class="header__logo" src="/assets/img/logo.svg" alt="Cervelo" width="90" height="14" />
				<img class="header__logo--mini" src="/assets/img/logo_mini.svg" alt="Cervelo" width="22" height="20" />
			</h1>
		</a>
		<nav class="nav">
			<ul class="nav-list">
				<li class="nav-list__item">
					<router-link class="nav-list__link" :to="{ name: 'bikes' }">BIKES</router-link>
					<ul class="nav-child">
						<li class="nav-child__item" v-for="navChild in navChilds">
							<ul class="nav-child-list">
								<li class="nav-child-list__item nav-child-list__item--ttl">
									<a class="nav-child-list__link nav-child-list__link--ttl" href="">{{ navChild.ttl }}</a>
								</li>
								<li class="nav-child-list__item" v-for="item in navChild.items">
									<a class="nav-child-list__link" href="">{{ item }}</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="nav-list__item" v-for="nav in navs">
					<router-link class="nav-list__link" :to="{ name: nav }">
						{{ nav.toUpperCase() }}
					</router-link>
				</li>
				<!-- .list__item -->
			</ul>
			<!-- .list -->
		</nav>
		<!-- .nav -->
	</header>
	<!-- .header -->
</template>

<style lang="scss">
.header {
	z-index: 999;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	width: fit-content;
	height: 64px;
	.header__logo-wrp {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 190px;
		height: 100%;
		background: $c-red;
		transition: width .5s $e-out;
	}
	.header__logo {
		translate: 0 0;
		width: 90px;
		transition: opacity .4s $e-out, translate .4s $e-out;
	}
	.header__logo--mini {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		translate: 20px 0;
		opacity: 0;
		width: 22px;
		transition: opacity .4s $e-out, translate .4s $e-out;
	}

	/* nav ------------ */
	.nav {
		padding-inline: 50px;
		height: 100%;
		background: $c-red;
		transition: background .4s $e-out;
	}
	.nav-list {
		display: flex;
		align-items: center;
		gap: 35px;
		height: 100%;
	}
	.nav-list__item {
		position: relative;
		height: 100%;
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
			/*---------------- after */
		}
		&:has(.nav-child):hover {
			@include media_hover {
				.nav-child {
					opacity: 1;
					visibility: visible;
				}
			}
		}
		@include media_hover {
			&:hover::after {
				transform: scaleY(1);
			}
		}
	}
	.nav-list__link {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: $c-white;
		@include font-en;
		@include fz(12);
		font-weight: 600;
		font-style: italic;
		transition: color .4s $e-out;
	}

	/* mega drop menu ------------ */
	.nav-child {
		z-index: -1;
		position: absolute;
		bottom: 0;
		left: -50px;
		transform: translateY(100%);
		opacity: 0;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
		visibility: hidden;
		display: flex;
		gap: 75px;
		padding: 50px 120px;
		background: $c-white;
		transition: opacity 0.4s ease, visibility 0.4s ease;
	}
	.nav-child__item {
		display: flex;
		flex-direction: column;
	}
	.nav-child-list__item--ttl {
		margin-bottom: 15px;
	}
	.nav-child-list {
		display: flex;
		flex-direction: column;
		gap: 13px;
	}
	.nav-child-list__item {
	}
	.nav-child-list__link {
		display: block;
		@include font-en;
		@include fz(14);
		font-weight: 500;
		line-height: 1.3;
		white-space: nowrap;
		transition: color 0.15s ease-out;
		@include media_hover {
			&:hover {
				color: $c-red;
			}
		}
	}
	.nav-child-list__link--ttl {
		@include fz(16);
		font-weight: 700;
		line-height: 1.5;
		font-style: italic;
	}
}

.header--scrolled {
	.header__logo-wrp {
		width: 118px;
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
		background: $c-white;
	}
	.nav-list__item {
		&::after {
			background: $c-red;
	/*---------------- after */
}
	}
	.nav-list__link {
		color: $c-black;
	}
}
</style>
