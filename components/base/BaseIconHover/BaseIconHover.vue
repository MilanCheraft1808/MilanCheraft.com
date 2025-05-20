<script setup lang="ts">
import BaseIcon from "~/components/base/BaseIcon/BaseIcon.vue";
import type {IBaseIcon} from "~/components/base/BaseIcon/IBaseIcon";

const props = withDefaults(defineProps<IBaseIcon>(), {})
</script>

<template>
  <BaseIcon class="text-slate-500 cursor-pointer hover:text-slate-300 " :icon="props.icon"></BaseIcon>
</template>

<style scoped>

</style>