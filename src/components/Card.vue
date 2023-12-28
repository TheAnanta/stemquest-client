<!-- ScienceCard.vue -->
<template>
  <div class="science-card">
    <img :src="cover" alt="Card Cover">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div>
      <strong>Age Range:</strong> {{ age.min }} - {{ age.max }} years
    </div>
    <div>
      <strong>Created On:</strong> {{ createdOn }}
    </div>
    <div>
      <strong>Edition:</strong> {{ edition.editionNumber }} (Updated on {{ edition.updatedOn }})
    </div>
    <div>
      <strong>Aggregate Rating:</strong> {{ feedback.aggregateRating }}
    </div>
    <div>
      <strong>Reviews:</strong>
      <ul>
        <li v-for="(review, index) in feedback.reviews" :key="index">
          <strong>{{ review.name }}</strong> - Rating: {{ review.rating }}
          <p>{{ review.review }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
export default {
  props: ['cover', 'title', 'description', 'age', 'createdOn', 'edition', 'feedback'],
}
</script>