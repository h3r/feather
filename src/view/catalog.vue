<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCatalogStore } from '/src/model/catalog'
const { fetching, newArrivals } = storeToRefs(useCatalogStore())
const { fetchNewArrivals } = useCatalogStore()

onMounted(() => {
  fetchNewArrivals()
  console.log(newArrivals)
})

</script>

<template>
  <h1>Book Catalog</h1>

  <main>
    <p v-if="fetching">
      Loading posts...
    </p>
    <p v-for="book in newArrivals" v-else :key="book.id">
      <i i-carbon:book class="icon-btn" />
      <span>{{ book.title }}</span>
    </p>
  </main>
</template>
