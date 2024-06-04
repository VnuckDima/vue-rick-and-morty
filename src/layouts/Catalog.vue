<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";
import { useCharactersStore } from "../store/characters";

const charactersStore = useCharactersStore();
const Card = defineAsyncComponent(() => import("../components/Card.vue"));

onMounted(() => {
  charactersStore.fetchCharacters();
});
</script>

<template>
  <div class="max-w-[1480px] mx-auto flex flex-wrap gap-3 justify-center">
    <div v-for="character in charactersStore.characters" :key="character.id">
      <Card
        :gender="character.gender"
        :species="character.species"
        :image="character.image"
        :name="character.name"
      />
    </div>
    <div class="flex justify-center mt-4 items-center font-semibold mb-5">
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
        :disabled="charactersStore.currentPage === 1"
        @click="charactersStore.prevPage()"
      >
        Предыдущая
      </button>
      <span v-if="charactersStore.totalCount">
        {{ charactersStore.currentPage }} из
        {{
          Math.ceil(charactersStore.totalCount / charactersStore.itemsPerPage)
        }}
      </span>
      <span v-else>Загрузка...</span>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2"
        :disabled="
          charactersStore.currentPage * charactersStore.itemsPerPage >=
          charactersStore.totalCount
        "
        @click="charactersStore.nextPage()"
      >
        Следующая
      </button>
    </div>
  </div>
</template>
