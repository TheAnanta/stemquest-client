<template>
    <label for="preference1" class="flex items-start rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
        <img src="@/assets/icons/thumbnail.svg" alt="Comic Thumbnail" class="mr-4" />
        <div class="flex flex-col">
            <p class="dmSans-medium">{{ item.name }}</p>
            <p class="mb-2">
                Supporting line text lorem ipsum dolor sit amet, consectetur
            </p>
        </div>
        <input type="checkbox" id="preference1" name="preference1" class="accent-red-800 w-6 h-6 ml-2 cursor-pointer" />
    </label>
</template>
<script>
export default {
    name: 'PreferenceCard',
    props: ['item'],
}
</script>