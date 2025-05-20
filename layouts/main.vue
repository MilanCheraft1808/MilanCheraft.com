<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-slate-900 flex flex-col font-fira">
    <Header />
    <main class="flex-1 p-4 ">
      <RouterView/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/header/header.vue'
import Footer from "~/components/footer/footer.vue";
</script>