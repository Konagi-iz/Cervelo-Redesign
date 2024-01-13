<script setup>
import { ref } from 'vue';
import BikesHeader from './BikesHeader.vue';

const categoryName = ref('road');
</script>

<template>
	<BikesHeader :category="categoryName"></BikesHeader>
</template>

<style lang="scss"></style>
