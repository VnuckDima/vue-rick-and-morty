import { defineStore } from "pinia";

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

export const useCharactersStore = defineStore("characters", {
  state: () => ({
    characters: null as ICharacter[] | null,
    currentPage: 1,
    totalCount: 0,
    itemsPerPage: 20,
  }),
  actions: {
    async fetchCharacters() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${this.currentPage}`
        );
        const data = await response.json();
        this.characters = data.results;
        this.totalCount = data.info.count;
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    },
    nextPage() {
      if (this.currentPage * this.itemsPerPage < this.totalCount) {
        this.currentPage++;
        this.fetchCharacters();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchCharacters();
      }
    },
  },
});
