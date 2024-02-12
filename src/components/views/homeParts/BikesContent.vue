<script setup>
import { ref, computed } from 'vue';
import lineup from '@/assets/data/lineup.json';
import ButtonInner from '@/components/parts/ButtonInner.vue';
import BikeCard from '@/components/parts/BikeCard.vue';

const categorys = ref(['road', 'time_trial', 'off-road', 'e-bike']);
const emits = defineEmits(['switchCategory']);

const props = defineProps(['currentCategory']);
const currentTab = ref(props.currentCategory);

// emitで親に渡す関数
const switchCategory = (cat) => {
	currentTab.value = cat;
	emits('switchCategory', currentTab.value);
};

// フィルターされたラインナップを返す
const filteredLineup = computed(() => {
	// pickupのみを抽出
	return lineup.filter((item) => item.pickup === true && item.type === currentTab.value.replace('_', '-'));
});
</script>

<template>
	<div class="lcl-bikes-cnt scr-anin">
		<div class="lcl-bikes-tab">
			<button
				v-for="category in categorys"
				:key="category"
				class="lcl-bikes-tab__btn"
				:class="{ 'lcl-bikes-tab__btn--active': currentTab === category }"
				@click="switchCategory(category)"
			>
				{{ category.replace(/_/g, ' ').toUpperCase() }}
			</button>
		</div>
		<!-- .lcl-bikes-tab -->
		<ul class="lcl-bikes-list scr-anin">
			<TransitionGroup name="list">
				<li v-for="item in filteredLineup" :key="item.model + item.component + item.year" class="lcl-bikes-list__item">
					<router-link to="" class="lcl-bikes-list__link">
						<BikeCard
							v-bind="{
								img: item.img,
								year: String(item.year),
								model: item.model,
								component: item.component,
								price: item.price,
							}"
						></BikeCard>
					</router-link>
				</li>
			</TransitionGroup>
			<li class="lcl-bikes-list__item lcl-bikes-list__item--btn">
				<router-link class="lcl-bikes-list__viewall" :to="{ name: 'bikes' }">
					<ButtonInner color="white" content="VIEW ALL"></ButtonInner>
				</router-link>
			</li>
		</ul>
		<!-- .lcl-bikes-list -->
	</div>
	<!-- .lcl-bikes-cnt -->
</template>

<style scoped lang="scss">
.lcl-bikes-cnt {
	position: relative;
	margin-top: -90px;
	@include media_narrow {
		margin-top: vw(-60);
	}
	&::after {
		content: '';
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		clip-path: inset(100% 0 0 0);
		width: calc((100% - 1000px) / 2);
		height: 90px;
		background: $c-white;
		transition: clip-path 1.2s $e-out;
		/*---------------- after */
	}
	&.scr-anin--on::after {
		clip-path: inset(-1% -1% -1% -1%);
	}
	&.scr-anin--on .lcl-bikes-tab {
		clip-path: inset(-1% -1% -1% -1%);
	}
	.lcl-bikes-tab {
		clip-path: inset(100% -1% -1% -1%);
		display: flex;
		margin-inline: auto;
		width: 1000px;
		transition: clip-path 1.2s $e-out;
		@include media_narrow {
			width: 100%;
		}
	}
	.lcl-bikes-tab__btn {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 170px;
		height: 90px;
		background: $c-white;
		color: $c-gray;
		@include font-en;
		@include fz(14);
		font-weight: 600;
		line-height: 1.5;
		font-style: italic;
		transition: color 0.2s ease;
		@include media_narrow {
			width: vw(86);
			height: vw(60);
			@include fz(12);
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			transform: scaleY(0);
			transform-origin: top;
			width: 100%;
			height: 8px;
			background: $c-red;
			transition: transform 0.5s $e-out;
			@include media_narrow {
				height: vw(4);
			}
			/*---------------- after */
		}
		@include media_hover {
			&:hover {
				color: $c-red;
			}
		}
	}
	.lcl-bikes-tab__btn--active {
		color: $c-red;
		&::after {
			transform: scaleY(1);
			/*---------------- after */
		}
	}

	/* lineup ------------ */
	.lcl-bikes-list {
		mask: linear-gradient(to top, transparent 33%, #000 66%) no-repeat center 100% / 100% 300%;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 90px;
		margin-inline: auto;
		width: 1000px;
		transition: mask 1.7s $e-out;
		@include media_narrow {
			gap: vw(9);
			margin-top: vw(40);
			padding-inline: vw(15);
			width: 100%;
		}
		&.scr-anin--on {
			mask: linear-gradient(to top, transparent 33%, #000 66%) no-repeat center 0% / 100% 300%;
		}
	}
	.lcl-bikes-list__item {
	}
	.lcl-bikes-list__item--btn {
		width: 320px;
		height: 322px;
		background: $c-darkgray;
		text-align: center;
		transition: opacity 0.3s ease;
		@include media_narrow {
			width: vw(168);
			height: vw(200);
		}
		@include media_hover {
			&:hover {
				opacity: 0.7;
			}
		}
	}
	.lcl-bikes-list__link {
		position: relative;
		display: inline-block;
		width: 100%;
		transition: opacity 0.3s ease;
		height: 100%;
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
			@include fz(16);
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
			&:hover {
				opacity: 0.7;
			}
			&:hover::before {
				opacity: 0.5;
			}
			&:hover::after {
				opacity: 1;
			}
		}
	}
	.list-enter-active {
		transition: opacity 0.8s $e-out;
	}
	.list-enter-from,
	.list-leave-active {
		opacity: 0;
	}
	.list-leave-active {
		position: absolute;
	}

	.lcl-bikes-list__viewall {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		@include media_hover {
			&:hover :deep(.icon-right) {
				transform: translateX(50%);
			}
		}
	}
}
</style>
