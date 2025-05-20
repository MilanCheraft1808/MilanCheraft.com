<script setup lang="ts">
import BaseButton from "~/components/base/BaseButton/BaseButton.vue";
import BaseCheckbox from "~/components/base/BaseCheckbox/BaseCheckbox.vue";
import BaseIcon from "~/components/base/BaseIcon/BaseIcon.vue";
import BaseIconBox from "~/components/base/BaseIconBox/BaseIconBox.vue";
import BaseIconHover from "~/components/base/BaseIconHover/BaseIconHover.vue";
import BaseImage from "~/components/base/BaseImage/BaseImage.vue";
import BaseCard from "~/components/base/BaseCard/BaseCard.vue";
import type {IBaseCard} from "~/components/base/BaseCard/IBaseCard";

definePageMeta({
  layout: 'main'    // points to layouts/admin.vue
})

const cardItems: IBaseCard[] = [
  {
    description: "First project showcase",
    image: {
      imageSource: "/images/project2.jpg",
      altText: "Project 1 preview",
    },
    button: {
      variant: "default",
      content: "View Project",
      to: "/projects/1"
    },
    iconBox: {
      icon: "mdi:nuxt",
      variant: "teal"
    }
  },
  {
    description: "First project showcase to practive my Frontend skills",
    image: {
      imageSource: "/images/project2.jpg",
      altText: "Project 1 preview",
    },
    button: {
      variant: "default",
      content: "View Project",
      to: "/projects/1"
    },
    iconBox: {
      icon: "mdi:nuxt",
      variant: "teal"
    }
  },
  {
    description: "First project showcase",
    image: {
      imageSource: "/images/project2.jpg",
      altText: "Project 1 preview",
    },
    button: {
      variant: "default",
      content: "View Project",
      to: "/projects/1"
    },
    iconBox: {
      icon: "mdi:nuxt",
      variant: "teal"
    }
  }
]
</script>
<template>
  <p class="text-heading-h2 ">HOME</p>
  <!--  <BaseButton class="mr-3" variant="default" to="/" content="This is a button"/>-->
  <!--  <BaseCheckbox />-->
  <!--  <BaseIcon icon="uiw:apple" />-->
  <!--  <BaseIconHover icon="uiw:apple" />-->
  <!--  <BaseIconBox icon="uiw:apple" :variant="'slate'" />-->
  <!--  <BaseImage image-source="/images/image.png"-->
  <!--             alt-text="test" />-->
  <section class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 w-full p-16">
    <BaseCard v-for="card in cardItems" :description="card.description" :image="card.image" :button="card.button"
              :icon-box="card.iconBox"/>
  </section>
</template>

<style scoped>

</style>