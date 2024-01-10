<script setup>
import 'destyle.css';
import '@/scss/_base.scss';
import Header from '@/components/parts/header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
	<Header></Header>
	<router-view></router-view>
</template>

<style lang="scss"></style>
