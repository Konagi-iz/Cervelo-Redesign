import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/components/views/HomeView.vue';
import { nextTick } from 'vue';
import { isLoadReady } from '@/store';

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
		/* bikes/~ ------------ */
		{
			path: '/bikes/road',
			name: 'road',
			component: () => import('@/components/views/bikes/RoadView.vue'),
		},
		{
			path: '/bikes/time-trial',
			name: 'time-trial',
			component: () => import('@/components/views/bikes/TimeTrialView.vue'),
		},
		{
			path: '/bikes/off-road',
			name: 'off-road',
			component: () => import('@/components/views/bikes/OffRoadView.vue'),
		},
		{
			path: '/bikes/e-bike',
			name: 'e-bike',
			component: () => import('@/components/views/bikes/EBikeView.vue'),
		},

		{
			path: '/history',
			name: 'history',
			redirect: { name: '404' },
			component: () => import('@/components/views/HistoryView.vue'),
		},
		{
			path: '/shoplist',
			name: 'shop list',
			redirect: { name: '404' },
			component: () => import('@/components/views/ShoplistView.vue'),
		},
		{
			path: '/support',
			name: 'support',
			redirect: { name: '404' },
			component: () => import('@/components/views/SupportView.vue'),
		},
		{
			path: '/news',
			name: 'news',
			redirect: { name: '404' },
			component: () => import('@/components/views/NewsView.vue'),
		},

		/* 存在しないパスを404にリダイレクト ------------ */
		{ path: '/:pathMatch(.*)*', redirect: { name: '404' } },

		/* 404 Not Found ------------ */
		{
			path: '/404',
			name: '404',
			component: () => import('@/components/views/404View.vue'),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return {
			top: 0,
		};
	},
});

// 画面遷移アニメーションの時間
const trsDuration = 600;

/* ページ遷移 前 に行われる処理 ------------ */
router.beforeEach((to, from, next) => {
	// 遷移前が'home'で、遷移先が'home'でなはい時(リロード時)
	// または、遷移前が'home'ではなく、遷移先が'home'な時
	// または、遷移前が'home'ではなく、遷移先が'home'ではない時
	if (
		(to.name === 'home' && from.name !== 'home' && from.name !== undefined) ||
		(to.name !== 'home' && from.name === 'home' && from.name !== undefined) ||
		(to.name !== 'home' && from.name !== 'home' && from.name !== undefined)
	) {
		// 画面遷移アニメーション
		const transition = document.querySelector('.transition');
		transition.classList.add('transition--active');
	}

	// homeのLoadingアニメーションの初期化
	setTimeout(() => {
		if (to.name === 'home' && from.name !== 'home' && from.name !== undefined) {
			isLoadReady.value = false;
		}
		next();
	}, trsDuration);
});

/* ページ遷移 後 に行われる処理 ------------ */
router.afterEach((to, from, next) => {
	/* 画面遷移アニメーション ------------ */
	const transition = document.querySelector('.transition');
	transition.classList.remove('transition--active');

	// homeのLoadingアニメーションの初期化
	if (to.name === 'home' && from.name !== 'home' && from.name !== undefined) {
		isLoadReady.value = true;
		setTimeout(() => {}, trsDuration);
	}

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
