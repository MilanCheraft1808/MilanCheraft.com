<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const navItems = [
  { label: '_Hello',     to: '/' },
  { label: '_about-me',  to: '/about' },
  { label: '_projects',  to: '/projects' },
]

const route = useRoute()
const currentPath = computed(() => route.path)
</script>

<template>
  <nav class="w-full bg-slate-900 text-slate-400">
    <div class="container mx-auto flex border-1 border-b-slate-400 items-center">
      <div class="text-body-md pl-2 md:text-base">Milan Chéraft</div>
      <div class="ml-32">
        <ul class="hidden md:flex border-t border-x border-b-slate-400 divide-x divide-gray-700 rounded-t-lg overflow-hidden">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
                :to="item.to"
                class="block px-4 py-2 border-b-2 transition-colors"
                :class="currentPath === item.to
              ? 'border-yellow-500 text-slate-50'
              : 'border-transparent text-slate-400 hover:text-slate-50 hover:border-gray-700'"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="ml-auto border-1 border-b-slate-400 flex items-center">
        <NuxtLink
            to="/contact"
            class="hidden pl-2 pr-2 md:block text-body-md md:text-base py-2 border-b-2 transition-colors"
            :class="currentPath === '/contact'
          ? 'border-b-yellow-500 text-slate-50'
          : 'border-transparent text-slate-400 hover:text-slate-50'"
        >
          _contact-me
        </NuxtLink>
        <button class="md:hidden text-slate-400 hover:text-slate-50 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
            <line x1="4" y1="6" x2="20" y2="6"/>
            <line x1="4" y1="12" x2="20" y2="12"/>
            <line x1="4" y1="18" x2="20" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>

</template>

<style scoped>
/* (no changes needed here) */
</style>
