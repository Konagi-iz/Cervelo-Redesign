<script setup>
import Button from '@/components/parts/Button.vue';

const cat = ['road', 'time_trial', 'off-road', 'e-bike'];
</script>

<template>
	<section class="lcl-bikes-cat">
		<h2 class="lcl-bikes-cat__ttl">
			CHOOSE
			<br class="dn-w" />
			YOUR
			<br class="dn-w" />
			STYLE
		</h2>
		<ul class="lcl-bikes-cat__list">
			<li
				v-for="(item, index) in cat"
				:key="index"
				class="lcl-bikes-cat-item"
				:class="{ 'lcl-bikes-cat-item--reverse': index === 1 || index === 3 }"
			>
				<div class="lcl-bikes-cat-loop">
					<div class="lcl-bikes-cat-loop__in">
						<img
							v-for="n in 2"
							:key="n"
							class="lcl-bike-cat-loop__txt"
							:src="`/assets/img/bikes/txt_${item.replace('_', '-')}.svg`"
							alt=""
							width="2751"
							height="108"
							loading="lazy"
						/>
					</div>
					<!-- .lcl-bikes-cat-loop__in -->
				</div>
				<!-- .lcl-bikes-cat-item -->
				<picture class="lcl-bikes-cat-item__img">
					<source :srcset="`/assets/img/bikes/SP/img_${item.replace('_', '-')}.png`" media="(max-width: 767px)" />
					<img :src="`/assets/img/bikes/img_${item.replace('_', '-')}.png`" alt="" width="1420" height="600" loading="lazy" />
				</picture>
				<div class="lcl-bikes-cat__cnt">
					<h3 class="lcl-bikes-cat__name">{{ item.replace('_', ' ').toUpperCase() }}</h3>
					<router-link :to="{ name: item.replace('_', '-') }">
						<Button :color="['white', 'white', 'red']" btnStyle="border"></Button>
					</router-link>
				</div>
				<!-- .lcl-bikes-cat__cnt -->
			</li>
			<!-- .lcl-bikes-cat-item -->
		</ul>
		<!-- .lcl-bikes-cat__list -->
	</section>
</template>

<style scoped lang="scss">
.lcl-bikes-cat {
	position: relative;
	margin-top: 115px;
	padding-top: 110px;
	background: $c-red;
	@include media_narrow {
		margin-top: vw(188);
		padding-top: vw(136);
	}

	/* ttl ------------ */
	.lcl-bikes-cat__ttl {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		color: $c-red;
		@include font-en;
		@include fz(76);
		font-weight: 600;
		font-style: italic;
		line-height: 1.2;
		letter-spacing: 0.05em;
		white-space: nowrap;
		@include media_narrow {
			@include fz(64);
			line-height: 1;
			text-align: center;
		}
		&::after {
			content: 'CHOOSE YOUR STYLE';
			position: absolute;
			top: 0;
			left: 0;
			clip-path: inset(50% 0 0 0);
			color: $c-white;
			@include media_narrow {
				content: 'CHHOSE\AYOUR\ASTYLE';
				white-space: pre;
			}
			/*---------------- after */
		}
	}

	.lcl-bikes-cat__list {
	}
	.lcl-bikes-cat-item {
		z-index: 1;
		position: relative;
		display: flex;
		align-items: center;
	}
	.lcl-bikes-cat-item--reverse {
		flex-direction: row-reverse;
		.lcl-bikes-cat-loop__in {
			animation-direction: reverse;
		}
		.lcl-bikes-cat__cnt {
			@include media_narrow {
				left: vw(15);
				align-items: flex-start;
			}
		}
	}

	/* loop ------------ */
	.lcl-bikes-cat-loop {
		z-index: -1;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}
	.lcl-bikes-cat-loop__in {
		display: flex;
		animation: loop 25s linear infinite;
		@keyframes loop {
			to {
				transform: translateX(-50%);
			}
		}
	}
	.lcl-bike-cat-loop__txt {
		max-width: initial;
		height: max(minpx(108), pcvw(108));
		@include media_narrow {
			height: vw(108);
		}
	}

	/* cnt ------------ */
	.lcl-bikes-cat-item__img {
		width: max(minpx(710), pcvw(710));
		@include media_narrow {
			width: vw(247);
		}
	}
	.lcl-bikes-cat__cnt {
		display: flex;
		flex-direction: column;
		gap: max(minpx(7), pcvw(7));
		@include media_narrow {
			position: absolute;
			bottom: vw(17);
			right: vw(15);
			align-items: flex-end;
			gap: vw(7);
		}
	}
	.lcl-bikes-cat__name {
		color: $c-white;
		@include font-en;
		font-size: max(minpx(48), pcvw(48));
		font-weight: 600;
		font-style: italic;
		line-height: 1.2;
		@include media_narrow {
			@include fz(48);
		}
	}

	/* btn ------------ */
	@include media_wide {
		.btn {
			padding: max(minpx(14), pcvw(14)) max(minpx(28), pcvw(28));
			border-width: max(minpx(2), pcvw(2));
		}
		:deep(.btn-inner) {
			gap: max(minpx(10), pcvw(10));
		}
		:deep(.btn-inner__txt) {
			font-size: max(minpx(14), pcvw(14));
		}
		:deep(.icon-right) {
			width: max(minpx(14), pcvw(14));
		}
	}
}
</style>
