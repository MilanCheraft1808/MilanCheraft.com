<script setup lang="ts">
import type {IBaseButton} from "~/components/base/BaseButton/IBaseButton";

const colorClasses = {
  default: 'bg-slate-600 text-slate-50 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height hover:bg-slate-500 cursor-pointer',
  primary: 'bg-orange-300 text-slate-950 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height hover:bg-orange-200 cursor-pointer',
  ghost: 'text-slate-50 border-slate-50 border-1 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height hover:bg-slate-800 cursor-pointer',
  success: 'bg-green-500 text-slate-950 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height hover:bg-green-400 cursor-pointer',
  error: 'bg-red-500 text-slate-950 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height hover:bg-red-400 cursor-pointer',
  warning: 'bg-yellow-500 text-slate-950 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height hover:bg-yellow-400 cursor-pointer',
  disabled: 'bg-slate-700 text-slate-500 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height',
  link: 'text-rose-300 underline rounded-3 text-body-sm text-body-sm-line-height hover:text-rose-200 cursor-pointer',
}

withDefaults(defineProps<IBaseButton>(),{
  variant: 'default',
})


</script>

<template>

  <button :class="[
      colorClasses[variant]
  ]" @click="$emit('click')">
    Button text
  </button>
</template>