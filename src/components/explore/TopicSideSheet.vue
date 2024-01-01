<template>
    <v-icon>close</v-icon>
    <img :src="getImage(item.cover)" :alt="item.cover" class="my-4 md:my-8 aspect-[1.2] object-cover w-full rounded-lg" />
    <h2 class="text-xl md:text-3xl bold">
        {{
            item.title
        }}
    </h2>
    <div class="flex items-center gap-x-3 md:gap-x-4 my-2">
        <p class="md:text-lg text-gray-500">Edition {{ item.edition.editionNumber }}</p>
        <p class="px-3 md:px-4 py-1 bg-red-800 text-white text-[0.7rem] md:text-sm rounded-full">Age {{ item.age.min
        }} -
            {{
                item.age.max }}
        </p>
        <p
            class="uppercase border-[2.5px] rounded-full border-red-800 text-red-800 px-3 md:px-4 py-1 text-[0.7rem] md:text-sm">
            {{
                item.subSubject }}
        </p>
    </div>

    <p class="text-md text-gray-500"><span class="medium block">This is a placeholder for the text which
            describes the
            gist of
            the
            comic.</span>
        Placing dummy text for prototyping purposes. This is a placeholder for the text which describes the gist of
        the comic. Placing dummy text for prototyping purposes.</p>
    <div class="flex gap-4 mt-3 md:mt-6">
        <button class="outline outline-red-800 py-1 px-6 rounded-full outline-1 text-[0.75rem] md:text-base">
            Learn More
        </button>
        <button class="text-white bg-red-800 py-1 grow rounded-full text-[0.8rem] md:text-base" @click="customizeKit()">
            Let's Customize
        </button>
    </div>
</template>

<script>
export default {
    name: 'TopicSideSheet',
    props: ['item'],
    methods: {
        getImage(fileName) {
            try {
                const modules = import.meta.glob('@/assets/image/**/*.{png,svg,jpg,jpeg}', { eager: true })
                const moduleKeys = Object.keys(modules)
                const fileSrc = moduleKeys.find(key => key.includes(fileName))

                return fileSrc ? modules[fileSrc].default : ''
            } catch (err) {
                console.log(err)
            }
        },
        customizeKit() {
            console.log(this.item.id);
            this.$router.push('/topic/' + this.item.id)
        }
    },
}
</script>