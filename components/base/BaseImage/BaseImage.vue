<script setup lang="ts">
import type {IBaseImage} from "~/components/base/BaseImage/IBaseImage";

const classList = {
  card: 'max-h-[145px] w-full h-max object-fit rounded-t-3 ',
  none: '',
};
withDefaults(defineProps<IBaseImage>(), {
  variant: 'none',
});
</script>

<template>
  <nuxt-picture loading="lazy" :src="imageSource" :alt="altText" :imgAttrs="{ class: [ classList[variant] ] }"
  />
</template>

<style scoped>

</style>