<script setup>
import { ref } from 'vue';

const navs = ref(['オーナーズ\nクラブの登録', '品質保証について', 'テクニカル\nインフォメーション', '製品マニュアル']);
</script>

<template>
	<section class="lcl-support scr-anin" id="support">
		<div class="lcl-support__in">
			<h2 class="lcl-support-ttl">
				<span class="lcl-support-ttl__jp">サポート</span>
				<span class="lcl-support-ttl__primary">SUPPORT</span>
			</h2>
			<!-- .lcl-support-ttl -->
			<div class="lcl-support-nav scr-anin">
				<router-link to="" v-for="(item, index) in navs" :key="index" class="lcl-support-nav__item">
					<img
						class="lcl-support-nav__img"
						:src="`/assets/img/home/support/img_0${index + 1}.png`"
						alt=""
						loading="lazy"
						width="352"
						height="186"
					/>
					<p class="lcl-support-nav__txt" style="white-space: pre-wrap" v-text="item"></p>
				</router-link>
			</div>
			<!-- .lcl-support-nav -->
		</div>
		<!-- .lcl-support__in -->
	</section>
</template>

<style lang="scss">
.lcl-support {
	clip-path: inset(-1% -1% 100% -1%);
	margin-top: 180px;
	padding-bottom: 143px;
	background: url(/assets/img/home/support/bg_01.png) center top / cover, $c-red;
	transition: clip-path 1.4s $e-out;
	@include media_narrow {
		margin-top: vw(120);
		padding-bottom: vw(94);
	}
	&.scr-anin--on {
		clip-path: inset(-1% -1% -1% -1%);
	}
	.lcl-support__in {
		position: relative;
		width: 946px;
		margin-inline: auto;
		@include media_narrow {
			width: vw(347);
		}
	}
	.lcl-support-ttl {
		color: $c-white;
	}
	.lcl-support-ttl__jp {
		position: relative;
		display: block;
		margin-bottom: 4px;
		padding-left: 11px;
		width: fit-content;
		@include fz(13);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: 0.1;
		@include media_narrow {
			margin-bottom: vw(4);
			padding-left: vw(11);
		}
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			right: -10px;
			transform: translate(100%, -50%);
			width: 51px;
			height: 1px;
			background: currentColor;
			@include media_narrow {
				right: vw(-10);
				width: vw(51);
				height: vw(1);
			}
			/*---------------- after */
		}
	}
	.lcl-support-ttl__primary {
		@include font-en;
		@include fz(74);
		font-weight: 700;
		line-height: 0.9;
		font-style: italic;
		@include media_narrow {
			@include fz(62);
		}
	}

	.lcl-support-nav {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 40px 33px;
		margin-top: 58px;
		@include media_narrow {
			gap: vw(32);
			margin-top: vw(50);
		}
		&.scr-anin--on .lcl-support-nav__item {
			translate: 0 0;
			opacity: 1;
		}
	}
	.lcl-support-nav__item {
		position: relative;
		translate: -30% 0;
		opacity: 0;
		transition: transform 0.4s $e-out, translate 0.6s $e-out 0.2s, opacity 0.6s $e-out 0.2s;
		&:nth-of-type(4) {
			@include media_wide {
				margin-right: 156px;
			}
		}
		&::after {
			content: '';
			position: absolute;
			top: -20px;
			left: -23px;
			clip-path: polygon(40px 0, 0 100%, calc(100% - 40px) 100%, 100% 0);
			width: 103px;
			height: calc(100% + 40px);
			background: $c-white;
			transition: transform 0.4s $e-out;
			@include media_narrow {
				top: vw(-9);
				left: vw(-11);
				clip-path: polygon(vw(21) 0, 0 100%, calc(100% - vw(21)) 100%, 100% 0);
				width: vw(75);
				height: vw(121);
			}
			/*---------------- after */
		}
		&:hover {
			transform: translateX(10px);
		}
		&:hover::after {
			transform: translateX(-20px);
		}
	}
	.lcl-support-nav__img {
		z-index: 1;
		position: relative;
		clip-path: polygon(33px 0, 0 100%, calc(100% - 33px) 100%, 100% 0);
		width: 352px;
		@include media_narrow {
			clip-path: polygon(vw(17) 0, 0 100%, calc(100% - vw(17)) 100%, 100% 0);
			width: vw(338);
			height: vw(101);
			object-fit: cover;
		}
	}
	.lcl-support-nav__txt {
		z-index: 1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		color: $c-white;
		@include fz(20);
		font-weight: 600;
		line-height: 1.4;
		text-align: center;
	}
}
</style>
