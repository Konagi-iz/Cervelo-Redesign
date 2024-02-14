<script setup>
import Button from '@/components/parts/Button.vue';
</script>

<template>
	<section class="lcl-shoplist" id="shoplist">
		<div class="lcl-shoplist__in">
			<div class="lcl-shoplist-cnt">
				<h2 class="lcl-shoplist-cnt__ttl">
					<img
						class="lcl-shoplist-cnt__img"
						src="/assets/img/home/shoplist/txt_ttl.svg"
						alt="SHOP LIST"
						loading="lazy"
						width="503"
						height="318"
					/>
				</h2>
				<img
					class="lcl-shoplist-cnt__icon"
					src="/assets/img/home/shoplist/icon_pin.svg"
					alt="ピンのアイコン"
					loading="lazy"
					width="106"
					height="106"
				/>
				<p class="lcl-bikes-cnt__txt">ご購入はお近くの取り扱い店舗から</p>
				<router-link :to="{ name: 'shop list' }">
					<Button :color="['white', 'red', 'black']" content="SHOP LIST"></Button>
				</router-link>
			</div>
			<!-- .lcl-shoplist-cnt__in -->
			<div class="lcl-shoplist-vis scr-anin">
				<img class="lcl-shoplist-vis__img" src="/assets/img/home/shoplist/img_01.png" alt="" loading="lazy" width="724" height="536" />
				<svg class="lcl-shoplist-vis__icons" width="724" height="536" viewBox="0 0 724 536" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_344_152)">
						<path
							d="M246.724 319.487C246.724 332.998 231.272 346.509 231.272 346.509C231.272 346.509 215.819 332.998 215.819 319.487C215.819 315.388 217.447 311.458 220.345 308.56C223.243 305.662 227.173 304.034 231.272 304.034C235.37 304.034 239.3 305.662 242.198 308.56C245.096 311.458 246.724 315.388 246.724 319.487Z"
							stroke="#DC1405"
							stroke-width="4.04527"
							stroke-miterlimit="10"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M231.272 346.509C231.272 346.509 246.724 332.998 246.724 319.487C246.724 315.388 245.096 311.458 242.198 308.56C239.3 305.662 235.37 304.034 231.272 304.034C227.173 304.034 223.243 305.662 220.345 308.56C217.447 311.458 215.819 315.388 215.819 319.487C215.819 332.998 231.272 346.509 231.272 346.509ZM237.056 319.487C237.056 322.682 234.466 325.272 231.272 325.272C228.077 325.272 225.487 322.682 225.487 319.487C225.487 316.292 228.077 313.702 231.272 313.702C234.466 313.702 237.056 316.292 237.056 319.487Z"
							fill="#DC1405"
						/>
					</g>
					<g clip-path="url(#clip1_344_152)">
						<path
							d="M449.724 55.4869C449.724 68.9981 434.272 82.5092 434.272 82.5092C434.272 82.5092 418.819 68.9981 418.819 55.4869C418.819 51.3885 420.447 47.458 423.345 44.56C426.243 41.662 430.173 40.0339 434.272 40.0339C438.37 40.0339 442.3 41.662 445.198 44.56C448.096 47.458 449.724 51.3885 449.724 55.4869Z"
							stroke="#DC1405"
							stroke-width="4.04527"
							stroke-miterlimit="10"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M434.272 82.5092C434.272 82.5092 449.724 68.9981 449.724 55.4869C449.724 51.3885 448.096 47.458 445.198 44.56C442.3 41.662 438.37 40.0339 434.272 40.0339C430.173 40.0339 426.243 41.662 423.345 44.56C420.447 47.458 418.819 51.3885 418.819 55.4869C418.819 68.9981 434.272 82.5092 434.272 82.5092ZM440.056 55.4869C440.056 58.6817 437.466 61.2716 434.272 61.2716C431.077 61.2716 428.487 58.6817 428.487 55.4869C428.487 52.2921 431.077 49.7021 434.272 49.7021C437.466 49.7021 440.056 52.2921 440.056 55.4869Z"
							fill="#DC1405"
						/>
					</g>
					<g clip-path="url(#clip2_344_152)">
						<path
							d="M246.724 101.487C246.724 114.998 231.272 128.509 231.272 128.509C231.272 128.509 215.819 114.998 215.819 101.487C215.819 97.3885 217.447 93.458 220.345 90.56C223.243 87.662 227.173 86.0339 231.272 86.0339C235.37 86.0339 239.3 87.662 242.198 90.56C245.096 93.458 246.724 97.3885 246.724 101.487Z"
							stroke="#DC1405"
							stroke-width="4.04527"
							stroke-miterlimit="10"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M231.272 128.509C231.272 128.509 246.724 114.998 246.724 101.487C246.724 97.3885 245.096 93.458 242.198 90.56C239.3 87.662 235.37 86.0339 231.272 86.0339C227.173 86.0339 223.243 87.662 220.345 90.56C217.447 93.458 215.819 97.3885 215.819 101.487C215.819 114.998 231.272 128.509 231.272 128.509ZM237.056 101.487C237.056 104.682 234.466 107.272 231.272 107.272C228.077 107.272 225.487 104.682 225.487 101.487C225.487 98.2921 228.077 95.7021 231.272 95.7021C234.466 95.7021 237.056 98.2921 237.056 101.487Z"
							fill="#DC1405"
						/>
					</g>
					<defs>
						<clipPath id="clip0_344_152">
							<rect width="48.5432" height="48.5432" fill="white" transform="translate(207 301)" />
						</clipPath>
						<clipPath id="clip1_344_152">
							<rect width="48.5432" height="48.5432" fill="white" transform="translate(410 37)" />
						</clipPath>
						<clipPath id="clip2_344_152">
							<rect width="48.5432" height="48.5432" fill="white" transform="translate(207 83)" />
						</clipPath>
					</defs>
				</svg>
				<!-- .lcl-shoplist-vis__icons -->
			</div>
		</div>
		<!-- .lcl-shoplist-cnt -->
	</section>
