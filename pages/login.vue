<template>
  <div>
    <h1>Login Page</h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
//  const runtimeConfig = useRuntimeConfig();
//  const appConfig = useAppConfig();
definePageMeta({
  layout: 'custom',
  pageTransition: {
    name: 'bounce',
    mode: 'out-in' // default
  },
  layoutTransition: {
    name: 'rotate'
  }

})
</script>
