<template>
  <section class='w-screen flex flex-col justify-evenly'>

    <nav class='px-8 py-12 gap-8 flex '>
      <img src="@/assets/STEMQuestLogo.svg" alt="" class='h-14' />
      <input type="text" placeholder='Search by comic/edition'
        class='pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full'>
      <img src="@/assets/dusiPfp.svg" alt="" class='w-14 h-14' />
    </nav>
    <div>
      <div class='mx-16 mb-6 flex justify-between items-end'>
        <div>
          <h1 class='text-3xl font-extrabold'>Explore our vast range of concepts</h1>
          <h2>Explore our vast range of concepts</h2>
          </div>

        <div class='flex space-x-8'>
          <img src="@/assets/icons/sort.svg" alt='sort logo'/> <span>Sort</span>
          <img src="@/assets/icons/filter.svg" alt='sort logo'/> <span>Filter</span>
        </div>
      </div>
      <div class="grid grid-cols-5 mx-14 my-4">
        <SubtopicCard v-for="(card, index) in this.cards" :key="index" :item="card" />
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import SubtopicCard from '@/components/explore/SubtopicCard.vue';
import subTopics from '@/assets/data/subTopics.json';
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
