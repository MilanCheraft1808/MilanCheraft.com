<script setup lang="ts">
import type {IBaseIcon} from "~/components/base/BaseIcon/IBaseIcon";

withDefaults(defineProps<IBaseIcon>(),{
})
</script>

<template>

<component :is="icon" />
</template>

<style scoped>

</style>