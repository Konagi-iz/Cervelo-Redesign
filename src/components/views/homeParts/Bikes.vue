<script setup>
import { ref } from 'vue';
import BikesHeader from '@/components/views/homeParts/BikesHeader.vue';
import BikesContent from '@/components/views/homeParts/BikesContent.vue';

const currentCategory = ref('road');

const switchCategory = (cat) => {
	currentCategory.value = cat;
};
</script>

<template>
	<section class="lcl-bikes">
		<BikesHeader :category="currentCategory"></BikesHeader>
		<BikesContent :currentCategory="currentCategory" @switch-category="switchCategory"></BikesContent>
	</section>
</template>

<style lang="scss">
.lcl-bikes {
	padding-bottom: 100px;
}
</style>
