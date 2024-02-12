<script setup>
import Button from '@/components/parts/Button.vue';
</script>

<template>
	<section class="FooterShopList">
		<div class="FooterShopList__in">
			<div class="FooterShopList__txts">
				<h2 class="FooterShopList__ttl">
					SHOP
					<br />
					LIST
				</h2>
				<!-- .FooterShopList__ttl -->
				<p class="FooterShopList__txt">
					ご購入はお近くの
					<br class="dn-w" />
					取り扱い店舗から
				</p>
			</div>
			<!-- .FooterShopList__txts -->
			<router-link to="">
				<Button :color="['white', 'white', 'red']" btnStyle="border"></Button>
			</router-link>
		</div>
		<!-- .FooterShopList__in -->
	</section>
</template>

<style scoped lang="scss">
.FooterShopList {
	padding-block: 130px;
	width: 100%;
	background: $c-darkgray;
	@include media_narrow {
		padding: vw(100) vw(15);
	}
	.FooterShopList__in {
		z-index: 1;
		position: relative;
		margin-inline: auto;
		width: 1000px;
		height: 360px;
		background: url(/assets/img/common/shoplist/img_01.jpg) no-repeat center center / cover;
		@include media_narrow {
			width: 100%;
			height: vw(421);
			background-image: url(/assets/img/common/shoplist/SP/img_01.jpg);
		}
		&::before,
		&::after {
			content: '';
			z-index: -1;
			position: absolute;
			height: 50%;
			background: $c-red;
			/*---------------- before, after */
		}
		&::before {
			content: '';
			top: 0;
			left: 0;
			width: 724px;
			@include media_narrow {
				width: vw(159);
				height: vw(305);
			}
			/*---------------- before */
		}
		&::after {
			content: '';
			bottom: 0;
			right: 0;
			width: 276px;
			@include media_narrow {
				width: vw(186);
				height: vw(116);
			}
			/*---------------- after */
		}
	}
	.FooterShopList__txts {
		position: absolute;
		top: 123px;
		left: 57px;
		display: flex;
		gap: 27px;
		@include media_narrow {
			top: vw(22);
			left: vw(30);
			flex-direction: column;
			gap: vw(15);
		}
	}
	.FooterShopList__ttl {
		color: $c-white;
		@include font-en;
		@include fz(96);
		font-weight: 600;
		font-style: italic;
		line-height: 1;
		letter-spacing: 0.05em;
		@include media_narrow {
			@include fz(64);
		}
	}
	.FooterShopList__txt {
		margin-top: 11px;
		color: $c-white;
		@include fz(14);
		font-weight: 600;
		line-height: 1.9;
		letter-spacing: 0.18em;
		@include media_narrow {
			@include fz(12);
			letter-spacing: 0.12em;
		}
	}
	.btn {
		position: absolute;
		right: 55px;
		bottom: 69px;
		@include media_narrow {
			right: vw(11);
			bottom: vw(36);
		}
	}
}
</style>
