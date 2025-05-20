<script setup lang="ts">
import BaseIcon from "~/components/base/BaseIcon/BaseIcon.vue";
import type {IBaseIconBox} from "~/components/base/BaseIconBox/IBaseIconBox";

const filledColors = {
  indigo: 'bg-indigo-300 size-7 content-center p-1',
  orange: 'bg-orange-300 size-7 content-center p-1',
  teal: 'bg-teal-300 size-7 content-center p-1',
  purple: 'bg-purple-200 size-7 content-center p-1',
  rose: 'bg-rose-300 size-7 content-center p-1',
  slate: 'bg-slate-400 size-7 content-center p-1',
}

withDefaults(defineProps<IBaseIconBox>(), {
  variant: 'teal',
})
</script>

<template>
  <div :class="[filledColors[variant]]">
    <BaseIcon class="text-slate-900 size-5" :icon="icon"></BaseIcon>
  </div>
</template>

<style scoped>

</style>