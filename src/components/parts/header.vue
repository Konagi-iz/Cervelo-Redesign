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
</script>

<template>
	<header class="header">
		<a class="header__logo-wrp" href="../../index.html">
			<h1 class="header__ttl">
				<img class="header__logo" src="/assets/img/logo.svg" alt="Cervelo" />
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
	align-items: center;
	width: fit-content;
	height: 64px;
	background: $c-red;
	.header__logo-wrp {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 190px;
		height: 100%;
		background: $c-red;
	}
	.header__logo {
		width: 90px;
	}

	/* nav ------------ */
	.nav {
		padding-inline: 50px;
		height: 100%;
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
		&:has(.nav-child):hover {
			@include media_hover {
				.nav-child {
					opacity: 1;
					visibility: visible;
				}
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
		&:hover::after {
			transform: scaleX(1);
			transform-origin: left;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			transform: scaleX(0);
			transform-origin: right;
			width: 100%;
			height: 4px;
			background: $c-white;
			transition: transform .3s $e-inOut;
			/*---------------- after */
		}
	}

	/* mega drop menu ------------ */
	.nav-child {
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
		@include font-en;
		@include fz(14);
		font-weight: 500;
		line-height: 1.3;
		white-space: nowrap;
		transition: color .15s ease-out;
		&:hover {
			color: $c-red;
		}
	}
	.nav-child-list__link--ttl {
		@include fz(16);
		font-weight: 700;
		line-height: 1.5;
		font-style: italic;
	}
}
</style>
