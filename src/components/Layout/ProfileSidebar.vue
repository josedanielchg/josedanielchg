<script setup>
import BaseButton from '../UI/BaseButton.vue';

defineProps({
  photo: String
})
</script>

<template>
  <div class="personal-information">
    <div class="personal-information__photo-container">
      <img :src="photo" alt="Jose Daniel" />
    </div>

    <h1>Jose Chacón</h1>
    <span>Computer Science Engineering Student from ENSTA</span>

    <div class="icons-container">
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
      <a href="#"><i class="fab fa-github"></i></a>
      <a href="#"><i class="fas fa-envelope"></i></a>
    </div>

    <BaseButton href="/cv.pdf" :download="true" variant="primary">Download CV</BaseButton>
  </div>
</template>

<style scoped>
.personal-information {
  background-color: #04b4e0;
  border-radius: 30px 0 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 50px 45px 30px;
  color: #fff;
}

/* The Dotted Effect Logic */
.personal-information__photo-container {
  position: relative;
  margin-bottom: 20px;
}
.personal-information__photo-container::after {
  position: absolute;
  opacity: 0.3;
  top: 7%;
  left: 7%;
  border-radius: 300px;
  content: "";
  height: 100%;
  width: 100%;
  background-image: radial-gradient(#fff 1px, transparent 1px);
  background-size: 6px 6px;
  z-index: 1;
}

.personal-information img {
  position: relative;
  z-index: 2;
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
}

h1 {
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2em;
  margin-bottom: 4px;
  text-align: center;
}

span {
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
}

.icons-container {
  display: flex;
  gap: 16px;
  margin-bottom: 36px;
}
.icons-container a {
  color: #fff;
  font-size: 18px;
  transition: opacity 0.3s;
}
.icons-container a:hover {
  opacity: 0.8;
}
</style>