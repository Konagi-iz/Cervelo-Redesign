<script setup>
import IconMail from '~icons/svg/icon_mail';
import IconX from '~icons/svg/icon_x';
import IconInstagram from '~icons/svg/icon_instagram';
import IconFacebook from '~icons/svg/icon_facebook';
import Logo from '~icons/svg/logo';

const snsList = [IconX, IconInstagram, IconFacebook];
</script>

<template>
	<footer id="footer">
		<div class="footer-nav">
			<div class="footer-nav__in">
				<div class="footer-nav__pages">
					<div class="footer-nav__wrp">
						<router-link class="footer-nav__item" :to="{ name: 'bikes' }">BIKES</router-link>
						<div class="footer-nav-child">
							<router-link to="" class="footer-nav-child__item">ROAD</router-link>
							<router-link to="" class="footer-nav-child__item">TIME TRIAL</router-link>
							<router-link to="" class="footer-nav-child__item">OFF-ROAD</router-link>
							<router-link to="" class="footer-nav-child__item">E-BIKE</router-link>
						</div>
					</div>
					<!-- .footer-nav__wrp -->
					<div class="footer-nav__wrp-sp">
						<div class="footer-nav__wrp">
							<router-link :to="{ name: 'history' }" class="footer-nav__item">HISTORY</router-link>
							<router-link :to="{ name: 'shop list' }" class="footer-nav__item">SHOP LIST</router-link>
							<router-link to="" class="footer-nav__item">ONLINE SHOP</router-link>
						</div>
						<!-- .footer-nav__wrp -->
						<div class="footer-nav__wrp">
							<router-link :to="{ name: 'support' }" class="footer-nav__item">SUPPORT</router-link>
							<router-link :to="{ name: 'news' }" class="footer-nav__item">NEWS</router-link>
						</div>
						<!-- .footer-nav__wrp -->
					</div>
				</div>
				<!-- .footer-nav__pages -->
				<div class="footer-common">
					<div class="footer-common__in">
						<router-link to="" class="footer-common__link">プライバシーポリシー</router-link>
						<router-link to="" class="footer-common__link">利用規約</router-link>
					</div>
					<small class="footer-common__copyright">Copyright© AZUMA Co.,Ltd. All Rights Reserved.</small>
				</div>
				<!-- .footer-nav__common -->
			</div>
		</div>
		<!-- .footer-nav -->
		<div class="footer-btm">
			<div class="footer-btm__in">
				<router-link to="" class="footer-contact">
					<IconMail class="footer-contact__icon"></IconMail>
					<p class="footer-contact__txt">CONTACT</p>
				</router-link>
				<!-- .footer-contact -->
				<div class="footer-sns">
					<router-link to="" v-for="(sns, index) in snsList" :key="index" class="footer-sns__link">
						<component :is="sns" class="footer-sns__icon"></component>
					</router-link>
				</div>
				<!-- .footer-sns -->
			</div>
			<Logo class="footer-btm__logo"></Logo>
		</div>
	</footer>
</template>

