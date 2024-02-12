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
					<router-link to="" class="lcl-news-list__link">
						<time class="lcl-news-list__date" :datetime="item.date">{{ item.date.replace(/-/g, '.') }}</time>
						<p class="lcl-news-list__txt">{{ item.content }}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<router-link class="lcl-news__btn scr-anin" :to="{ name: 'news' }">
			<ButtonInner color="red" content="ALL NEWS"></ButtonInner>
		</router-link>
	</section>
</template>

<style scoped lang="scss">
.lcl-news {
	display: flex;
	align-items: center;
	width: 100%;
	background: $c-red;
	@include media_wide {
		height: 190px;
	}
	@include media_narrow {
		align-items: flex-start;
		flex-direction: column;
	}
	.lcl-news__in {
		display: flex;
		align-items: center;
		gap: 100px;
		@include media_wide {
			flex: 1;
			padding-inline: 100px;
			height: 100%;
		}
		@include media_narrow {
			flex-direction: column;
			align-items: flex-start;
			gap: vw(20);
			padding: vw(26) vw(15) vw(36);
			width: 100%;
		}
	}
	.lcl-news__tll {
		color: $c-white;
		@include font-en;
		@include fz(24);
		font-weight: 600;
		line-height: 1.5;
		font-style: italic;
		@include media_narrow {
			@include fz(24);
		}
	}
	.lcl-news-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		@include media_narrow {
			gap: vw(10);
		}
	}
	.lcl-news-list__item {
	}
	.lcl-news-list__link {
		display: flex;
		gap: 18px;
		color: $c-white;
		transition: opacity 0.3s ease;
		@include media_narrow {
			gap: vw(10);
		}
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
		letter-spacing: 0.03em;
		line-height: 1.8;
		@include media_narrow {
			width: vw(73);
			@include fz(12);
		}
	}
	.lcl-news-list__txt {
		flex: 1;
		@include fz(13);
		font-weight: 300;
		letter-spacing: 0.03em;
		line-height: 1.8;
		@include media_narrow {
			@include fz(12);
		}
	}
	.lcl-news__btn {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		clip-path: inset(0 0 0 100%);
		transition: clip-path 1.3s $e-out;
		width: 262px;
		height: 100%;
		background: $c-lightgray;
		@include media_narrow {
			clip-path: inset(100% -1% -1% -1%);
			justify-content: flex-start;
			padding-left: vw(15);
			width: vw(187);
			height: vw(44);
		}
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
			@include media_narrow {
				display: none;
			}
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
			@include media_narrow {
				display: none;
			}
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
			&:hover :deep(.btn-inner__txt) {
				color: $c-white !important;
			}
			&:hover :deep(.icon-right) {
				transform: translateX(50%);
				.icon-right__path {
					stroke: $c-white;
				}
			}
		}
		&.scr-anin--on {
			clip-path: inset(-1% -1% -1% -1%);
		}
	}
	:deep(.btn-inner) {
		z-index: 1;
	}
}
</style>
