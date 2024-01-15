<script setup>
import { ref } from 'vue';

const categorys = ref(['road', 'time-trial', 'off-road', 'e-bike']);
const emits = defineEmits(['switchCategory']); // 'switchCategory' イベントを定義

const props = defineProps(['currentCategory']);
const currentTab = ref(props.currentCategory);

const switchCategory = (cat) => {
	currentTab.value = cat;
	emits('switchCategory', currentTab.value);
};
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
        <ul class="lcl-bikes-list">
            <li class="lcl-bikes-list__item">
                
            </li>
        </ul>
	</div>
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
}
</style>
