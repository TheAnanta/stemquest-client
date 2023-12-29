<template>
  <div class="card my-4">
    <!-- <img :src="cover" alt="Card Cover"> -->
    <img src='../../assets/comic1.svg' alt="item image">
    <h2 class="bold" style="font-size: 120%">{{ item.title }}</h2>
    <p class='text-[#757575]'>{{ item.description.length > 28 ? item.description.slice(0, 28) + '...' : item.description }}</p>
    <div class="flex">
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
      <p class="pl-3">{{ getRatingCount }}</p>
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
