<script setup>
import { ref } from 'vue';

const navs = ref(['オーナーズ\nクラブの登録', '品質保証について', 'テクニカル\nインフォメーション', '製品マニュアル']);
</script>

<template>
	<section class="lcl-support" id="support">
		<h2 class="lcl-support-ttl">
			<span class="lcl-support-ttl__jp">サポート</span>
			<span class="lcl-support-ttl__primary">SUPPORT</span>
		</h2>
		<!-- .lcl-support-ttl -->
		<div class="lcl-support-nav">
			<a v-for="(item, index) in navs" :key="index" class="lcl-support-nav__item" href="">
				<p class="lcl-support-nav__txt" style="white-space: pre-wrap" v-text="item"></p>
				<img
					class="lcl-support-nav__img"
					:src="`/assets/img/home/support/img_0${index + 1}.png`"
					alt=""
					loading="lazy"
					width="352"
					height="186"
				/>
			</a>
		</div>
	</section>
</template>

<style lang="scss">
.lcl-support {
	position: relative;
	margin-top: 120px;
	width: 1000px;
	margin-inline: auto;
	.lcl-support-ttl {
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-100%) rotate(90deg);
		transform-origin: left bottom;
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
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			right: -10px;
			transform: translate(100%, -50%);
			width: 51px;
			height: 1px;
			background: $c-black;
			/*---------------- after */
		}
	}
	.lcl-support-ttl__primary {
		color: $c-red;
		@include font-en;
		@include fz(74);
		font-weight: 700;
		line-height: 0.9;
		font-style: italic;
	}

	.lcl-support-nav {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 30px 10px;
	}
	.lcl-support-nav__item {
		position: relative;
		transition: transform 0.4s $e-out;
		&:nth-of-type(2) {
			margin-right: 84px;
		}
		&::after {
			content: '';
			z-index: -1;
			position: absolute;
			top: -20px;
			left: -20px;
			width: 100%;
			height: 100%;
			background: $c-red;
			mask: url(/assets/img/home/support/img_01.png) left top / contain;
			transition: transform 0.4s $e-out;
			/*---------------- after */
		}
		&:hover {
			transform: translate(-10px, -10px);
		}
		&:hover::after {
			transform: translate(15px, 15px);
		}
	}
	.lcl-support-nav__txt {
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
	.lcl-support-nav__img {
		width: 352px;
	}
}
</style>
