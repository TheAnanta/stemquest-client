<template>
  <main class="w-screen flex flex-col justify-evenly">
    <h1 class="my-4 text-3xl font-semibold">Your Cart</h1>
    <h2 class="my-2 text-xl">Quantity: {{ cartItem.length }}</h2>
    <!-- Card -->
    <div class="flex flex-col">
      <div
        v-for="item in cartItem"
        class="p-4 w-fit rounded-md my-4 flex justify-between"
      >
        <div>
          <img :src="item.image" alt="image">
        </div>
        <div>
          <h2 class="text-3xl font-semibold">{{ item.title }}</h2>
          <h3 class="text-xl font-normal">{{ item.description }}</h3>
          <h4 class="text-gray-500">{{ item.qty }}</h4>
          <!-- Assuming 'image' property is available in your cart items -->
        </div>
        <div class="">
          {{ item.price }}
        </div>
      </div>
    </div>
    <!-- Assuming 'cartCard' is a component, make sure it's properly imported -->
    <!-- <cartCard /> -->
  </main>
</template>

<script>
import cart from '@/assets/data/cart.json';
export default {
  name: 'cartCard',
  data() {
    return {
      cartItem: cart,
    };
  },
};
</script>
