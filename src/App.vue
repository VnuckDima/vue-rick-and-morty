<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const Catalog = defineAsyncComponent(() => import("./layouts/Catalog.vue"));
</script>

<template>
  <div class="w-full"><Catalog /></div>
</template>

<style scoped></style>
