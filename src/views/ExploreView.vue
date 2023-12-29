<template>
  <section class='w-screen flex flex-col justify-evenly px-16 '>

    <nav class='py-12 gap-8 flex '>
      <img src="@/assets/logo.svg" alt="" class='h-14' />
      <input type="text" placeholder='Search by comic/edition'
        class='pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full'>
      <!-- <img src="@/assets/images/profile/sreetejadusi.jpg" alt="" class='w-14 h-14' /> -->
    </nav>
    <div>
      <div class='mb-6 flex justify-between items-center'>
        <div>
          <h1 class='text-3xl font-extrabold'>Explore our vast range of concepts</h1>
          <h2>Explore our vast range of concepts</h2>
        </div>

        <div class='flex space-x-8'>
          <img src="@/assets/icons/sort.svg" alt='sort logo' /> <span>Sort</span>
          <img src="@/assets/icons/filter.svg" alt='sort logo' /> <span>Filter</span>
        </div>
      </div>
      <div class="grid grid-cols-5 my-4 mx-auto gap-x-24">
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
  methods: {
    getProfileImage(img: string) {
      return "@/assets/image/profile/sreetejadusi.jpg";
    },
  },
};
</script>
