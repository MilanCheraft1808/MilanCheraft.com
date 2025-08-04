<template>
  <div class="homepage-container">
    <p class="text-heading-h2 cyberpunk-text-h2">Welcome to my own website!</p>
    <p class="text-heading-h4 cyberpunk-text-h4">
      This is a work in progress but in the meantime you can play my own snake game!
    </p>
    <game v-if="shouldShowGame" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// This ref will be updated by the layout when the menu opens/closes
const isMenuOpen = ref(false)
const screenWidth = ref(window.innerWidth)

const updateWidth = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
const shouldShowGame = computed(!isMenuOpen)
</script>

<style scoped>
.homepage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 40px 20px;
}

.cyberpunk-text-h2 {
  color: #e2e8f0;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow:
      0 0 5px #06b6d4,
      0 0 10px #06b6d4,
      0 0 20px rgba(6, 182, 212, 0.8),
      0 0 30px rgba(6, 182, 212, 0.6);
  letter-spacing: 2px;
  animation: pulse-glow 2s infinite alternate;
}

.cyberpunk-text-h4 {
  color: #94a3b8;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #06b6d4;
  letter-spacing: 1px;
}

@keyframes pulse-glow {
  0% {
    text-shadow: 0 0 5px #06b6d4, 0 0 10px #06b6d4;
  }
  100% {
    text-shadow: 0 0 8px #06b6d4, 0 0 15px #06b6d4, 0 0 25px rgba(6, 182, 212, 0.7);
  }
}
</style>
