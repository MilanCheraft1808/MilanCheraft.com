<script setup lang="ts">
const colorClasses = {
  default: 'bg-slate-600 text-slate-50 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height',
  primary: 'bg-orange-300 text-slate-950 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height',
  ghost: 'text-slate-50 border-slate-50 border-1 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height',
  success: 'bg-green-500 text-slate-950 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height',
  error: 'bg-red-500 text-slate-950 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height',
  warning: 'bg-yellow-500 text-slate-950 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height',
  disabled: 'bg-slate-700 text-slate-500 rounded-3 gap-2.5 pt-2.5 pb-2.5 px-3 text-body-sm text-body-sm-line-height',
  link: 'text-rose-300 underline rounded-3 text-body-sm text-body-sm-line-height'
}

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) => {
      return ['primary', 'ghost', 'success', 'error', 'warning', 'disabled', 'link'].includes(value)
    }
  }
});

const buttonClasses = colorClasses[props.variant as keyof typeof colorClasses] || colorClasses.default;
</script>

<template>
  <button :class="buttonClasses" class="" :disabled="buttonClasses == 'disabled'" @click="$emit('click')">
    Button text
  </button>
</template>