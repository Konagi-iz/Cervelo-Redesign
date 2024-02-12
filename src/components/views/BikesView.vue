<script setup>
import { onMounted, getCurrentInstance } from 'vue';
import SubpageFv from '@/component/parts/Subpage-fv.vue'

const emit = defineEmits(['childMounted']);

// マウントされたら親に伝える
onMounted(() => {
	const instance = getCurrentInstance();
	if (instance && instance.parent) {
		instance.parent.emit('child-mounted');
	}
});
</script>

<template>
	<SubapageFv></SubapageFv>
</template>

<style scoped lang="scss">
h1 {
	color: red;
	font-size: 24px;
}
</style>
