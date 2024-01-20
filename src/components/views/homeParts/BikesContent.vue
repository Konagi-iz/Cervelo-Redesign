<script setup>
import ButtonInner from '@/components/parts/ButtonInner.vue';
import { ref, computed } from 'vue';
import axios from 'axios';
import lineup from '@/assets/data/lineup.json';

const categorys = ref(['road', 'time-trial', 'off-road', 'e-bike']);
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
	return lineup.filter((item) => item.pickup === true && item.type === currentTab.value);
});
</script>

<template>
	<div class="lcl-bikes-cnt">
		<div class="lcl-bikes-tab">
			<button
				v-for="category in categorys"
				:key="category"
				class="lcl-bikes-tab__btn"
				:class="{ 'lcl-bikes-tab__btn--active': currentTab === category }"
				@click="switchCategory(category)"
			>
				{{ category.replace(/-/g, ' ').toUpperCase() }}
			</button>
		</div>
		<!-- .lcl-bikes-tab -->
		<ul class="lcl-bikes-list">
			<TransitionGroup name="list">
				<li v-for="item in filteredLineup" :key="item.model + item.component + item.year" class="lcl-bikes-list__item">
					<a class="lcl-bikes-list__link" href="">
						<img
							class="lcl-bikes-list__img"
							:src="`/assets/img/lineup/${item.img}`"
							:alt="`${item.model} `"
							loading="lazy"
							width="267"
							height="178"
						/>
						<div class="lcl-bikes-list__cnt">
							<p class="lcl-bikes-list__year">{{ item.year }}</p>
							<p class="lcl-bikes-list__model">{{ item.model }}</p>
							<p class="lcl-bikes-list__component">{{ item.component }}</p>
							<p class="lcl-bikes-list__price">{{ `¥ ${item.price.toLocaleString()}` }}</p>
						</div>
					</a>
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

<style lang="scss">
.lcl-bikes-cnt {
	position: relative;
	margin-top: -90px;
	@include media_narrow {
		margin-top: vw(-60);
	}
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: calc((100% - 1000px) / 2);
		height: 90px;
		background: $c-white;
		/*---------------- after */
	}
	.lcl-bikes-tab {
		display: flex;
		margin-inline: auto;
		width: 1000px;
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
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 90px;
		margin-inline: auto;
		width: 1000px;
		@include media_narrow {
			gap: vw(9);
			margin-top: vw(40);
			padding-inline: vw(15);
			width: 100%;
		}
	}
	.lcl-bikes-list__item {
		width: 320px;
		height: 322px;
		background: $c-lightgray;
		text-align: center;
		@include media_narrow {
			width: vw(168);
			height: vw(200);
		}
	}
	.lcl-bikes-list__item--btn {
		background: $c-darkgray;
		transition: opacity 0.3s ease;
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
			&:hover .btn-inner__icon {
				transform: translateX(50%);
			}
		}
	}
	.lcl-bikes-list__img {
		box-sizing: content-box;
		padding-top: 9px;
		width: 267px;
		height: 178px;
		object-fit: cover;
		@include media_narrow {
			padding-top: vw(8);
			width: vw(132);
			height: vw(88);
		}
	}
	.lcl-bikes-list__cnt {
		margin-top: 12px;
		@include media_narrow {
			margin-top: vw(9);
		}
	}
	.lcl-bikes-list__year {
		@include fz(12);
		font-weight: 300;
		line-height: 1.2;
		@include media_narrow {
			@include fz(10);
		}
	}
	.lcl-bikes-list__model {
		margin-top: 5px;
		@include fz(16);
		font-weight: 600;
		line-height: 1.2;
		@include media_narrow {
			margin-top: vw(4);
			@include fz(14);
		}
	}
	.lcl-bikes-list__component {
		margin-top: 2px;
		@include fz(12);
		font-weight: 300;
		line-height: 1.2;
		@include media_narrow {
			margin-top: vw(2);
			@include fz(12);
		}
	}
	.lcl-bikes-list__price {
		margin-top: 20px;
		color: $c-red;
		@include fz(14);
		font-weight: 600;
		line-height: 1.5;
		letter-spacing: 0.05;
		@include media_narrow {
			margin-top: vw(10);
			@include fz(14);
		}
	}
}
</style>
