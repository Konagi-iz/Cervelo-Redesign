<script setup>
import { ref } from 'vue';

const snsList = ref(['x', 'instagram', 'facebook']);
</script>

<template>
	<footer class="footer">
		<div class="footer-sns">
			<div class="footer-sns__in">
				<a v-for="(item, index) in snsList" :key="index" class="footer-sns__link" href="">
					<img class="footer-sns__icon" :src="`/assets/img/icon/icon-${item}.svg`" :alt="item" loading="lazy" width="24" height="24" />
				</a>
			</div>
			<!-- .footer-sns__in -->
		</div>
		<!-- .footer-sns -->
		<div class="footer__in">
			<div class="footer-contact">
				<a class="footer-contact__link" href="">
					<img
						class="footer-contact__icon"
						src="/assets/img/icon/icon-mail.svg"
						alt="メールアイコン"
						loading="lazy"
						width="24"
						height="24"
					/>
					<p class="footer-contact__txt">
						<span class="footer-contact__en">CONTACT</span>
						<span class="footer-contact__jp">お問い合わせ(一般の方)</span>
					</p>
				</a>
				<!-- .footer-contact__link -->
				<a class="footer-contact__link" href="">
					<img
						class="footer-contact__icon"
						src="/assets/img/icon/icon-mail.svg"
						alt="メールアイコン"
						loading="lazy"
						width="24"
						height="24"
					/>
					<p class="footer-contact__txt">
						<span class="footer-contact__en">CONTACT</span>
						<span class="footer-contact__jp">お問い合わせ(自転車業界の方)</span>
					</p>
				</a>
				<!-- .footer-contact__link -->
			</div>
			<!-- .footer-contact -->
			<div class="footer-nav">
				<div class="footer-nav__pages">
					<div class="footer-nav__wrp">
						<router-link class="footer-nav__item" :to="{ name: 'bikes' }">BIKES</router-link>
						<div class="footer-nav-child">
							<a class="footer-nav-child__item" href="">ROAD</a>
							<a class="footer-nav-child__item" href="">TIME TRIAL</a>
							<a class="footer-nav-child__item" href="">OFF-ROAD</a>
							<a class="footer-nav-child__item" href="">E-BIKE</a>
						</div>
					</div>
					<!-- .footer-nav__wrp -->
					<div class="footer-nav__wrp">
						<router-link class="footer-nav__item" :to="{ name: 'history' }">HISTORY</router-link>
						<router-link class="footer-nav__item" :to="{ name: 'shop list' }">SHOP LIST</router-link>
						<a class="footer-nav__item" href="">ONLINE SHOP</a>
					</div>
					<!-- .footer-nav__wrp -->
					<div class="footer-nav__wrp">
						<router-link class="footer-nav__item" :to="{ name: 'support' }">SUPPORT</router-link>
						<router-link class="footer-nav__item" :to="{ name: 'news' }">NEWS</router-link>
					</div>
					<!-- .footer-nav__wrp -->
				</div>
				<!-- .footer-nav__pages -->
				<div class="footer-nav__common">
					<a class="footer-nav__link" href="">プライバシーポリシー</a>
					<a class="footer-nav__link" href="">利用規約</a>
				</div>
				<!-- .footer-nav__common -->
			</div>
			<!-- .footer-nav -->
			<div class="footer-btm">
				<img class="footer-btm__logo" src="/assets/img/logo.svg" alt="Cervelo Logo" loading="lazy" width="842" height="127" />
				<small class="footer-btm__copyright">Copyright© AZUMA Co.,Ltd. All Rights Reserved.</small>
			</div>
		</div>
		<!-- .footer__in -->
	</footer>
</template>

<style lang="scss">
.footer {
	padding-bottom: 22px;
	width: 100%;
	background: #0d0d0d;
	.footer-sns {
		border-bottom: 1px solid $c-white;
		padding-block: 50px 51px;
	}
	.footer-sns__in {
		display: flex;
		gap: 36px;
		margin-inline: auto;
		padding-left: 50px;
		width: 1000px;
	}

	.footer__in {
		margin-top: 24px;
		margin-inline: auto;
		border-right: 1px solid $c-white;
		width: 1000px;
	}
	.footer-contact {
		position: relative;
		display: flex;
		border-bottom: 1px solid $c-white;
		padding-bottom: 24px;
		&::after {
			content: '';
			position: absolute;
			bottom: -1px;
			left: 0;
			transform: translateX(-100%);
			width: calc((100vw - 100%) / 2);
			height: 1px;
			background: $c-white;
			/*---------------- after */
		}
	}
	.footer-contact__link {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		flex: 1;
		border-left: 1px solid $c-white;
		height: 233px;
		transition: background 0.4s ease;
		&:hover {
			background: $c-darkgray;
		}
	}
	.footer-contact__icon {
		width: 24px;
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

	.footer-nav {
		display: flex;
		gap: 416px;
		margin-top: 97px;
	}
	.footer-nav__pages {
		display: flex;
		gap: 60px;
	}
	.footer-nav__wrp {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.footer-nav__item {
		position: relative;
		color: $c-white;
		@include fz(16);
		font-weight: 600;
		line-height: 1.2;
		font-style: italic;
		&::after {
			content: '';
			position: absolute;
			bottom: -5px;
			left: 0;
			width: 100%;
			height: 1px;
			background: $c-white;
			transform: scaleX(0);
			transform-origin: right;
			transition: transform 0.5s $e-out;
			/*---------------- after */
		}
		&:hover::after {
			transform: scaleX(1);
			transform-origin: left;
		}
	}
	.footer-nav-child {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.footer-nav-child__item {
		color: $c-white;
		@include font-en;
		@include fz(12);
		font-weight: 500;
		line-height: 1.2;
		transition: opacity 0.4s ease;
		&:hover {
			opacity: 0.4;
		}
	}

	.footer-nav__common {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.footer-nav__link {
		color: $c-white;
		@include fz(10);
		line-height: 1.2;
		transition: opacity .3s ease;
		&:hover {
			opacity: .5;
		}
	}

	.footer-btm {
		display: flex;
		flex-direction: column;
		gap: 22px;
		margin-top: 123px;
	}
	.footer-btm__logo {
		width: 842px;
	}
	.footer-btm__copyright {
		color: $c-white;
		@include font-en;
		@include fz(12);
		line-height: 1.2;
	}
}
</style>
