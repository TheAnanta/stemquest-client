<template>
  <div class="flex gap-x-4 md:overflow-hidden h-screen">
    <section
      class='grow flex flex-col overflow-x-hidden mx-6 md:mx-16 py-6 md:py-8 gap-12 md:overflow-y-scroll no-scrollbars'>

      <nav class='gap-4 md:gap-8 flex'>
        <img src="@/assets/logo.svg" alt="" class='h-12 md:h-14' />
        <div class="grow md:hidden">

        </div>
        <input type="text" placeholder='Search by comic/edition'
          class='pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full hidden md:flex'>

        <img src="@/assets/image/profile/sreetejadusi.jpg" alt="Sree Teja Dusi"
          class="w-12 h-12 md:w-14 md:h-14 rounded-full" />
      </nav>
      <div class="grow">
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
        <div class="md:grid my-4 mx-auto gap-x-24"
          v-bind:class="[selectedTopicId == -1 ? 'md:grid-cols-3 lg:grid-cols-5' : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4']">
          <SubtopicCard v-for="(card, index) in cards" :key="index" :item="card" class="cursor-pointer"
            @click="handleClickById(index)" />
        </div>
      </div>

    </section>
    <div class="bg-black/30 w-screen h-screen absolute md:hidden" v-if="selectedTopicId != -1" @click="unselectTopic()">

    </div>
    <div class="z-10 bg-white md:bg-red-50 top-0 right-0 h-full w-[80%] md:w-[40%] absolute md:relative p-8 md:p-12"
      v-if="selectedTopicId != -1">
      <TopicSideSheet :item="cards[selectedTopicId]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedTopicId = ref(-1)
function selectTopicById(id: number) {
  selectedTopicId.value = id
}
function unselectTopic() {
  selectedTopicId.value = -1
}
function handleClickById(id: number) {
  if (selectedTopicId.value === id) {
    unselectTopic()
  } else {
    selectTopicById(id)
  }
}
</script>
<script lang="ts">
import SubtopicCard from '@/components/explore/SubtopicCard.vue';
import subTopics from '@/assets/data/subTopics.json';
import TopicSideSheet from '@/components/explore/TopicSideSheet.vue';

export default {
  name: 'Explore',
  components: {
    SubtopicCard,
    TopicSideSheet
  },
  data() {
    return {
      cards: subTopics,
    };
  },
};
</script>
