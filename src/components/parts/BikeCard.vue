<script setup>
const props = defineProps({
	vw: Boolean,
	img: String,
	year: String,
	model: String,
	component: String,
	price: Number,
});
</script>

<template>
	<div class="bikeCard" :class="{ 'bikeCard--vw': vw }">
		<img class="bikeCard__img" :src="`/assets/img/common/lineup/${img}`" :alt="`${model} `" loading="lazy" width="267" height="178" />
		<div class="bikeCard__cnt">
			<p class="bikeCard__year">{{ year }}</p>
			<p class="bikeCard__model">{{ model }}</p>
			<p class="bikeCard__component">{{ component }}</p>
			<p class="bikeCard__price">{{ `¥ ${price.toLocaleString()}` }}</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.bikeCard {
	width: 320px;
	height: 322px;
	background: $c-lightgray;
	text-align: center;
	transition: background 0.25s ease;
	@include media_narrow {
		width: vw(168);
		height: vw(200);
	}

	.bikeCard__img {
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
	.bikeCard__cnt {
		margin-top: 12px;
		@include media_narrow {
			margin-top: vw(9);
		}
	}
	.bikeCard__year,
	.bikeCard__model,
	.bikeCard__component,
	.bikeCard__price {
		transition: color 0.25s ease;
	}
	.bikeCard__year {
		@include fz(12);
		font-weight: 300;
		line-height: 1.2;
		@include media_narrow {
			@include fz(10);
		}
	}
	.bikeCard__model {
		margin-top: 5px;
		@include fz(16);
		font-weight: 600;
		line-height: 1.2;
		@include media_narrow {
			margin-top: vw(4);
			@include fz(14);
		}
	}
	.bikeCard__component {
		margin-top: 2px;
		@include fz(12);
		font-weight: 300;
		line-height: 1.2;
		@include media_narrow {
			margin-top: vw(2);
			@include fz(12);
		}
	}
	.bikeCard__price {
		margin-top: 20px;
		color: $c-red;
		@include fz(14);
		font-weight: 600;
		line-height: 1.5;
		letter-spacing: 0.05em;
		@include media_narrow {
			margin-top: vw(10);
			@include fz(14);
		}
	}
}

/* bikeCard--vw ------------ */
.bikeCard--vw {
	width: max(minpx(320), pcvw(320));
	height: max(minpx(322), pcvw(322));
	@include media_narrow {
		width: vw(168);
		height: vw(200);
	}

	.bikeCard__img {
		padding-top: max(minpx(9), pcvw(9));
		width: max(minpx(320), pcvw(320));
		height: max(minpx(178), pcvw(178));
		@include media_narrow {
			padding-top: vw(8);
			width: vw(132);
			height: vw(88);
		}
	}
	.bikeCard__cnt {
		margin-top: max(minpx(12), pcvw(12));
		@include media_narrow {
			margin-top: vw(9);
		}
	}
	.bikeCard__year {
		font-size: max(minpx(12), pcvw(12));
		@include media_narrow {
			@include fz(10);
		}
	}
	.bikeCard__model {
		margin-top: max(minpx(5), pcvw(5));
		font-size: max(minpx(16), pcvw(16));
		@include media_narrow {
			margin-top: vw(4);
			@include fz(14);
		}
	}
	.bikeCard__component {
		margin-top: max(minpx(2), pcvw(2));
		font-size: max(minpx(12), pcvw(12));
		@include media_narrow {
			margin-top: vw(2);
			@include fz(12);
		}
	}
	.bikeCard__price {
		margin-top: max(minpx(20), pcvw(20));
		font-size: max(minpx(14), pcvw(14));
		@include media_narrow {
			margin-top: vw(10);
			@include fz(14);
		}
	}
}
</style>
