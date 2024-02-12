<script setup>
import { onMounted, getCurrentInstance } from 'vue';
import BikesFv from '@/components/parts/BikesFv.vue';
import Category from '@/components/views/bikesParts/Category.vue';

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
	ttl: 'BIKES',
	ttlBig: false,
	description:
		'1995年以来、サーヴェロは革新的なロードバイクと<br class="dn-w">トライアスロン／タイムトライアルバイクを<br class="dn-w">開発してきました。<br class="dn-w">ツール・ド・フランスで活躍するプロライダーも、<br class="dn-w">初めてフルディスタンスのトライアスロンに挑戦する<br class="dn-w">ライダーも、単に週末にライドを楽しむライダーも、<br class="dn-w">サーヴェロはエンジニアリング、野心、そして<br class="dn-w">情熱を注ぎ込み、<br class="dn-w">あなたにとってより良いバイクを作ります。',
};
</script>

<template>
	<BikesFv v-bind="fv"></BikesFv>
	<Category></Category>
</template>

<style scoped lang="scss"></style>