</template>

<style scoped lang="scss">
.lcl-shoplist {
	position: relative;
	margin-inline: auto;
	width: min(100%, 1900px);
	background: url(/assets/img/common/bg_grid.png) repeat left top / 93px, $c-lightgray;
	@include media_wide {
		height: 536px;
	}
	@include media_narrow {
		width: 100%;
		background-size: vw(93);
	}
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: calc((100% - 1300px) / 2);
		height: 100%;
		background: $c-red;
		@include media_narrow {
			display: none;
		}
		/*---------------- after */
	}

	.lcl-shoplist__in {
		position: relative;
		margin-inline: auto;
		width: 1300px;
		@include media_wide {
			height: 100%;
		}
		@include media_narrow {
			display: flex;
			flex-direction: column-reverse;
			width: 100%;
		}
	}
	.lcl-shoplist-cnt {
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 20px;
		width: 576px;
		height: 100%;
		background: $c-red;
		@include media_narrow {
			position: relative;
			gap: vw(16);
			width: 100%;
			height: vw(348);
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			clip-path: polygon(0 0, 0 100%, 1px 100%, 100% 0);
			width: 96px;
			height: 100%;
			background: $c-red;
			@include media_wide {
				right: 1px;
				transform: translateX(100%);
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
	.lcl-shoplist-cnt__ttl {
		z-index: -1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.lcl-shoplist-cnt__img {
		max-width: initial;
		@include media_narrow {
			width: vw(425);
		}
	}
	.lcl-shoplist-cnt__icon {
		@include media_narrow {
			width: vw(106);
			height: vw(106);
		}
	}
	.lcl-bikes-cnt__txt {
		color: $c-white;
		@include txt-basic--bold;
	}

	.lcl-shoplist-vis {
		position: relative;
		width: min(724px, 100%);
		@include media_wide {
			margin-left: calc(1300px - 724px);
		}
		@include media_narrow {
			padding-top: vw(43);
			width: 100%;
		}
		&.scr-anin--on .lcl-shoplist-vis__icons g {
			transform: translateY(0);
			opacity: 1;
		}
	}
	.lcl-shoplist-vis__img {
	}
	.lcl-shoplist-vis__icons {
		position: absolute;
		bottom: 0;
		left: 0;
		@include media_narrow {
			width: 100%;
			height: auto;
		}
		g {
			transform: translateY(-5%);
			transition: transform 0.8s $e-out, opacity 0.8s $e-out;
			opacity: 0;
			&:nth-of-type(2) {
				transition-delay: 0.1s;
			}
			&:nth-of-type(3) {
				transition-delay: 0.2s;
			}
		}
	}
}
</style>
