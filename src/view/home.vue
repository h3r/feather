<script setup>
import { mapActions, mapState } from 'pinia'
import { useCatalog } from '/src/model/catalog'
</script>

<script>
export default {
  computed: {
    ...mapState(useCatalog, { newArrivals: 'results' }),
  },

  methods: {
    ...mapActions(useCatalog, ['fetchNewArrivals']),
    addToCart() {
      // we'll populate this later
    },
  },

  created() {
    // when the template is created, we call this action
    this.fetchNewArrivals()
  },
}
</script>

<template>
  <h1>Home</h1>
</template>
