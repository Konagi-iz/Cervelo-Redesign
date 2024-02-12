<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import BikeCard from '@/components/parts/BikeCard.vue';
import IconRight from '~icons/svg/icon_right';

const props = defineProps({
	filteredLineup: Array,
	img: String,
	model: String,
	type: String,
	swiperId: String,
});
</script>

<template>
	<div class="lineupList">
		<img
			class="lineupList__bg"
			:src="`/assets/img/common/lineup/${filteredLineup[0].img}`"
			alt=""
			width="606"
			height="404"
			loading="lazy"
		/>
		<div class="lineupList-ttl">
			<h3 class="lineupList-ttl__model">{{ model }}</h3>
			<p class="lineupList-ttl__type">{{ type }}</p>
			<p class="lineupList-ttl__amount">{{ `${filteredLineup.length} Models` }}</p>
		</div>
		<!-- .lineupList-ttl -->
		<div class="lineupList-slider-wrp">
			<Swiper
				:modules="[Pagination, Navigation]"
				:initial-slide="0"
				:speed="600"
				slides-per-view="auto"
				:space-between="0"
				:pagination="{ clickable: true }"
				:navigation="{
					nextEl: `.lineupList-slider-btn--next.${swiperId}`,
					prevEl: `.lineupList-slider-btn--prev.${swiperId}`,
				}"
				:key="swiperId"
				class="lineupList-slider"
			>
				<SwiperSlide v-for="(item, index) in filteredLineup" :key="index" class="lineupList-slider__slide">
					<RouterLink to="" class="lineupList-slider__link">
						<BikeCard
							v-bind="{
								vw: true,
								img: item.img,
								year: String(item.year),
								model: item.model,
								component: item.component,
								price: item.price,
							}"
						></BikeCard>
					</RouterLink>
				</SwiperSlide>
				<!-- .lineupList-slider__slide -->
			</Swiper>
			<!-- .lineupList-slider -->
		</div>
		<!-- .lineupList-slider-wrp -->
		<button :class="swiperId" class="lineupList-slider-btn lineupList-slider-btn--prev">
			<IconRight></IconRight>
		</button>
		<button :class="swiperId" class="lineupList-slider-btn lineupList-slider-btn--next">
			<IconRight></IconRight>
		</button>
	</div>
	<!-- .lineupList -->
</template>

