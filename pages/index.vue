<template>
  <div>
    <h1>Welcome to the homepage Index</h1>
    <p>{{ appConfig.title }}</p>
    <img width="200" height="auto" src="/img/logo3.svg" alt="Virtualagoon Logo">
    <img width="100" height="auto" src="~/assets/img/logo3.svg" alt="Discover Nuxt 3">
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <NuxtLink to="/login">
      Login page
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig()
// const appConfig = useAppConfig()

definePageMeta({
  pageTransition: {
    name: 'bounce',
    mode: 'out-in' // default
  },
  layoutTransition: {
    name: 'rotate'
  }
})

</script>

<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>
