<script setup>
import { ref, computed } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

// --- DATA IMPORT ---
import projectsData from "../../data/projects.json"; // Adjust path if needed

// --- LOGO ---
import unetLogo from "../../assets/unet-logo.jpg";

// --- LANGUAGE STATE ---
// Later, you can make this dynamic or grab it from a global store
const currentLang = ref("fr");

// Get the projects for the current language
const projects = computed(() => projectsData[currentLang.value]);

// --- LIGHTBOX LOGIC ---
const visible = ref(false);
const index = ref(0);
const imgs = ref([]);

// We pass the specific project's image array to this function
const showImg = (images, i) => {
  imgs.value = images;
  index.value = i;
  visible.value = true;
};

const onHide = () => {
  visible.value = false;
};
</script>

<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title">Projets</h2>

    <!-- DYNAMIC PROJECT LOOP -->
    <div 
      v-for="project in projects" 
      :key="project.id" 
      class="project-item"
    >
      <!-- Logo (Static for now, but could be dynamic from JSON too) -->
      <div class="logo-wrapper">
        <img :src="unetLogo" alt="UNET" />
      </div>

      <div class="content">
        <!-- Header -->
        <div class="header">
          <div>
            <h3>{{ project.title }}</h3>
            <span class="date">{{ project.date }}</span>
          </div>

          <div class="links" v-if="project.repoLink">
            <a
              :href="project.repoLink"
              target="_blank"
              class="github-link"
            >
              <i class="fab fa-github"></i> Code Source
            </a>
          </div>
        </div>

        <!-- Tags -->
        <div class="sub-header">
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Description (using v-html to render <strong> tags) -->
        <p class="description" v-html="project.description"></p>
        
        <!-- Details List -->
        <ul class="details-list">
          <li 
            v-for="(detail, index) in project.details" 
            :key="index" 
            v-html="detail"
          ></li>
        </ul>

        <!-- IMAGE GRID -->
        <div class="image-grid" v-if="project.images && project.images.length">
          <div
            v-for="(src, i) in project.images"
            :key="i"
            class="img-thumbnail"
            @click="showImg(project.images, i)"
          >
            <img :src="src" :alt="project.title" />
            <div class="overlay"><i class="fas fa-search-plus"></i></div>
          </div>
        </div>
      </div>
    </div>

    <!-- LIGHTBOX COMPONENT -->
    <VueEasyLightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="onHide"
    />
  </section>
</template>

<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 32px;
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

.project-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.logo-wrapper {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 8px;
  border: 1px solid #eee;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.content {
  flex-grow: 1;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}

.header h3 {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin: 0;
}

.github-link {
  font-size: 12px;
  color: #333;
  text-decoration: none;
  border: 1px solid #ddd;
  padding: 4px 10px;
  border-radius: 20px;
  transition: all 0.2s;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  gap: 6px;
}

.github-link:hover {
  background: #333;
  color: #fff;
  border-color: #333;
}

.sub-header {
  margin: 8px 0 12px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.date {
  font-size: 13px;
  color: #888;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 11px;
  background-color: #e0f7fa;
  color: #006064;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 8px;
}

.details-list {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  padding-left: 20px;
  margin: 0 0 16px 0;
}

.details-list li {
  margin-bottom: 4px;
}

/* Image Grid Styling */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin-top: 12px;
}

.img-thumbnail {
  position: relative;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #eee;
}

.img-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.2s;
}

.img-thumbnail:hover .overlay {
  opacity: 1;
}
.img-thumbnail:hover img {
  transform: scale(1.1);
}
</style>