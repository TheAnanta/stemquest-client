<template>
  <div class="card">
    <!-- <img :src="cover" alt="Card Cover"> -->
    <h2 class="bold" style="font-size: 150%">{{ item.title }}</h2>
    <p>{{ item.description }}</p>
    <div class="flex">
      <div
        class="w-3 overflow-clip"
        v-if="
          item.feedback.aggregateRating >= 0.5 &&
          item.feedback.aggregateRating < 1
        "
      >
        <vue-feather
          v-if="item.feedback.aggregateRating >= 1"
          type="star"
        ></vue-feather>
      </div>
      <vue-feather
        v-if="item.feedback.aggregateRating >= 1"
        type="star"
      ></vue-feather>
      <div
        class="w-3 overflow-clip"
        v-if="
          item.feedback.aggregateRating >= 1.5 &&
          item.feedback.aggregateRating < 2
        "
      >
        <vue-feather
          v-if="item.feedback.aggregateRating >= 1"
          type="star"
        ></vue-feather>
      </div>
      <vue-feather
        v-if="item.feedback.aggregateRating >= 2"
        type="star"
      ></vue-feather>
      <div
        class="w-3 overflow-clip"
        v-if="
          item.feedback.aggregateRating >= 2.5 &&
          item.feedback.aggregateRating < 3
        "
      >
        <vue-feather
          v-if="item.feedback.aggregateRating >= 1"
          type="star"
        ></vue-feather>
      </div>
      <vue-feather
        v-if="item.feedback.aggregateRating >= 3"
        type="star"
      ></vue-feather>
      <div
        class="w-3 overflow-clip"
        v-if="
          item.feedback.aggregateRating >= 3.5 &&
          item.feedback.aggregateRating < 4
        "
      >
        <vue-feather
          v-if="item.feedback.aggregateRating >= 1"
          type="star"
        ></vue-feather>
      </div>
      <vue-feather
        v-if="item.feedback.aggregateRating >= 4"
        type="star"
      ></vue-feather>
      <div
        class="w-3 overflow-clip"
        v-if="item.feedback.aggregateRating >= 4.5"
      >
        <vue-feather
          v-if="item.feedback.aggregateRating >= 1"
          type="star"
        ></vue-feather>
      </div>

      <vue-feather
        v-if="item.feedback.aggregateRating >= 5"
        type="star"
      ></vue-feather>
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
