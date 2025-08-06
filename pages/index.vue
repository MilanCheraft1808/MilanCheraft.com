<template>
  <div class="flex items-center justify-center gap-36">
    <div>
      <p class="text-body-lg text-slate-400">Hi all. I am</p>
      <h1 class="text-heading-h1 text-slate-50">Milan Chéraft</h1>
      <h4 class="text-heading-h4 text-indigo-500 pb-32"> > Full Stack Developer</h4>
      <p class="text-body-md pb-2 text-slate-400 game">// complete the game to continue</p>
      <p class="text-body-md pb-2 text-slate-400">// find my profile on Github:</p>
      <p class="text-body-md text-slate-400">
        <span class="text-teal-400">const</span>
        <span class="text-indigo-500"> githubLink </span>
        =
        <a href="https://github.com" target="_blank" class="text-rose-300 underline underline-offset-4">
          "https://github.com/CheraftMilan"
        </a>
      </p>
    </div>
    <game class="game"/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main'
})

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
  text-shadow: 0 0 5px #06b6d4,
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

/* Optional animation for a subtle breathing/pulsing effect */
@keyframes pulse-glow {
  0% {
    text-shadow: 0 0 5px #06b6d4, 0 0 10px #06b6d4;
  }
  100% {
    text-shadow: 0 0 8px #06b6d4, 0 0 15px #06b6d4, 0 0 25px rgba(6, 182, 212, 0.7);
  }
}
@media (max-width: 1250px) {
  .game{
    display: none;
  }
}

</style>