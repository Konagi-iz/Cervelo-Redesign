<script setup>
import { ref } from 'vue';
import ButtonInner from '@/components/parts/ButtonInner.vue';

const newsList = ref([
	{
		date: '2023-10-04',
		content: 'Test Ride Event開催決定！',
	},
	{
		date: '2023-10-23',
		content: '安全に関する重要なリコールのお知らせ！',
	},
	{
		date: '2023-11-07',
		content: '2024年モデル ラインナップ公開',
	},
]);
</script>

<template>
	<section class="lcl-news">
		<div class="lcl-news__in">
			<h2 class="lcl-news__tll">NEWS</h2>
			<ul class="lcl-news-list">
				<li class="lcl-news-list__item" v-for="item in newsList">
					<a href="" class="lcl-news-list__link">
						<time class="lcl-news-list__date" :datetime="item.date">{{ item.date.replace(/-/g, '.') }}</time>
						<p class="lcl-news-list__txt">{{ item.content }}</p>
					</a>
				</li>
			</ul>
		</div>
		<router-link class="lcl-news__btn" :to="{ name: 'news' }">
			<ButtonInner color="red"></ButtonInner>
		</router-link>
	</section>
</template>

<style lang="scss">
.lcl-news {
	display: flex;
	align-items: center;
	width: 100%;
	height: 142px;
	.lcl-news__in {
		display: flex;
		align-items: center;
		gap: 100px;
		flex: 1;
		padding-inline: 100px;
		height: 100%;
		background: $c-red;
	}
	.lcl-news__tll {
		color: $c-white;
		@include font-en;
		@include fz(24);
		font-weight: 600;
		line-height: 1.5;
		font-style: italic;
	}
	.lcl-news-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.lcl-news-list__item {
	}
	.lcl-news-list__link {
		display: flex;
		align-items: center;
		gap: 18px;
		color: $c-white;
		transition: opacity 0.3s ease;
		@include media_hover {
			&:hover {
				opacity: 0.6;
			}
		}
	}
	.lcl-news-list__date {
		width: 75px;
		@include font-en;
		@include fz(13);
		font-weight: 600;
		letter-spacing: 0.03;
		line-height: 0.9;
	}
	.lcl-news-list__txt {
		@include fz(13);
		font-weight: 300;
		letter-spacing: 0.3;
		line-height: 1.2;
	}
	.lcl-news__btn {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 262px;
		height: 100%;
		background: $c-white;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			transform: translateX(calc(-100% - 52px));
			width: 100%;
			height: 100%;
			background: $c-red;
			transition: transform 0.7s $e-out;
			/*---------------- after */
		}
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			transform: translateX(-100%);
			clip-path: polygon(0 0, 0% 50%, 0 100%);
			width: 52px;
			height: 100%;
			background: $c-red;
			transition: transform 0.7s $e-out, clip-path 0.7s $e-out;
			/*---------------- before */
		}
		@include media_hover {
			&:hover::after {
				transform: translateX(0);
			}
			&:hover::before {
				transform: translateX(262px);
				clip-path: polygon(0 0, 100% 50%, 0 100%);
			}
			&:hover .btn-inner__txt {
				color: $c-white !important;
			}
			&:hover .btn-inner__icon {
				transform: translateX(50%);
				path {
					stroke: $c-white;
				}
			}
		}
	}
	.btn-inner {
		z-index: 1;
	}
}
</style>
