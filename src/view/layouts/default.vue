<script setup>
import Nav from '/src/view/components/Nav.vue'
import Dark from '/src/view/components/dark.vue'
import Login from '/src/view/components/login.vue'
</script>

<template>
  <div class="layout" h-full text-center flex select-none>
    <div ma>
      <p p-2 m-0 flex absolute top-0 left-0 op50 fw300 gap-2>
        <i i-carbon:undo class="icon-btn" @click="$router.go(-1)" />
        <i i-carbon:redo class="icon-btn" @click="$router.go(1)" />
      </p>

      <Nav p-2 flex absolute top-0 right-0 fw300 gap-2>
        <router-link :to="{ name: 'Home' }" op50>
          Home
        </router-link> |
        <router-link :to="{ name: 'Users' }" op50>
          Users
        </router-link> |
        <router-link :to="{ name: 'About' }" op50>
          About
        </router-link>
        <Login /> <Dark op50 />
      </Nav>

      <main h-full w-175>
        <slot />
      </main>
    </div>

    <footer absolute bottom-5 right-0 left-0 text-center op30 fw300>
      &copy; Awesome Company
    </footer>
  </div>
</template>
