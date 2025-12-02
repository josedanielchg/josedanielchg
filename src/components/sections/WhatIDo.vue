<template>
  <div class="what-i-do-container">
    <h3 class="section-title">What I Do</h3>
    <!-- You can replace these with real data later -->
    <p v-for="n in 5" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
      pariatur dolores laborum dolorum voluptatibus earum qui temporibus
      cumque reprehenderit distinctio perferendis.
    </p>
  </div>
</template>

<style scoped>
.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #04b4e0;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

p {
  font-size: 15px;
  line-height: 1.75em;
  color: #555;
  margin-bottom: 20px;
}
</style>