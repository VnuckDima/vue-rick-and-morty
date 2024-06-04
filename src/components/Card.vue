<script setup lang="ts">
defineProps<{
  name: string;
  species: string;
  gender: string;
  image: string;
}>();
</script>

<template>
  <div class="w-64 border mt-3 p-3 rounded-xl">
    <div class="h-60 flex justify-center">
      <img :src="image" class="rounded-xl mb-2" />
    </div>
    <h3 class="font-semibold">{{ name }}</h3>
    <div>Species: {{ species }}</div>
    <div>Gender: {{ gender }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
