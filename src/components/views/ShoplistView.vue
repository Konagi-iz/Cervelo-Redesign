<script setup>
import { onMounted, getCurrentInstance } from 'vue';

const emit = defineEmits(['childMounted']);

/* マウントされたら親に通知 ------------ */
onMounted(() => {
	const instance = getCurrentInstance();
	if (instance && instance.parent) {
		instance.parent.emit('child-mounted');
	}
});
</script>

<template>
	<h1>SHOP LIST</h1>
	<router-link :to="{name: 'home'}">VIEW HOME</router-link>
</template>

<style scoped lang="scss">
h1 {
	color: red;
	font-size: 24px;
}
</style>
