<script setup lang="ts">
const navItems = [
  {label: '_Hello', to: '/'},
  {label: '_about-me', to: '/about'},
  {label: '_projects', to: '/projects'},
  {label: '_contact', to: '/contact'}
]
</script>

<template>
  <nav>
    <ul class="nav-list">
      <li>
        <p> Milan Chéraft</p>
      </li>
      <li v-for="item in navItems" :key="item.to" class="nav-item">
        <NuxtLink :to="item.to" class="nav-link">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>