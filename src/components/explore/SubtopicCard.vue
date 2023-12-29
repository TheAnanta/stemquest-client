<template>
  <div class="card">
    <!-- <img :src="cover" alt="Card Cover"> -->
    <h2 class="bold" style="font-size: 150%">{{ item.title }}</h2>
    <p>{{ item.description }}</p>
    <div class="flex">
      <v-icon class='material-icons-round' v-if="item.feedback.aggregateRating < 1">star_half</v-icon>
      <v-icon class='material-icons-round' v-if="item.feedback.aggregateRating >= 1">star</v-icon>
      <v-icon class='material-icons-round'
        v-if="item.feedback.aggregateRating >= 1.5 && item.feedback.aggregateRating < 2">star_half</v-icon>
      <v-icon class='material-icons-round' v-if="item.feedback.aggregateRating >= 2">star</v-icon>
      <v-icon class='material-icons-round'
        v-if="item.feedback.aggregateRating >= 2.5 && item.feedback.aggregateRating < 3">star_half</v-icon>
      <v-icon class='material-icons-round' v-if="item.feedback.aggregateRating >= 3">star</v-icon>
      <v-icon class='material-icons-round'
        v-if="item.feedback.aggregateRating >= 3.5 && item.feedback.aggregateRating < 4">star_half</v-icon>
      <v-icon class='material-icons-round' v-if="item.feedback.aggregateRating >= 4">star</v-icon>
      <v-icon class='material-icons-round'
        v-if="item.feedback.aggregateRating >= 4.5 && item.feedback.aggregateRating < 5">star_half</v-icon>
      <v-icon class='material-icons-round' v-if="item.feedback.aggregateRating >= 5">star</v-icon>
      <p class="pl-4">{{ getRatingCount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    getRatingCount() {
      return this.item.feedback.reviews.length;
    },
  },
};
</script>
