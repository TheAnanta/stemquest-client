<template>
  <main class="w-screen flex-col md:flex-row justify-evenly">
    <nav class="p-8 gap-8 flex items-center">
      <button @click="navigateUp">
        <v-icon class='material-icons-round md:hidden'>arrow_back</v-icon>
      </button>
      <div class="grow md:hidden"></div>
      <img src="@/assets/logo.svg" alt="" class="h-14 hidden md:flex" />
      <input type="text" placeholder="Search by comic/edition"
        class="pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full  hidden md:flex" />
      <img src="@/assets/image/profile/sreetejadusi.jpg" alt="Sree Teja Dusi" class="w-14 h-14 rounded-full" />
    </nav>

    <section class='flex flex-col md:flex-row grow'>
      <div class="px-8 md:w-[65%]">
        <h1 class="text-2xl medium mb-6">CUSTOMIZE</h1>
        <h2 class="text-4xl medium mb-2">{{ cards.filter((e) => e.id == id)[0].title }}</h2>
        <h3 class="text-2xl medium mb-6">Edition One</h3>

        <div class="flex flex-col md:flex-row justify-between items-end">
          <div class="md:w-1/2 pr-4">
            <p class="mb-4 dmSans-medium">
              This is a placeholder for the text which describes the gist of the
              comic.
            </p>
            <p class="mb-4 dmSans-regular">
              This is a placeholder for the text which describes the gist of the
              comic. Placing dummy text for prototyping purposes. This is a
              placeholder for the text which describes the gist of the comic.
              Placing dummy text for prototyping purposes.
            </p>
          </div>
          <div class="md:w-1/2">
            <textarea name="comic" id="comic"
              class="w-full md:h-56 lg:h-36 border border-black p-4 mb-4 rounded-xl outline-none"
              placeholder="Enter a prompt on how would you like your comic to be customized..."></textarea>
            <button class="outline-red-800 outline outline-1 rounded-3xl text-red-800 px-4 py-2 w-full">
              Generate Comic
            </button>
          </div>
        </div>

        <h2 class="bold text-2xl mt-4 mb-8">Your kit includes</h2>
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
          <PreferenceCard :item="{ name: `Comic` }" />
          <PreferenceCard :item="{ name: `Origami` }" />
          <PreferenceCard :item="{ name: `VR Headset` }" />
          <PreferenceCard :item="{ name: `Mixed Reality Content` }" />
          <PreferenceCard :item="{ name: `Assessment Platform` }" />
          <PreferenceCard :item="{ name: `Worksheets` }" />
        </div>
      </div>
      <div class='pr-8 flex flex-col grow mb-6'>
        <div
          style="flex-grow: 1; background-image: url('https://github.com/ManasMalla.png'); background-size: contain; background-position: center;">
        </div>
        <div class="flex mt-6 items-center justify-between">
          <div class="flex flex-col md:flex-row">
            <p class='text-xl md:text-2xl pl-6 dmSans-regular'>Total</p>
            <p class='text-3xl md:text-4xl pl-6 dmSans-medium'>₹ 2500</p>
          </div>
          <div>
            <button class="bg-red-800 rounded-3xl text-white px-8 py-4 w-full outline-none text-xl dmSans-regular">Proceed
              to
              Cart</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">

import subTopics from '@/assets/data/subTopics.json';
import PreferenceCard from '@/components/explore/KitComponent.vue';
export default {
  name: 'Customize',
  data() {
    return {
      cards: subTopics,
    };
  },
  methods: {
    navigateUp() {
      this.$router.go(-1);
    }
  },
  props: ['id'],
  components: { PreferenceCard }
};
</script>