<style scoped lang="scss">
.lineupList {
	position: relative;
	.lineupList__bg {
		z-index: -1;
		position: absolute;
		left: max(minpx(225), pcvw(225));
		opacity: 0.4;
		width: max(minpx(606), pcvw(606));
		height: max(minpx(404), pcvw(404));
		object-fit: cover;
		@include media_narrow {
			left: vw(36);
			width: vw(304);
			height: vw(203);
		}
	}

	/* ttl ------------ */
	.lineupList-ttl {
		display: flex;
		flex-direction: column;
		margin-left: max(minpx(323), pcvw(323));
		@include font-en;
		font-weight: 600;
		font-style: italic;
		@include media_narrow {
			margin-left: vw(42);
		}
	}
	.lineupList-ttl__model {
		color: $c-red;
		font-size: max(minpx(72), pcvw(72));
		line-height: 1.1;
		letter-spacing: 0.03em;
		@include media_narrow {
			@include fz(42);
		}
	}
	.lineupList-ttl__type {
		color: $c-red;
		font-size: max(minpx(18), pcvw(18));
		line-height: 1.2;
		letter-spacing: 0.03em;
		@include media_narrow {
			@include fz(12);
		}
	}
	.lineupList-ttl__amount {
		margin-top: max(minpx(26), pcvw(26));
		padding: max(minpx(2), pcvw(2)) max(minpx(16), pcvw(16));
		width: fit-content;
		font-size: max(minpx(14), pcvw(14));
		line-height: 1.2;
		letter-spacing: 0.03em;
		background: #f0f0f0;
		@include media_narrow {
			margin-top: vw(16);
			padding: vw(2) vw(16);
			@include fz(12);
		}
	}

	/* slider ------------ */
	.lineupList-slider-wrp {
		overflow: hidden;
		margin-inline: auto 0;
		width: calc(100% - max(minpx(225), pcvw(225)));
		@include media_narrow {
			width: calc(100% - vw(104));
		}
	}
	.lineupList-slider {
		overflow: visible;
		margin-top: max(minpx(39), pcvw(39));
		margin-left: 0;
		width: max(minpx(320), pcvw(320));
		@include media_narrow {
			margin-top: vw(37);
			width: vw(168);
		}
	}
	.lineupList-slider__slide {
		position: relative;
		box-sizing: content-box;
		width: fit-content;
		transition: opacity 0.25s ease;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 1px;
			height: 100%;
			background: $c-white;
			/*---------------- after */
		}
	}
	.lineupList-slider__link {
		position: relative;
		&::before {
			content: '';
			z-index: 1;
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
			width: 100%;
			height: 100%;
			background: $c-red;
			pointer-events: none;
			transition: opacity 0.3s ease;
			@include media_narrow {
				display: none;
			}
			/*---------------- after */
		}
		&::after {
			z-index: 1;
			content: 'VIEW DETAIL';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			color: $c-white;
			@include font-en;
			font-size: max(minpx(16), pcvw(16));
			font-weight: 600;
			line-height: 1.2;
			font-style: italic;
			pointer-events: none;
			transition: opacity 0.3s ease;
			@include media_narrow {
				display: none;
			}
			/*---------------- before */
		}
		@include media_hover {
			&:hover::before {
				opacity: 0.5;
			}
			&:hover::after {
				opacity: 1;
			}
		}
	}

	/* swiper ------------ */
	.swiper-slide-active {
		&::after {
			width: 0;
			/*---------------- after */
		}
		.bikeCard {
			background: $c-red;
			color: $c-white;
		}
		:deep(.bikeCard__price) {
			color: $c-white;
		}
	}

	/* pagination ------------ */
	:deep(.swiper-pagination) {
		position: static;
		display: flex;
		gap: max(minpx(20), pcvw(20));
		margin-top: max(minpx(28), pcvw(28));
		margin-left: max(minpx(98), pcvw(98));
		width: fit-content;
		@include media_narrow {
			gap: vw(12);
			margin-top: vw(18);
			margin-inline: auto;
		}
	}
	:deep(.swiper-pagination-bullet) {
		opacity: 1;
		margin: 0 !important;
		border: max(minpx(2), pcvw(2)) solid $c-red;
		width: max(minpx(12), pcvw(12));
		height: max(minpx(12), pcvw(12));
		background: transparent;
		transition: background 0.25s ease;
		@include media_narrow {
			border-width: vw(1);
			width: vw(8);
			height: vw(8);
		}
	}
	:deep(.swiper-pagination-bullet-active) {
		background: $c-red;
	}

	/* navigation ------------ */
	.lineupList-slider-btn {
		z-index: 10;
		position: absolute;
		top: max(minpx(304), pcvw(304));
		display: flex;
		align-items: center;
		justify-content: center;
		width: max(minpx(60), pcvw(60));
		height: max(minpx(72), pcvw(72));
		background: $c-red;
		transition: background 0.25s ease;
		@include media_narrow {
			top: vw(206);
			width: vw(40);
			height: vw(60);
		}
		@include media_hover {
			&:not(.swiper-button-disabled):hover {
				background: #ff6b60;
			}
		}
	}
	.lineupList-slider-btn--prev {
		left: max(minpx(150), pcvw(150));
		transform: scaleX(-1);
		@include media_narrow {
			left: 0;
		}
	}
	.lineupList-slider-btn--next {
		@include media_wide {
			left: max(minpx(560), pcvw(560));
		}
		@include media_narrow {
			right: 0;
		}
	}
	.swiper-button-disabled {
		background: $c-gray;
	}
	.icon-right {
		width: max(minpx(20), pcvw(20));
		height: auto;
		@include media_narrow {
			width: vw(16);
		}
	}
}
</style>
