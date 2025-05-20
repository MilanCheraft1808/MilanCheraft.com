<script setup lang="ts">
import BaseButton from "~/components/base/BaseButton/BaseButton.vue";
import BaseCheckbox from "~/components/base/BaseCheckbox/BaseCheckbox.vue";

definePageMeta({
  layout: 'main'    // points to layouts/admin.vue
})
</script>
<template>
<p class="text-heading-h2 ">HOME</p>
  <BaseButton class="mr-3" variant="primary"/>
  <BaseCheckbox />
</template>

<style scoped>

</style>