<style lang="scss">
#footer {
	overflow: clip;
	width: 100%;
	/* nav ------------ */
	.footer-nav {
		z-index: 1;
		position: relative;
		padding-block: 146px 142px;
		background: url('/assets/img/bg/bg_grid.png') repeat left top / 93px, $c-lightgray;
		@include media_narrow {
			padding-block: vw(75) vw(78);
			background: url('/assets/img/bg/bg_grid.png') repeat left top / vw(93), $c-lightgray;
		}
	}
	.footer-nav__in {
		display: flex;
		justify-content: space-between;
		margin-inline: auto;
		width: 1000px;
		@include media_narrow {
			flex-direction: column;
			justify-content: flex-start;
			gap: vw(66);
			padding-inline: vw(15);
			width: 100%;
		}
	}
	.footer-nav__pages {
		display: flex;
		gap: 60px;
		@include media_narrow {
			gap: vw(20);
		}
	}
	.footer-nav__wrp-sp {
		display: flex;
		gap: 60px;
		@include media_narrow {
			flex-direction: column;
			gap: vw(14);
		}
	}
	.footer-nav__wrp {
		display: flex;
		flex-direction: column;
		gap: 16px;
		@include media_narrow {
			gap: vw(14);
		}
	}
	.footer-nav__item {
		position: relative;
		width: fit-content;
		color: $c-red;
		@include fz(16);
		font-weight: 600;
		line-height: 1.2;
		font-style: italic;
		white-space: nowrap;
		transition: opacity 0.2s ease;
		@include media_narrow {
			@include fz(14);
		}
		@include media_hover {
			&:hover {
				opacity: 0.4;
			}
		}
	}
	.footer-nav-child {
		display: flex;
		flex-direction: column;
		gap: 8px;
		@include media_narrow {
			gap: vw(8);
		}
	}
	.footer-nav-child__item {
		color: $c-red;
		@include font-en;
		@include fz(12);
		font-weight: 500;
		line-height: 1.2;
		transition: opacity 0.4s ease;
		@include media_narrow {
			@include fz(11);
		}
		@include media_hover {
			&:hover {
				opacity: 0.4;
			}
		}
	}
	/* footer-common ------------ */
	.footer-common {
		display: flex;
		flex-direction: column;
		gap: 16px;
		@include media_wide {
			align-items: flex-end;
		}
		@include media_narrow {
			gap: vw(28);
		}
	}
	.footer-common__in {
		display: flex;
		flex-direction: column;
		gap: 16px;
		@include media_wide {
			align-items: flex-end;
		}
		@include media_narrow {
			gap: vw(12);
		}
	}
	.footer-common__link {
		color: $c-red;
		@include fz(10);
		font-weight: 600;
		line-height: 1.2;
		transition: opacity 0.3s ease;
		@include media_hover {
			&:hover {
				opacity: 0.5;
			}
		}
	}
	.footer-common__copyright {
		color: $c-red;
		@include font-en;
		@include fz(10);
		font-weight: 400;
		line-height: 1.2;
		white-space: nowrap;
	}
	/* footer-btm ------------ */
	.footer-btm {
		position: sticky;
		bottom: 0;
		left: 0;
		padding-top: 48px;
		background: $c-red;
		@include media_narrow {
			padding-top: vw(30);
		}
	}
	.footer-btm__in {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-inline: auto;
		width: 1000px;
		@include media_narrow {
			padding-inline: vw(15);
			width: 100%;
		}
	}
	.footer-btm__logo {
		display: block;
		transform: translateY(10px);
		margin-top: 61px;
		margin-inline: auto;
		width: 1000px;
		height: auto;
		@include media_narrow {
			transform: translateY(vw(4));
			margin-top: vw(75);
			width: vw(351);
		}
	}
	/* footer-contact ------------ */
	.footer-contact {
		display: flex;
		align-items: center;
		gap: 8px;
		transition: opacity 0.2s ease;
		@include media_wide {
			justify-content: center;
		}
		@include media_narrow {
			gap: vw(8);
		}
		@include media_hover {
			&:hover {
				opacity: 0.5;
			}
		}
	}
	.footer-contact__icon {
		width: 24px;
		height: auto;
		@include media_narrow {
			width: vw(20);
		}
	}
	.footer-contact__txt {
		display: flex;
		flex-direction: column;
		color: $c-white;
		@include font-en;
		@include fz(18);
		font-weight: 600;
		line-height: 1.2;
		font-style: italic;
	}
	/* footer-sns ------------ */
	.footer-sns {
		display: flex;
		gap: 36px;
		@include media_narrow {
			gap: vw(18);
		}
	}
	.footer-sns__link {
		transition: opacity 0.3s ease;
		@include media_hover {
			&:hover {
				opacity: 0.5;
			}
		}
	}
	.footer-sns__icon {
		@include media_narrow {
			width: vw(16);
			height: auto;
		}
	}
}
</style>
