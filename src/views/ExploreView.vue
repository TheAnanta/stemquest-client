<template>
  <section class='w-full'>
    <div class=''> 
      <nav class='px-8 py-12 flex justify-evenly items-start'>
        <img src="@/assets/STEMQuestLogo.svg" alt="" class='w-[30%] h-[30%] pr-8' />
        <input type="text" placeholder='Search by comic/edition' class='pl-8 rounded-full outline-none border border-slate-800 py-2 px-4 w-full'>
        <img src="@/assets/dusiPfp.svg" alt="" class='w-[30%] h-[30%] ' />
      </nav>
      <div>
        <h1 class='text-3xl font-semibold'>Explore our vast range of concepts</h1>
        <h2>Explore our vast range of concepts</h2>
      </div>
      <div class="grid grid-cols-4 ">
        <SubtopicCard
          v-for="(card, index) in this.cards"
          :key="index"
          :item="card"
        />
      </div>
    </div>
  </section>
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
