<template>
  <div class='grid grid-cols-4'>
    <SubtopicCard v-for="(card, index) in this.cards" :key="index" :item="card" />
  </div>
</template>

<script lang="ts">
import SubtopicCard from '@/components/explore/SubtopicCard.vue';
import subTopics from '@/assets/data/subtopics.json';
export default {
  name: 'Explore',
  components: {
    SubtopicCard,
  },
  data() {
    return {
      cards: subTopics,
    };
  },
};
</script>
