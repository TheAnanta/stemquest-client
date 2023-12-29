<script lang="ts">
export default {
  name: 'Home',
};
</script>

<template>
  <main class="w-screen h-screen">
    <div class="relative overflow-x-clip">
      <img src="@\assets\background\bg-aligned.png" className="w-screen h-screen absolute z-0 align-bottom" />
      <img id='clouds' src="@\assets\background\clouds.png" className="w-screen h-screen absolute z-10" />
      <img id="birds" src="@\assets\background\birds.png" className="w-screen h-screen absolute z-20" />
      <div className="flex flex-col absolute h-screen items-start justify-center lg:px-32 px-8 py-16">
        <div className="flex items-center justify-between grow">
          <div className="sm:w-5/12">
            <h2 className="bold text-4xl py-1 text-[#1E5B85]">STEMQuest</h2>
            <h2 className="text-base text-[#1E5B85] py-1">Lorem ipsum dolor sit amet, consectetur
              adipiscing
              elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
            <router-link to="/about">About</router-link>
          </div>
        </div>
        <div
          className="flex absolute items-center bottom-16 sm:left-40 sm:bottom-24 border-dashed rounded-lg border-white border-2 px-3 py-3">
          <p id="bold" className="absolute top-0 left-0 text-white text-base -mt-3 -ml-1 pr-2 bg-[#A8E25E]">Know More:</p>
          <a href='/student'
            className="bg-[#78a3f3e7] hover:bg-[#78a3f3] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">as
            student</a>
          <button className="bg-[#F9A587e7] hover:bg-[#F9A587] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">as
            educators</button>
        </div>
      </div>
      <div className="h-screen w-screen absolute">
        <img src="@\assets\background/sprites.svg" alt="sprites"
          className="w-[32%] z-30 absolute right-[14%] bottom-[15%]" />
      </div>
    </div>
  </main>
</template>

<style></style>
