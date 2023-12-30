<script lang="ts">
export default {
  name: 'Home',
  methods: {
    setStudentRole() {
      window.localStorage.setItem('role', 'student');
      this.$router.push('/explore');
    },
    checkAuth() {
      console.log("Hello");
      if (window.localStorage.getItem('role') == 'student') {
        this.$router.push('/explore');
      }
      else if (window.localStorage.getItem('role') == 'educator') {
        this.$router.push('/educator');
      }
    }
  },
  mounted: function () {
    this.checkAuth()
  },
};
</script>

<template>
  <main className="relative overflow-x-clip ">
    <img src="@/assets/image/background/bg-aligned.png" className="w-screen h-screen absolute z-0 align-bottom" />
    <img id='clouds' src="@/assets/image/background\clouds.png" className="w-screen h-screen absolute z-10" />
    <img id="birds" src="@/assets/image/background\birds.png" className="w-screen h-screen absolute z-20" />
    <div class="flex flex-col absolute h-screen items-start justify-center conditional-padding-32-8 py-16 w-full">
      <div class="flex items-center justify-between grow">
        <div className="sm:w-5/12">
          <h2 className="bold text-4xl py-1 text-[#1E5B85]">Lorem ipsum dolor sit amet,<br />consectetur adipiscing
            elit. </h2>
          <h2 className="medium text-base text-[#1E5B85] py-1">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
        </div>
      </div>
      <div
        className="flex absolute items-center bottom-16 sm:left-40 sm:bottom-24 border-dashed rounded-lg border-white border-2 px-3 py-3">
        <p className="bold absolute top-0 left-0 text-white text-base -mt-3 -ml-1 pr-2 bg-[#A8E25E]">Know More:</p>
        <button @click="setStudentRole"
          className="bg-[#78a3f3e7] hover:bg-[#78a3f3] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">as
          student</button>
        <button className="bg-[#F9A587e7] hover:bg-[#F9A587] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">as
          educators</button>
      </div>
    </div>
    <div className="h-screen w-screen absolute">
      <img src="@/assets/image/background/sprites.svg" alt="sprites"
        className="w-[32%] z-30 absolute right-[14%] bottom-[15%]" />
    </div>
  </main>
</template>

<style>
.conditional-padding-32-8 {
  padding: 2rem;
}

@media screen and (min-width: 1080px) {
  .conditional-padding-32-8 {
    padding: 8rem;
  }

}
</style>
