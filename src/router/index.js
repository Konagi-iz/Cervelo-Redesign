import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/components/views/HomeView.vue';

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
	const load = document.querySelector('.load');
	load.classList.add('load--active');
	setTimeout(() => {
		next();
	}, 600);
});
router.afterEach((to, from, next) => {
	const load = document.querySelector('.load');
	load.classList.remove('load--active');
});

export default router;
