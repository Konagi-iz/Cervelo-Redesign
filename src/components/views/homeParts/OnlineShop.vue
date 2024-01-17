<script setup>
import Button from '@/components/parts/Button.vue';
</script>

<template>
	<section class="lcl-online">
		<img
			class="lcl-online__img"
			src="/assets/img/home/onlineshop/img_01.jpg"
			alt="Cerveloバイクの写真"
			loading="lazy"
			width="529"
			height="330"
		/>
		<div class="lcl-online-cnt">
			<div class="lcl-online-cnt__in">
				<h2 class="lcl-online-cnt__ttl">ONLINE SHOP</h2>
				<p class="lcl-online-cnt__txt">純正アクセサリーやグッズなど</p>
				<a href="">
					<Button :color="['white', 'white']" btnStyle="border"></Button>
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.lcl-online {
	display: flex;
  margin-top: 120px;
	margin-inline: auto;
	width: 1000px;
	.lcl-online__img {
		width: 529px;
	}
	.lcl-online-cnt {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		background: $c-darkgray;
	}
	.lcl-online-cnt__in {
		display: flex;
		flex-direction: column;
		gap: 20px;
		color: $c-white;
	}
	.lcl-online-cnt__ttl {
		@include font-en;
		@include fz(40);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.01;
		font-style: italic;
	}
	.lcl-online-cnt__txt {
		@include fz(14);
		font-weight: 600;
		line-height: 1.9;
	}
}
</style>
