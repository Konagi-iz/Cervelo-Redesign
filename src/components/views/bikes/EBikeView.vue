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
		'デザイン・ブリーフには『e-bikeのように見せるな』とは書かれていませんでしたが、プロセス全体を通して、<br class="dn-w">それが最優先事項であったことは間違いありません。<br class="dn-w">私たちのバイクは洗練された、デザイン優先の<br class="dn-w">パフォーマンスマシンです。<br class="dn-w">モーターとバッテリーを追加しても、それを変えることはできない。バッテリーの向きを変えたり、<br class="dn-w">スピードセンサーを移設したりと、RouvidaがS5やÁsperoと同じようにCervéloを意味するよう、<br class="dn-w">あらゆる努力をしました。',
};

/* Lineups ------------ */
const lineups = [
	// ここに表示するモデル名を入力
	{
		model: 'ROUVIDA',
		type: 'E-BIKE',
	},
];
</script>

<template>
	<BikesFv v-bind="fv"></BikesFv>
	<Lineups :lineups="lineups"></Lineups>
</template>

<style scoped lang="scss"></style>
