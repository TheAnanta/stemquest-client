<template>
  <main class="w-screen flex flex-col justify-evenly">
    <nav class="px-8 py-12 gap-8 flex">
      <img src="@/assets/logo.svg" alt="" class="h-14" />
      <input type="text" placeholder="Search by comic/edition"
        class="pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full" />
      <!-- <img src="@/assets/dusiPfp.svg" alt="" class="w-14 h-14" /> -->
    </nav>

    <section class='flex'>
      <div class="px-8 w-[65%]">
        <h1 class="text-2xl font-bold mb-12">CUSTOMIZE</h1>
        <h2 class="text-4xl font-bold mb-2">Into the Mitochondria</h2>
        <h3 class="text-2xl font-bold mb-6">Edition One</h3>

        <div class="flex justify-between items-end">
          <div class="w-1/2 pr-4">
            <p class="mb-4 font-extrabold">
              This is a placeholder for the text which describes the gist of the
              comic.
            </p>
            <p class="mb-4">
              This is a placeholder for the text which describes the gist of the
              comic. Placing dummy text for prototyping purposes. This is a
              placeholder for the text which describes the gist of the comic.
              Placing dummy text for prototyping purposes.
            </p>
          </div>

          <div class="w-1/2">
            <textarea name="comic" id="comic" class="w-full h-20 border border-black p-4 mb-4 rounded-xl outline-none"
              placeholder="Enter a prompt on how would you like your comic to be customized..."></textarea>
            <button class="bg-red-800 rounded-3xl text-white px-4 py-3 w-full outline-none">
              Generate Comic
            </button>
          </div>
        </div>

        <h2 class="font-extrabold text-3xl mt-16 mb-8">Your Kit Includes</h2>
        <div class="flex space-x-2 h-screen">
          <div class="flex flex-col">
            <label for="preference1"
              class="flex items-start p-4 mb-8 rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
              <img src="@/assets/icons/thumbnail.svg" alt="Comic Thumbnail" class="mr-4" />
              <div class="flex flex-col">
                <p class="mb-2">Comic</p>
                <p class="mb-2">
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <input type="checkbox" id="preference1" name="preference1"
                class="accent-red-800 w-6 h-6 ml-2 cursor-pointer" />
            </label>

            <label for="preference2"
              class="flex items-start p-4 mb-8 rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
              <img src="@/assets/icons/thumbnail.svg" alt="VR Headset Icon" class="mr-4" />
              <div class="flex flex-col">
                <p class="mb-2">VR headset</p>
                <p class="mb-2">
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <input type="checkbox" id="preference2" name="preference2"
                class="accent-red-800 w-6 h-6 ml-2 cursor-pointer" />
            </label>

            <label for="preference3"
              class="flex items-start p-4 mb-8 rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
              <img src="@/assets/icons/thumbnail.svg" alt="Assessment Platform Icon" class="mr-4" />
              <div class="flex flex-col">
                <p class="mb-2">Assessment Platform</p>
                <p class="mb-2">
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <input type="checkbox" id="preference3" name="preference3"
                class="accent-red-800 w-6 h-6 ml-2 cursor-pointer" />
            </label>
          </div>

          <div class="flex flex-col">
            <label for="preference4"
              class="flex items-start p-4 mb-8 rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
              <img src="@/assets/icons/thumbnail.svg" alt="Origami Icon" class="mr-4" />
              <div class="flex flex-col">
                <p class="mb-2">Origami</p>
                <p class="mb-2">
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <input type="checkbox" id="preference4" name="preference4"
                class="accent-red-800 w-6 h-6 ml-2 cursor-pointer" />
            </label>

            <label for="preference5"
              class="flex items-start p-4 mb-8 rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
              <img src="@/assets/icons/thumbnail.svg" alt="Mixed Reality Icon" class="mr-4" />
              <div class="flex flex-col">
                <p class="mb-2">Mixed Reality Content</p>
                <p class="mb-2">
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <input type="checkbox" id="preference5" name="preference5"
                class="accent-red-800 w-6 h-6 ml-2 cursor-pointer" />
            </label>

            <label for="preference6"
              class="flex items-start p-4 mb-8 rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
              <img src="@/assets/icons/thumbnail.svg" alt="Worksheets Icon" class="mr-4" />
              <div class="flex flex-col">
                <p class="mb-2">Worksheets</p>
                <p class="mb-2">
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <input type="checkbox" id="preference6" name="preference6"
                class="accent-red-800 w-6 h-6 ml-2 cursor-pointer" />
            </label>
          </div>
        </div>
      </div>
      <div class='pr-8'>
        <img src="@/assets/icons/bigImage.svg" alt="" />
        <div class='flex'>
          <div class="flex justify-evenly">
            <p class='text-2xl px-4'>Total</p>
            <p class='text-4xl px-4 font-extrabold'>₹ 5000</p>
          </div>
          <div>
            <button class="bg-red-800 rounded-3xl text-white px-8 py-4 w-full outline-none text-xl">Proceed to
              Card</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import SubtopicCard from '@/components/explore/SubtopicCard.vue';
import subTopics from '@/assets/data/subTopics.json';
export default {
  name: 'Customize',
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
