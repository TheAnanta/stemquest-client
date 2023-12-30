<template>
  <section class='flex flex-col justify-evenly mx-8 md:mx-16 '>

    <nav class='py-12 gap-8 flex '>
      <img src="@/assets/logo.svg" alt="" class='h-14' />
      <input type="text" placeholder='Search by comic/edition'
        class='pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full'>

      <img src="@/assets/image/profile/sreetejadusi.jpg" alt="Sree Teja Dusi" class="w-14 h-14 rounded-full" />
    </nav>
    <div>
      <div class='mb-6 space-y-4 md:space-y-0 md:flex justify-between items-center'>
        <div>
          <h1 class='text-3xl bold'>Explore our vast range of concepts</h1>
          <h2>Explore our vast range of concepts</h2>
        </div>

        <div class='flex space-x-4'>
          <img src="@/assets/icons/sort.svg" alt='sort logo' /> <span class="bold uppercase">Sort</span>
          <img src="@/assets/icons/filter.svg" alt='sort logo' />
          <span class="bold uppercase">Filter</span>
        </div>
      </div>
      <div class="md:grid md:grid-cols-3 lg:grid-cols-5 my-4 mx-auto gap-x-24">
        <SubtopicCard v-for="(card, index) in cards" :key="index" :item="card" />
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
