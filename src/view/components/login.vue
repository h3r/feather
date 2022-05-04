<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <Menu as="div" relative inline-block text-left gap-2>
    <div>
      <MenuButton op50 bg-transparent border-none>
        <i
          i-carbon:user-avatar-filled-alt class="icon-btn"
          text-black
          hover:text-teal-900

          dark:text-white
          dark:hover:text-teal
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="menu-items">
        <div px-1 py-1>
          <MenuItem v-slot="{ active }" class="menu-item">
            <router-link :to="{ name: 'SignIn' }" :class="[ active ? 'bg-green-500 text-white' : 'text-gray-900', ]">
              <i i-carbon:fingerprint-recognition mr-2 /> Sign-in
            </router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }" class="menu-item">
            <router-link :to="{ name: 'SignUp' }" :class="[ active ? 'bg-green-500 text-white' : 'text-gray-900', ]">
              <i i-carbon:user-follow mr-2 /> Sign-up
            </router-link>
          </MenuItem>
        </div>
        <div px-1 py-1>
          <MenuItem v-slot="{ active }" class="menu-item">
            <button :class="[ active ? 'bg-green-500 text-white' : 'text-gray-900', ]">
              <i i-carbon:power mr-2 />
              Sign-out
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
.menu-item
{
  @apply no-underline border-0 not-hover:bg-transparent text-black dark:text-white active:text-white group flex w-full items-center rounded-md px-2 py-2 text-sm
}
.menu-items
{
  @apply absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
}
</style>
