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
	<section class="lcl-bikes" id="bikes">
		<BikesHeader :category="currentCategory"></BikesHeader>
		<BikesContent :currentCategory="currentCategory" @switch-category="switchCategory"></BikesContent>
	</section>
</template>

<style scoped lang="scss">
.lcl-bikes {
	padding-bottom: 130px;
	@include media_narrow {
		padding-bottom: vw(70);
	}
}
</style>
