<script setup>
import BaseButton from '../UI/BaseButton.vue';

defineProps({
  photo: String
})
</script>

<template>
  <div class="description-container">
    <!-- Photo Circle -->
    <div class="photo-container">
      <img :src="photo" alt="Jose Daniel" />
    </div>

    <!-- Text Content -->
    <div class="description-content">
      <h3>Computer Science Engineering Student from ENSTA</h3>
      <h2>José Chacón</h2>
      
      <p>
        Double-degree student at ENSTA Paris (AI specialization) and UNET in
        Computer Engineering, within Institut Polytechnique de Paris. I
        combine <strong>3+ years of software development experience</strong> with data analytics & ML: Python
        (pandas, scikit-learn), SQL, EDA, predictive modeling, Tableau.
      </p>
      <p>
        Built end-to-end products and REST APIs with Laravel/JS; comfortable
        across frontend & backend with solid Git/testing habits. Currently
        focusing on turning data into production-ready insights.
      </p>

      <div class="buttons-container">
        <BaseButton href="/cv.pdf" variant="transparent">Download CV</BaseButton>
        <BaseButton href="#contact" variant="gray">Contact</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.description-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
  align-items: center;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
}

.photo-container {
  padding: 18px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  aspect-ratio: 1/1;
  background: #fff;

  @media (max-width: 950px) {
    display: none;
  }
}
.photo-container img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description-content {
  font-weight: 300;
}

.description-content h3 {
  font-size: 16px;
  color: #aaa;
  font-weight: 300;
  margin-bottom: 16px;
}

.description-content h2 {
  font-size: 48px;
  font-weight: 600;
  margin: 0 0 36px 0;
  color: #333;
}

.description-content p {
  font-size: 15px;
  line-height: 1.75em;
  color: #555;
  margin-bottom: 15px;

  strong {
    font-weight: 600;
  }
}

.buttons-container {
  display: flex;
  gap: 12px;
  margin-top: 25px;
}
</style>