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
	ttl: route.name.toUpperCase().replace('-', ' '),
	ttlBig: true,
	description:
		'進化するたびに改良を重ね、長年の研究開発により、<br class="dn-w">当社のバイクは市場で最も軽量かつ効率的なタイムトライアルおよびトライアスロンバイクの仲間入りを果たした。<br class="dn-w">最初のペダルストロークから、<br class="dn-w">その違いを実感していただけるでしょう。<br class="dn-w">簡単に言えば、速く走れるバイクなのだ。',
};

/* Lineups ------------ */
const lineups = [
	// ここに表示するモデル名を入力
	{
		model: 'P5',
		type: 'AERO',
	},
	{
		model: 'P-SERIES',
		type: 'AERO',
	},
];
</script>

<template>
	<BikesFv v-bind="fv"></BikesFv>
	<Lineups :lineups="lineups"></Lineups>
</template>

<style scoped lang="scss"></style>
