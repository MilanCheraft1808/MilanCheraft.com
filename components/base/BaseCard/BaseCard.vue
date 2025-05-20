<script setup lang="ts">
import BaseImage from "~/components/base/BaseImage/BaseImage.vue";
import type {IBaseCard} from "~/components/base/BaseCard/IBaseCard";
import BaseButton from "~/components/base/BaseButton/BaseButton.vue";
import BaseIconBox from "~/components/base/BaseIconBox/BaseIconBox.vue";

defineProps<IBaseCard>();

</script>
<template>
  <article class="relative rounded-3 bg-slate-800 w-full flex flex-col h-full">
    <BaseImage :image-source="image.imageSource" :alt-text="image.altText" :variant="'card'" />
    <BaseIconBox :variant="iconBox.variant" :icon="iconBox.icon" class="absolute top-4 right-4" />

    <div class="p-8 flex flex-col flex-1 justify-between">
      <p class="text-body-lg text-slate-400">
        {{ description }}
      </p>

      <div class="mt-6">
        <BaseButton
            :content="button.content"
            :variant="button.variant"
            :is-disabled="button.isDisabled"
            :to="button.to"
        />
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>