<script setup>
import { ref, computed, watch } from "vue";
import certificationsData from "../../data/certifications.json";

// --- STATE ---
const currentLang = ref("fr");
const searchQuery = ref("");
const selectedCategory = ref("Tous");
const itemsToShow = ref(6); // Show 6 initially (3 rows of 2)

// --- DATE PARSING LOGIC ---
// Helper to convert "Nov 2025" -> JS Date for sorting
const parseFrenchDate = (dateStr) => {
  const months = {
    "Jan": 0, "Fév": 1, "Mars": 2, "Avril": 3, "Mai": 4, "Juin": 5,
    "Juil": 6, "Août": 7, "Sept": 8, "Oct": 9, "Nov": 10, "Déc": 11
  };
  
  const parts = dateStr.split(" ");
  if (parts.length !== 2) return new Date(0); // Fallback
  
  const monthIndex = months[parts[0]];
  const year = parseInt(parts[1]);
  
  return new Date(year, monthIndex);
};

// --- COMPUTED DATA ---
const allCerts = computed(() => certificationsData[currentLang.value]);

const categories = computed(() => {
  const cats = new Set(allCerts.value.map((c) => c.category));
  return ["Tous", ...Array.from(cats)];
});

// Filter AND Sort Logic
const processedCerts = computed(() => {
  // 1. Filter
  let result = allCerts.value.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategory =
      selectedCategory.value === "Tous" ||
      cert.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });

  // 2. Sort by Date (Newest first)
  return result.sort((a, b) => {
    return parseFrenchDate(b.date) - parseFrenchDate(a.date);
  });
});

// Slice for pagination
const visibleCerts = computed(() => {
  return processedCerts.value.slice(0, itemsToShow.value);
});

// --- ACTIONS ---
const loadMore = () => {
  itemsToShow.value += 4; // Load 4 more to keep grid balanced
};

watch([searchQuery, selectedCategory], () => {
  itemsToShow.value = 6;
});
</script>

<template>
  <section id="certifications" class="cert-section">
    <h2 class="section-title">Certifications & Licences</h2>

    <!-- CONTROLS -->
    <div class="controls">
      <div class="search-wrapper">
        <i class="fas fa-search search-icon"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher..."
          class="search-input"
        />
      </div>

      <div class="filter-buttons">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="filter-btn"
          :class="{ active: selectedCategory === cat }"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- GRID LAYOUT -->
    <TransitionGroup name="list" tag="div" class="cert-grid">
      <div v-for="cert in visibleCerts" :key="cert.id" class="cert-card">
        
        <!-- Header: Logo + Title -->
        <div class="card-header">
          <div class="logo-box">
            <img :src="cert.logo" :alt="cert.issuer" />
          </div>
          <div class="header-text">
            <h3 class="cert-title">{{ cert.title }}</h3>
            <span class="issuer">{{ cert.issuer }}</span>
          </div>
        </div>

        <!-- Body: Date + ID -->
        <div class="card-body">
          <div class="meta-row">
            <span class="date"><i class="far fa-calendar-alt"></i> {{ cert.date }}</span>
            <span v-if="cert.credentialId" class="cred-id">ID: {{ cert.credentialId.substring(0, 10) }}...</span>
          </div>
          
          <!-- Skills Tags -->
          <div class="skills-row">
            <span v-for="skill in cert.skills.slice(0, 3)" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
            <span v-if="cert.skills.length > 3" class="skill-tag more">+{{ cert.skills.length - 3 }}</span>
          </div>
        </div>

        <!-- Footer: Link -->
        <div class="card-footer" v-if="cert.link">
           <a :href="cert.link" target="_blank" class="card-link">
             Voir le certificat <i class="fas fa-arrow-right"></i>
           </a>
        </div>

      </div>
    </TransitionGroup>

    <!-- LOAD MORE -->
    <div v-if="itemsToShow < processedCerts.length" class="load-more-container">
      <button @click="loadMore" class="load-more-btn">
        Afficher plus ({{ processedCerts.length - itemsToShow }})
      </button>
    </div>

    <div v-if="processedCerts.length === 0" class="empty-state">
      Aucun résultat trouvé.
    </div>
  </section>
</template>

<style scoped>
.cert-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid #eee;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: #04b4e0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* CONTROLS */
.controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 8px;
}

.search-wrapper { position: relative; width: 100%; }
.search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #aaa; }
.search-input {
  width: 100%; padding: 10px 16px 10px 40px;
  border: 1px solid #e5e7eb; border-radius: 12px;
  background-color: #f9fafb; font-size: 14px;
  box-sizing: border-box;
}
.search-input:focus { outline: none; border-color: #04b4e0; background: #fff; }

.filter-buttons { display: flex; flex-wrap: wrap; gap: 8px; }
.filter-btn {
  padding: 6px 14px; border-radius: 20px; border: 1px solid #e5e7eb;
  background: white; color: #666; font-size: 12px; cursor: pointer; transition: all 0.2s;
}
.filter-btn:hover { background: #f3f4f6; }
.filter-btn.active { background: #04b4e0; color: white; border-color: #04b4e0; }

/* GRID SYSTEM */
.cert-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile default */
  gap: 16px;
}

/* Tablet & Desktop: 2 Columns */
@media (min-width: 768px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* CARD DESIGN */
.cert-card {
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%; /* Ensures same height in grid */
  transition: transform 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}

.cert-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  border-color: #e0f7fa;
}

.card-header {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.logo-box {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2px;
  display: flex; align-items: center; justify-content: center;
}
.logo-box img { width: 100%; height: 100%; object-fit: contain; }

.header-text { display: flex; flex-direction: column; justify-content: center; }
.cert-title { font-size: 15px; font-weight: 600; color: #222; margin: 0 0 2px 0; line-height: 1.2; }
.issuer { font-size: 12px; color: #666; }

.card-body {
  flex-grow: 1; /* Pushes footer to bottom */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #888;
  border-bottom: 1px dashed #eee;
  padding-bottom: 8px;
}

.skills-row { display: flex; flex-wrap: wrap; gap: 6px; }
.skill-tag { font-size: 10px; background: #f3f4f6; color: #555; padding: 2px 8px; border-radius: 4px; }
.skill-tag.more { background: #e0f7fa; color: #04b4e0; font-weight: 600; }

.card-footer { margin-top: 12px; padding-top: 8px; }
.card-link {
  font-size: 12px; color: #04b4e0; text-decoration: none; font-weight: 600;
  display: flex; align-items: center; gap: 4px;
}
.card-link:hover { text-decoration: underline; }

/* LOAD MORE */
.load-more-container { text-align: center; margin-top: 8px; }
.load-more-btn {
  background: white; border: 1px solid #e5e7eb; padding: 8px 20px;
  border-radius: 20px; color: #666; font-size: 13px; cursor: pointer;
  transition: all 0.2s;
}
.load-more-btn:hover { border-color: #04b4e0; color: #04b4e0; }

.empty-state { text-align: center; color: #999; padding: 20px; }

/* ANIMATIONS */
.list-enter-active, .list-leave-active { transition: all 0.4s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(10px); }
</style>