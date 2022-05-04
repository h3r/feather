<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Jack' },
        { id: 4, name: 'Jill' },
      ],
    }
  },
}
</script>

<template>
  <h2>Users page</h2>

  <p v-for="user in users" :key="user.id">
    <router-link
      :to="{
        name: 'UserSingle',
        params: {
          id: user.id
        }
      }"
    >
      ({{ user.id }}) {{ user.name }}
    </router-link>
  </p>
</template>
