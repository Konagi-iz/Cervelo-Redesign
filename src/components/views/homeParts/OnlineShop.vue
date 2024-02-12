<script setup>
import Button from '@/components/parts/Button.vue';
</script>

<template>
	<section class="lcl-online scr-anin" id="onlineshop">
		<div class="lcl-online__in">
			<img
				class="lcl-online__img"
				src="/assets/img/home/onlineshop/img_01.jpg"
				alt="Cerveloバイクの写真"
				loading="lazy"
				width="529"
				height="444"
			/>
			<div class="lcl-online-cnt">
				<div class="lcl-online-cnt__in">
					<h2 class="lcl-online-cnt__ttl">ONLINE SHOP</h2>
					<p class="lcl-online-cnt__txt">純正アクセサリーやグッズなど</p>
					<a href="">
						<Button :color="['white', 'black', 'red']"></Button>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.lcl-online {
	position: relative;
	margin-top: 130px;
	@include media_narrow {
		margin-top: vw(70);
	}
	&::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 222px;
		left: 0;
		transform: translateX(-20%);
		clip-path: inset(-1% 100% -1% -1%);
		width: max(877px, (100% - 423px) - ((100% - 1300px) / 2));
		height: 402px;
		background: $c-red;
		transition: transform 2s $e-out, clip-path 2s $e-out;
		@include media_narrow {
			top: vw(269);
			height: vw(389);
			transition-duration: 3s;
		}
		/*---------------- before */
	}
	@include media_narrow {
		&::after {
			content: '';
			z-index: -1;
			position: absolute;
			top: vw(269);
			right: 0;
			transform: translateY(-20%);
			clip-path: inset(-1% -1% 100% -1%);
			width: vw(97);
			height: vw(325);
			background: $c-white;
			transition: transform 1.5s $e-out, clip-path 1.5s $e-out;
		}
		/*---------------- after */
	}
	&.scr-anin--on::before {
		transform: translateX(0);
		clip-path: inset(-1% -1% -1% -1%);
	}
	&.scr-anin--on::after {
		transform: translateY(0);
		clip-path: inset(-1% -1% -1% -1%);
	}
	&.scr-anin--on .lcl-online__in {
		transform: translateY(0);
		clip-path: inset(-1% -1% -1% -1%);
	}
	.lcl-online__in {
		transform: translateY(30%);
		clip-path: inset(100% -1% -1% -1%);
		display: flex;
		margin-inline: auto;
		width: 1000px;
		transition: transform 1.5s $e-out, clip-path 1.5s $e-out;
		@include media_wide {
			height: 444px;
		}
		@include media_narrow {
			flex-direction: column;
			width: 100%;
			padding-inline: vw(15);
		}
	}
	.lcl-online__img {
		width: 529px;
		@include media_narrow {
			width: 100%;
		}
	}
	.lcl-online-cnt {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $c-darkgray;
		@include media_wide {
			flex: 1;
		}
		@include media_narrow {
			height: vw(248);
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			clip-path: polygon(58px 0, 0 100%, 100% 100%, 100% 0);
			width: 59px;
			height: 100%;
			background: $c-darkgray;
			@include media_wide {
				left: 1px;
				transform: translateX(-100%);
			}
			@include media_narrow {
				top: vw(1);
				left: 0;
				transform: translateY(-100%);
				clip-path: polygon(0 vw(42), 0 100%, 100% 100%, 100% 0);
				width: 100%;
				height: vw(43);
			}
			/*---------------- after */
		}
	}
	.lcl-online-cnt__in {
		display: flex;
		flex-direction: column;
		gap: 26px;
		color: $c-white;
		@include media_narrow {
			gap: vw(20);
		}
	}
	.lcl-online-cnt__ttl {
		@include font-en;
		@include fz(40);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.01;
		font-style: italic;
		@include media_narrow {
			@include fz(36);
		}
	}
	.lcl-online-cnt__txt {
		@include txt-basic--bold;
	}
}
</style>
