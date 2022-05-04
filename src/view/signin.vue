<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
function onSubmit(e) {
  e.preventDefault()
  e.stopPropagation()

  const form = e.target
  const { username, password } = form
  console.log(username, password)
}

</script>

<template>
  <h1>Sign-in</h1>
  <form action="/api/login" method="post" autocomplete="on" @submit="onSubmit">
    <p>
      <label for="username" class="label block">Username</label>
      <input id="username" type="text" name="username" class="field field-visible">
    </p>
    <p>
      <label for="password" class="label block">Password</label>
      <input id="password" type="password" name="password" class="field field-visible">
    </p>
    <p>
      <button type="submit" class="button-primary">
        Log In
      </button>
    </p>
    <p><a href="/register">Create an account</a></p>
    <p><a href="/request-password-reset">Forgot password?</a></p>
  </form>
</template>
