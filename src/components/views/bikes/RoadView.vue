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
		'リーダージャージの獲得、登り坂の克服、<br class="dn-w">仲間とのライドでの限界への挑戦など、<br class="dn-w">栄光にはさまざまな形がある。<br class="dn-w">こうした肉体的な試練を超えたところに、<br class="dn-w">私たちを駆り立てるものがある。',
};

/* Lineups ------------ */
const lineups = [
	// ここに表示するモデル名を入力
	{
		model: 'S5',
		type: 'AERO ROAD',
	},
	{
		model: 'R5',
		type: 'CLIMBING',
	},
	{
		model: 'SOLOIST',
		type: 'BALANCE',
	},
	{
		model: 'CALEDONIA-5',
		type: 'ALL ROAD',
	},
	{
		model: 'CALEDONIA',
		type: 'ALL ROAD',
	},
];
</script>

<template>
	<BikesFv v-bind="fv"></BikesFv>
	<Lineups :lineups="lineups"></Lineups>
</template>

<style scoped lang="scss"></style>
