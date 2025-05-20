<script setup lang="ts">
const inputId = `checkbox-${Math.random().toString(36).slice(2, 11)}`

const checked = defineModel({
  type: Boolean,
  default: false,
})

const emit = defineEmits<{
  (event: 'update:checked', value: boolean): void
}>()

const toggleChecked = () => {
  checked.value = !checked.value
  emit('update:checked', checked.value)
}
</script>

<template>
  <div class="flex items-center focus:p-1 focus:ring-slate-500 focus:ring-2 ">
    <input :id="inputId" v-model="checked" type="checkbox" class="appearance-none " @change="toggleChecked" />
    <div
        v-show="!checked"
        class="w-5 h-5 cursor-pointer bg-slate-900 border-solid border-1 rounded-1 border-slate-500"
        @click="toggleChecked"
    >
    </div>
    <div
        v-show="checked"
        class="w-5 h-5 cursor-pointer bg-slate-500 text-slate-50 rounded-1 flex items-center justify-center"

        @click="toggleChecked"
    >
      <img src="@/assets/images/check.svg" alt="checkmark" class="size-4"/>
  </div>
  </div>
</template>
