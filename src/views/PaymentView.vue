<template>
  <main class="w-screen flex flex-col justify-evenly px-16">
    <nav class="py-12 gap-8 flex">
      <img src="@/assets/logo.svg" alt="" class="h-14" />
      <input
        type="text"
        placeholder="Search by comic/edition"
        class="pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full"
      />
      <!-- <img src="@/assets/images/profile/sreetejadusi.jpg" alt="" class='w-14 h-14' /> -->
    </nav>

    <h1 class="text-xl font-semibold">ADDRESS & PAYMENT</h1>
    <!-- Card -->
    <div class='flex overflow-auto '>
      <div v-for="item in address" class="p-4 bg-red-800 text-white w-fit rounded-xl mr-2 flex flex-col justify-between items-start">
        <h2 class='text-lg font-bold my-2'>
          {{ item.type }}
        </h2>
        <h3 class='text-lg my-2'>
          {{ item.address }}
        </h3>
        <h4 class='text-lg'>
          {{ item.contact }}
        </h4>
      </div>
    </div>
    <cartCard />
  </main>
</template>

<script lang="ts">
import payment from '@/assets/data/payment.json';
import cartCard from '@/components/payment/CartCard.vue';
export default {
  name: 'Customize',
  components: {
    cartCard,
  },
  data() {
    return {
      address: payment,
    };
  },
};
</script>
