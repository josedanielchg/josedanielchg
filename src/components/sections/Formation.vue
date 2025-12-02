<script setup>
import enstaLogo from '../../assets/ensta-logo.jpg'
import unetLogo from '../../assets/unet-logo.jpg'
</script>

<template>
  <section id="formation" class="formation-section">
    <h2 class="section-title">FORMATION</h2>

    <div class="timeline">
      
      <!-- ITEM 1: ENSTA -->
      <div class="timeline-item">
        <div class="logo-wrapper">
          <img :src="enstaLogo" alt="ENSTA Paris" />
        </div>
        <div class="content">
          <div class="header">
            <h3>ENSTA Paris – Institut Polytechnique de Paris</h3>
            <span class="location">Palaiseau, France</span>
          </div>
          <div class="sub-header">
            <span class="degree">Diplôme d’Ingénieur, Majeure Informatique – Spécialisation IA</span>
            <span class="date">Sept. 2025 – Août 2027 <span class="badge">(en cours)</span></span>
          </div>
          <p class="description">
            Probabilités, apprentissage automatique, systèmes d’exploitation, science des données.
          </p>
        </div>
      </div>

      <!-- ITEM 2: UNET -->
      <div class="timeline-item">
        <div class="logo-wrapper">
          <img :src="unetLogo" alt="UNET" />
        </div>
        <div class="content">
          <div class="header">
            <h3>Universidad Nacional Experimental del Táchira (UNET)</h3>
            <span class="location">San Cristóbal, Venezuela</span>
          </div>
          <div class="sub-header">
            <span class="degree">Computer Science Engineering (Ingénierie en Informatique)</span>
            <span class="date">Mars 2019 – Mars 2025</span>
          </div>
          <p class="description">
            Structures de données, systèmes d’information, POO, logique digitale, machine learning, optimisation, compilateurs.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.formation-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* Add padding bottom to separate from next section */
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

.timeline {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.timeline-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

/* Logo Styling */
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

/* Content Styling */
.content {
  flex-grow: 1;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.header h3 {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin: 0;
}

.location {
  font-size: 13px;
  color: #888;
  font-weight: 300;
}

.sub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.degree {
  font-size: 15px;
  color: #04b4e0; /* Blue accent for degree */
  font-weight: 500;
}

.date {
  font-size: 14px;
  color: #555;
  font-weight: 400;
}

.badge {
  background-color: #e0f7fa;
  color: #006064;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 4px;
  font-weight: 600;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin: 0;
  font-style: italic;
}
</style>