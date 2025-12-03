<script setup>
import { computed, ref } from "vue";
import skillsData from "../../data/skills.json";

// --- STATE ---
const currentLang = ref("fr");

// --- DATA ACCESS ---
const data = computed(() => skillsData[currentLang.value]);
</script>

<template>
  <section id="compétences" class="skills-section">
    <h2 class="section-title">Compétences</h2>

    <!-- 1. TECHNICAL SKILLS GRID -->
    <div class="tech-grid">
      <div 
        v-for="(cat, index) in data.technical" 
        :key="index" 
        class="tech-card"
      >
        <div class="card-header">
          <i :class="cat.icon" class="cat-icon"></i>
          <h3 class="cat-title">{{ cat.category }}</h3>
        </div>
        <div class="tags-container">
          <span v-for="skill in cat.skills" :key="skill" class="tech-tag">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>

    <!-- 2. BOTTOM GRID (Languages, Soft Skills, Interests) -->
    <div class="bottom-grid">
      
      <!-- Languages -->
      <div class="info-card">
        <h3 class="card-title"><i class="fas fa-globe"></i> Langues</h3>
        <ul class="lang-list">
          <li v-for="lang in data.languages" :key="lang.name" class="lang-item">
            <div class="lang-header">
              <span class="lang-name">{{ lang.name }}</span>
              <span class="lang-level">{{ lang.level }}</span>
            </div>
            <span v-if="lang.details" class="lang-details">{{ lang.details }}</span>
          </li>
        </ul>
      </div>

      <!-- Soft Skills -->
      <div class="info-card">
        <h3 class="card-title"><i class="fas fa-users"></i> Relationnel</h3>
        <ul class="check-list">
          <li v-for="skill in data.softSkills" :key="skill">
            <i class="fas fa-check-circle check-icon"></i> {{ skill }}
          </li>
        </ul>
      </div>

      <!-- Interests -->
      <div class="info-card">
        <h3 class="card-title"><i class="fas fa-heart"></i> Intérêts</h3>
        <ul class="interest-list">
          <li v-for="item in data.interests" :key="item.name">
            <i :class="item.icon" class="interest-icon"></i>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<style scoped>
.skills-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 32px;
  /* Last section usually doesn't need a border, remove if you want */
  border-bottom: 1px solid #eee; 
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: #04b4e0;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
}

/* --- TECH GRID --- */
.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.tech-card {
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.tech-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  border-color: #e0f7fa;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  border-bottom: 1px dashed #eee;
  padding-bottom: 10px;
}

.cat-icon {
  font-size: 18px;
  color: #04b4e0;
}

.cat-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  font-size: 12px;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #475569;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 500;
}

/* --- BOTTOM GRID --- */
.bottom-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 900px) {
  .bottom-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.info-card {
  background: #f9f9f9; /* Slightly different bg to separate from tech */
  border-radius: 12px;
  padding: 20px;
}

.card-title {
  font-size: 15px;
  font-weight: 700;
  color: #04b4e0;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Languages */
.lang-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lang-item {
  display: flex;
  flex-direction: column;
}

.lang-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.lang-level {
  color: #04b4e0;
}

.lang-details {
  font-size: 12px;
  color: #777;
  margin-top: 2px;
}

/* Soft Skills */
.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.check-list li {
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.4;
}

.check-icon {
  color: #10b981; /* Green checkmark */
  margin-top: 3px;
}

/* Interests */
.interest-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.interest-list li {
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 10px;
}

.interest-icon {
  width: 20px;
  text-align: center;
  color: #f59e0b; /* Orange/Gold for hobbies */
}
</style>