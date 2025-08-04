<script setup lang="ts">
import { defineProps } from 'vue'
// https://icones.js.org/ here you can find all the icons and just copy the name

defineProps<{
  icon: string
  color?: string
}>()

</script>
  
<template>
  <Icon :name="icon" :class="color" />
</template>
