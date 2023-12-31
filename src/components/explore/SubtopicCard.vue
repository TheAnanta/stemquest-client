<template>
  <a :href="`/topic/` + item.id">
    <div class="w-max my-4">
      <!-- <img :src="cover" alt="Card Cover"> -->
      <img :src="`${imageUrl}${item.cover}`" :alt='item.cover'
        style="width: 20ch; height: 20ch; border-radius: 12px; object-fit: cover;" />
      <h2 class="bold"
        style="font-size: 120%; margin-top: 1rem;max-width: 18ch; overflow: hidden; max-lines: 1; text-overflow: clip; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;">
        {{
          item.title }}
      </h2>
      <p class='text-[#757575]' style="margin-top: 0.3rem;">{{ item.description.length > 28 ? item.description.slice(0,
        28)
        + '...' : item.description
      }}</p>
      <!-- <div class="flex" style="margin-top: 0.15rem;">
        <v-icon class='material-icons-round yellow-icon' v-if="item.feedback.aggregateRating < 1">star_half</v-icon>
        <v-icon class='material-icons-round yellow-icon' v-if="item.feedback.aggregateRating >= 1">star</v-icon>
        <v-icon class='material-icons-round yellow-icon'
          v-if="item.feedback.aggregateRating >= 1.5 && item.feedback.aggregateRating < 2">star_half</v-icon>
        <v-icon class='material-icons-round yellow-icon' v-if="item.feedback.aggregateRating >= 2">star</v-icon>
        <v-icon class='material-icons-round yellow-icon'
          v-if="item.feedback.aggregateRating >= 2.5 && item.feedback.aggregateRating < 3">star_half</v-icon>
        <v-icon class='material-icons-round yellow-icon' v-if="item.feedback.aggregateRating >= 3">star</v-icon>
        <v-icon class='material-icons-round yellow-icon'
          v-if="item.feedback.aggregateRating >= 3.5 && item.feedback.aggregateRating < 4">star_half</v-icon>
        <v-icon class='material-icons-round yellow-icon' v-if="item.feedback.aggregateRating >= 4">star</v-icon>
        <v-icon class='material-icons-round yellow-icon'
          v-if="item.feedback.aggregateRating >= 4.5 && item.feedback.aggregateRating < 5">star_half</v-icon>
        <v-icon class='material-icons-round yellow-icon' v-if="item.feedback.aggregateRating >= 5">star</v-icon>
        <v-icon class='material-icons-round gray-icon'
          v-if="item.feedback.aggregateRating < 5 && item.feedback.aggregateRating >= 4 && item.feedback.aggregateRating != 4.5">star</v-icon>
        <p class="pl-3">{{ getRatingCount }}</p>
      </div> -->
    </div>
  </a>
</template>

<script>
export default {
  props: ['item'],
  setup() {
    const imageUrl = new URL("../../assets/image", import.meta.url).href;
    return { imageUrl };
  },
  computed: {
    getRatingCount() {
      return this.item.feedback.reviews.length;
    },
  },
  methods: {
    getProfileImage(img) {
      return img;
    },
  }
};
</script>
