<script setup>
import { onMounted, ref } from 'vue'
const checked = ref(true)

onMounted(() => {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('setting-dark-mode') || 'auto'
  setDarkMode(setting === 'dark' || (prefersDark && setting !== 'light'))
  if (setting === 'dark' || (prefersDark && setting !== 'light'))
    document.documentElement.classList.toggle('dark', true)
})

function handleChange(event) {
  event.stopPropagation()
  event.cancelBubble = true
  setDarkMode(event.target.checked)
}

function setDarkMode(value) {
  checked.value = value
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem('setting-dark-mode', value ? 'dark' : 'light')
  // document.querySelector('html').classList.toggle('dark', value)
}

</script>

<template>
  <i i-carbon-sun dark-i-carbon-moon class="icon-btn" @click="setDarkMode(!checked)" />
</template>
