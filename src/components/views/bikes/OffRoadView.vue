<script setup>
import { onMounted, getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router';
import BikesFv from '@/components/parts/BikesFv.vue';
import Lineups from '@/components/views/bikesParts/Lineups.vue';

const route = useRoute();
const emit = defineEmits(['childMounted']);

/* マウントされたら親に通知 ------------ */
onMounted(() => {
	const instance = getCurrentInstance();
	if (instance && instance.parent) {
		instance.parent.emit('child-mounted');
	}
});

/* ファーストビューの設定 ------------ */
const fv = {
	ttl: route.name.toUpperCase(),
	ttlBig: true,
	description:
		'私たちのCX、グラベル、マウンテンバイクは、<br class="dn-w">ロードレーシングモデルの妥協のないスピードを参考に<br class="dn-w">しており、その結果も表れています。<br class="dn-w">フェイエットビルと今年のホーゲルハイドでの<br class="dn-w">世界選手権での大勝利、CXワールドカップサーキットでの優位性、そして世界最大のグラベルレースの<br class="dn-w">最前線でのほぼ恒久的な存在感。',
};

/* Lineups ------------ */
const lineups = [
	// ここに表示するモデル名を入力
	{
		model: 'R5-CX',
		type: 'GRAVEL',
	},
	{
		model: 'ÁSPERO-5',
		type: 'GRAVEL',
	},
	{
		model: 'ÁSPERO',
		type: 'GRAVEL',
	},
	{
		model: 'ZHT-5',
		type: 'ALL ROAD',
	},
	{
		model: 'ZFS-5',
		type: 'ALL ROAD',
	},
];
</script>

<template>
	<BikesFv v-bind="fv"></BikesFv>
	<Lineups :lineups="lineups"></Lineups>
</template>

<style scoped lang="scss"></style>
