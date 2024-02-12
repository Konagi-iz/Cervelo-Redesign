<script setup>
import { computed } from 'vue';
import lineup from '@/assets/data/lineup.json';
import LineupList from '@/components/views/bikesParts/lineupList.vue';

const props = defineProps({ lineups: Array });

/* モデル名とタイプでフィルターした配列を作る関数 ------------ */
function getFilteredLineup(model) {
	const result = computed(() => {
		return lineup.filter((item) => {
			return item.official.toUpperCase() === model;
		});
	});
	return result.value;
}
</script>

<template>
	<section class="lineups">
		<div class="lineups-ttl">
			<h2 class="lineup-ttl__primary">LINEUPS</h2>
			<p class="lineup-ttl__jp">ラインナップ</p>
		</div>
		<!-- .lineups-ttl -->
		<div class="lineups__list">
			<LineupList
				v-for="(item, index) in lineups"
				:key="index"
				v-bind="{
					filteredLineup: getFilteredLineup(item.model),
					model: item.model,
					type: item.type,
					swiperId: `swiper-${index}`,
				}"
			></LineupList>
		</div>
	</section>
</template>

<style scoped lang="scss">
.lineups {
	margin-top: 134px;
	.lineups-ttl {
		position: relative;
		margin-inline: auto;
		padding-bottom: max(minpx(22), pcvw(22));
		width: fit-content;
		@include media_narrow {
			padding-bottom: vw(18);
		}
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			width: max(minpx(306), pcvw(306));
			height: max(minpx(10), pcvw(10));
			background: $c-red;
			@include media_narrow {
				width: vw(226);
				height: vw(6);
			}
			/*---------------- after */
		}
	}
	.lineup-ttl__primary {
		@include font-en;
		font-size: max(minpx(48), pcvw(48));
		font-weight: 600;
		font-style: italic;
		line-height: 1;
		letter-spacing: 0.15em;
		@include media_narrow {
			@include fz(36);
		}
	}
	.lineup-ttl__jp {
		font-size: max(minpx(14), pcvw(14));
		font-weight: 600;
		line-height: 1.5;
		letter-spacing: 0.12em;
		text-align: center;
		@include media_narrow {
			@include fz(12);
		}
	}

	.lineups__list {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: max(minpx(120), pcvw(120));
		margin-top: max(minpx(62), pcvw(62));
		padding-bottom: max(minpx(150), pcvw(150));
		@include media_narrow {
			gap: vw(90);
			margin-top: vw(45);
			padding-bottom: vw(130);
		}
		&::before {
			z-index: -1;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: max(minpx(295), pcvw(295));
			height: 100%;
			background: $c-darkgray;
			@include media_narrow {
				width: vw(123);
			}
			/*---------------- before */
		}
	}
}
</style>
