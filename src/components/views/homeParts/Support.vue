<script setup>
import { ref } from 'vue';

const navs = ref([
  'オーナーズクラブの登録'
])
</script>

<template>
	<section class="lcl-support">
		<h2 class="lcl-support-ttl">
      <span class="lcl-support-ttl__jp">サポート</span>
      <span class="lcl-support-ttl__primary">SUPPORT</span>
    </h2><!-- .lcl-support-ttl -->
    <div class="lcl-support-nav">
      <a v-for="(item, index) in items" :key="index" class="lcl-support-nav__item" href="">
        <img class="lcl-support-nav__img" src="/assets/img/home/support/img_" alt="">
      </a>
    </div>
	</section>
</template>

<style lang="scss"></style>
