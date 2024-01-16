<script setup>
import ButtonInner from '@/components/parts/ButtonInner.vue';
import { ref, computed } from 'vue';
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
	return lineup.lineup.filter((item) => item.pickup === true);
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
			<li v-for="(item, index) in filteredLineup" :key="index" class="lcl-bikes-list__item">
				<img class="lcl-bikes-list__img" src="/assets/img/lineup/img_s5.png" alt="" width="267" height="178" />
				<div class="lcl-bikes-list__cnt">
					<p class="lcl-bikes-list__year">{{ item.year }}</p>
					<p class="lcl-bikes-list__model">{{ item.model }}</p>
					<p class="lcl-bikes-list__component">{{ item.component }}</p>
					<p class="lcl-bikes-list__price">{{ `¥ ${item.price.toLocaleString()}` }}</p>
				</div>
			</li>
			<li class="lcl-bikes-list__item lcl-bikes-list__item--btn">
				<router-link class="lcl-bikes-list__link" :to="{ name: 'bikes' }">
					<ButtonInner color="white"></ButtonInner>
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
		transition: color 0.5s $e-out;
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
			/*---------------- after */
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
	}
	.lcl-bikes-list__item {
		width: 320px;
		height: 322px;
		background: $c-lightgray;
		text-align: center;
	}
	.lcl-bikes-list__item--btn {
		background: $c-darkgray;
	}
	.lcl-bikes-list__link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.lcl-bikes-list__img {
		padding-top: 27px;
		width: 267px;
	}
	.lcl-bikes-list__cnt {
		margin-top: 15px;
	}
	.lcl-bikes-list__year {
		@include fz(10);
		line-height: 1.2;
	}
	.lcl-bikes-list__model {
		margin-top: 2px;
		@include fz(14);
		font-weight: 600;
		line-height: 1.2;
	}
	.lcl-bikes-list__component {
		margin-top: 2px;
		@include fz(12);
		line-height: 1.2;
	}
	.lcl-bikes-list__price {
		margin-top: 10px;
		@include fz(12);
		line-height: 1.5;
		letter-spacing: 0.05;
	}
}
</style>