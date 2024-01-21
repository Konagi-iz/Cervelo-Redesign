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
		<div class="footer-sns">
			<div class="footer-sns__in">
				<router-link to="" v-for="(sns, index) in snsList" :key="index" class="footer-sns__link">
					<component :is="sns" class="footer-sns__icon"></component>
				</router-link>
			</div>
			<!-- .footer-sns__in -->
		</div>
		<!-- .footer-sns -->
		<div class="footer__in">
			<div class="footer-contact">
				<router-link to="" class="footer-contact__link">
					<IconMail class="footer-contact__icon"></IconMail>
					<p class="footer-contact__txt">
						<span class="footer-contact__en">CONTACT</span>
						<span class="footer-contact__jp">お問い合わせ(一般の方)</span>
					</p>
				</router-link>
				<!-- .footer-contact__link -->
				<router-link to="" class="footer-contact__link">
					<IconMail class="footer-contact__icon"></IconMail>
					<p class="footer-contact__txt">
						<span class="footer-contact__en">CONTACT</span>
						<span class="footer-contact__jp">お問い合わせ(自転車業界の方)</span>
					</p>
				</router-link>
				<!-- .footer-contact__link -->
			</div>
			<!-- .footer-contact -->
			<div class="footer-nav">
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
				<div class="footer-nav__common">
					<router-link to="" class="footer-nav__link">プライバシーポリシー</router-link>
					<router-link to="" class="footer-nav__link">利用規約</router-link>
				</div>
				<!-- .footer-nav__common -->
			</div>
			<!-- .footer-nav -->
			<div class="footer-btm">
				<Logo class="footer-btm__logo"></Logo>
				<small class="footer-btm__copyright">Copyright© AZUMA Co.,Ltd. All Rights Reserved.</small>
			</div>
		</div>
		<!-- .footer__in -->
	</footer>
</template>

<style lang="scss">
#footer {
	padding-bottom: 22px;
	width: 100%;
	background: #0d0d0d;
	@include media_narrow {
		padding-bottom: vw(12);
	}
	.footer-sns {
		border-bottom: 1px solid $c-gray;
		padding-block: 50px 51px;
		@include media_narrow {
			border-bottom-width: vw(1);
			padding-block: vw(40) vw(41);
		}
	}
	.footer-sns__in {
		display: flex;
		gap: 36px;
		margin-inline: auto;
		padding-left: 50px;
		width: 1000px;
		@include media_narrow {
			gap: vw(36);
			padding-left: vw(15);
			width: 100%;
		}
	}
	.footer-sns__link {
		transition: opacity 0.3s ease;
		@include media_hover {
			&:hover {
				opacity: 0.6;
			}
		}
	}
	.footer-sns__icon {
		@include media_narrow {
			width: vw(24);
			height: vw(24);
		}
	}

	/* contact ------------ */
	.footer__in {
		margin-top: 24px;
		border-right: 1px solid $c-gray;
		width: 1000px;
		@include media_wide {
			margin-inline: auto;
		}
		@include media_narrow {
			margin-top: vw(20);
			border-right-width: vw(1);
			width: calc(100% - vw(15));
		}
	}
	.footer-contact {
		position: relative;
		display: flex;
		border-bottom: 1px solid $c-gray;
		padding-bottom: 24px;
		@include media_narrow {
			flex-direction: column;
			border-bottom-width: vw(1);
			padding-bottom: vw(20);
			padding-left: vw(15);
		}
		&::after {
			content: '';
			position: absolute;
			bottom: -1px;
			left: 0;
			transform: translateX(-100%);
			width: calc((100vw - 100%) / 2);
			height: 1px;
			background: $c-gray;
			@include media_narrow {
				display: none;
			}
			/*---------------- after */
		}
	}
	.footer-contact__link {
		display: flex;
		align-items: center;
		gap: 24px;
		border-left: 1px solid $c-gray;
		height: 233px;
		transition: background 0.4s ease;
		@include media_wide {
			justify-content: center;
			flex: 1;
		}
		@include media_narrow {
			position: relative;
			gap: vw(24);
			padding-left: vw(65);
			height: vw(93);
			&:nth-of-type(1) ::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				width: calc(100% - vw(20));
				height: vw(1);
				background: $c-gray;
				/*---------------- after */
			}
		}
		@include media_hover {
			&:hover {
				background: $c-darkgray;
			}
		}
	}
	.footer-contact__icon {
		width: 24px;
		height: auto;
		@include media_narrow {
			width: vw(24);
		}
	}
	.footer-contact__txt {
		display: flex;
		flex-direction: column;
		color: $c-white;
	}
	.footer-contact__en {
		@include font-en;
		@include fz(18);
		font-weight: 600;
		line-height: 1.2;
		font-style: italic;
	}
	.footer-contact__jp {
		@include fz(12);
		font-weight: 600;
		line-height: 1.5;
	}

	/* nav ------------ */
	.footer-nav {
		display: flex;
		gap: 416px;
		margin-top: 97px;
		@include media_narrow {
			flex-direction: column;
			gap: vw(100);
			margin-top: vw(75);
			padding-left: vw(15);
		}
	}
	.footer-nav__pages {
		display: flex;
		gap: 60px;
		@include media_narrow {
			gap: vw(60);
		}
	}
	.footer-nav__wrp-sp {
		display: flex;
		gap: 60px;
		@include media_narrow {
			flex-direction: column;
			gap: vw(20);
		}
	}
	.footer-nav__wrp {
		display: flex;
		flex-direction: column;
		gap: 16px;
		@include media_narrow {
			gap: vw(24);
		}
	}
	.footer-nav__item {
		position: relative;
		width: fit-content;
		color: $c-white;
		@include fz(16);
		font-weight: 600;
		line-height: 1.2;
		font-style: italic;
		@include media_narrow {
			@include fz(22);
			letter-spacing: 0.05em;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: -5px;
			left: 0;
			width: 100%;
			height: 1px;
			background: $c-gray;
			transform: scaleX(0);
			transform-origin: right;
			transition: transform 0.5s $e-out;
			/*---------------- after */
		}
		@include media_hover {
			&:hover::after {
				transform: scaleX(1);
				transform-origin: left;
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
		color: $c-white;
		@include font-en;
		@include fz(12);
		font-weight: 500;
		line-height: 1.2;
		transition: opacity 0.4s ease;
		@include media_narrow {
			@include fz(14);
		}
		@include media_hover {
			&:hover {
				opacity: 0.4;
			}
		}
	}

	.footer-nav__common {
		display: flex;
		flex-direction: column;
		gap: 16px;
		@include media_narrow {
			gap: vw(16);
		}
	}
	.footer-nav__link {
		color: $c-white;
		@include fz(10);
		line-height: 1.2;
		transition: opacity 0.3s ease;
		@include media_hover {
			&:hover {
				opacity: 0.5;
			}
		}
	}

	.footer-btm {
		display: flex;
		flex-direction: column;
		gap: 22px;
		margin-top: 123px;
		@include media_narrow {
			gap: vw(10);
			margin-top: vw(38);
			padding-left: vw(15);
		}
	}
	.footer-btm__logo {
		width: 842px;
		height: auto;
		@include media_narrow {
			width: vw(325);
		}
	}
	.footer-btm__copyright {
		color: $c-white;
		@include font-en;
		@include fz(12);
		line-height: 1.2;
		@include media_narrow {
			@include fz(9);
		}
	}
}
</style>
