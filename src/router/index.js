import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/components/views/HomeView.vue';
import { nextTick } from 'vue';
import { globalState, reload } from '@/store';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/bikes',
			name: 'bikes',
			component: () => import('@/components/views/BikesView.vue'),
		},
		{
			path: '/history',
			name: 'history',
			component: () => import('@/components/views/HistoryView.vue'),
		},
		{
			path: '/shoplist',
			name: 'shop list',
			component: () => import('@/components/views/ShoplistView.vue'),
		},
		{
			path: '/support',
			name: 'support',
			component: () => import('@/components/views/SupportView.vue'),
		},
		{
			path: '/news',
			name: 'news',
			component: () => import('@/components/views/NewsView.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	// 画面遷移アニメーション
	const load = document.querySelector('.load');
	load.classList.add('load--active');

	if (to.name === 'home' && from.name !== 'home' && from.name !== undefined) {
		reload();
		console.log("ナビゲーションガードが'home'に対して発動されました");
		// nextTick(() => {
		// });
	}

	// next();
	setTimeout(() => {
		next();
	}, 600);
});

router.afterEach((to, from, next) => {
	/* page switch load ------------ */
	const load = document.querySelector('.load');
	load.classList.remove('load--active');

	/* Scroll animation ------------ */
	function scrollAnimation() {
		const targets = document.querySelectorAll('.scr-anin');

		targets.forEach((e) => {
			window.addEventListener('scroll', () => {
				const scroll = window.scrollY;
				const h = window.innerHeight;
				const pos = scroll + e.getBoundingClientRect().top;

				if (scroll + h * 0.8 > pos) {
					e.classList.add('scr-anin--on');
				}
			});
		});
	}
	nextTick(() => {
		scrollAnimation();
	});
});

export default router;
