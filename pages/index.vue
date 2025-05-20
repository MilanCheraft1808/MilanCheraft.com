<script setup lang="ts">
import BaseButton from "~/components/base/BaseButton/BaseButton.vue";
import BaseCheckbox from "~/components/base/BaseCheckbox/BaseCheckbox.vue";
import BaseIcon from "~/components/base/BaseIcon/BaseIcon.vue";
import BaseIconBox from "~/components/base/BaseIconBox/BaseIconBox.vue";
import BaseIconHover from "~/components/base/BaseIconHover/BaseIconHover.vue";
definePageMeta({
  layout: 'main'    // points to layouts/admin.vue
})
</script>
<template>
<p class="text-heading-h2 ">HOME</p>
  <BaseButton class="mr-3" variant="default"/>
  <BaseCheckbox />
  <BaseIcon icon="uiw:apple" />
  <BaseIconHover icon="uiw:apple" />
  <BaseIconBox icon="uiw:apple" :variant="'slate'" />
</template>

<style scoped>

</style>