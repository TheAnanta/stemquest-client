<template>
  <div>
    <ScienceCard v-for="(card, index) in this.cards" :key="index" :cover="card.cover" :title="card.title"
      :description="card.description" :age="card.age" :createdOn="card.createdOn" :edition="card.edition"
      :feedback="card.feedback" />
  </div>
</template>

<script lang="ts">
import ScienceCard from './Card.vue';

export default {
  name: 'Parent',
  components: {
    ScienceCard,
  },
  data() {
    return {
      cards: [
        {
          cover: "https://stemquest.theananta.in/science/biology/cell/mitochondria/Into%20the%20Mitochondria/cover.jpg",
          title: "Into the Mitochondria",
          description: "This is a description of the video",
          age: {
            min: 6,
            max: 12,
          },
          createdOn: "2023-12-28 10:49:00 PM",
          edition: {
            editionNumber: 1,
            updatedOn: "2023-12-28 10:52:05 PM",
          },
          feedback: {
            aggregateRating: 4.5,
            rating: {
              5: 10,
              4: 5,
              3: 2,
              2: 1,
              1: 0,
            },
            reviews: [
              {
                name: "Sidharth Philkhana",
                rating: 5,
                review: "STEMQuest's Into the Mitochondria is a game-changer for learning science. As a student, I never thought I'd find mitochondria so interesting! The comic-style learning, hands-on activities, and VR experiences made complex topics feel like an adventure. STEMQuest is revolutionizing the way we learn, making it exciting and unforgettable!",
              },
              {
                name: "Lochan Mathukumilli",
                rating: 5,
                review: "Into the Mitochondria has been an amazing addition to STEMQuest's collection. Witnessing children delve into the intricacies of cell biology with excitement is incredibly rewarding. The comic's blend of education and entertainment is a testament to our commitment to making STEM accessible and enjoyable. Looking forward to more discoveries with STEMQuest! Kudos to the STEMQuest team for making STEM education so engaging!",
              },
            ],
          },
        },
        // Add more card objects as needed
      ],
    };
  },
};
</script>
