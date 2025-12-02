<script setup>
import unetLogo from '../../assets/unet-logo.jpg'
</script>

<template>
  <section id="distinctions" class="distinctions-section">
    <h2 class="section-title">Distinctions</h2>

    <div class="timeline-item">
      <!-- Logo Column -->
      <div class="logo-wrapper">
        <img :src="unetLogo" alt="UNET" />
      </div>

      <!-- Content Column -->
      <div class="content">
        <div class="header">
          <h3>Prix d'Excellence Académique (Génie Informatique)</h3>
          <span class="location">UNET</span>
        </div>
        
        <!-- Summary Text from the PDF -->
        <p class="summary-text">
          Distinction reçue <strong>4 fois</strong> (2019, 2022, 2023, 2024). 
          Toujours classé parmi les <strong>2 meilleurs étudiants</strong> de la promotion.
        </p>

        <!-- Detailed List from LinkedIn -->
        <div class="awards-list">
          
          <!-- Award 1 (Most Recent / Best) -->
          <div class="award-item highlight">
            <div class="award-date">Jan 2024</div>
            <div class="award-details">
              <span class="rank first-place">🥇 1er de la promotion</span>
              <span class="cycle">Cycle Professionnel</span>
              <span class="score">Indice: 8.20 / 9.00</span>
            </div>
          </div>

          <!-- Award 2 -->
          <div class="award-item">
            <div class="award-date">Jan 2023</div>
            <div class="award-details">
              <span class="rank">🥈 2ème de la promotion</span>
              <span class="cycle">Cycle Professionnel</span>
              <span class="score">Indice: 8.10 / 9.00</span>
            </div>
          </div>

          <!-- Award 3 -->
          <div class="award-item">
            <div class="award-date">Jan 2022</div>
            <div class="award-details">
              <span class="rank">🥈 2ème de la promotion</span>
              <span class="cycle">Cycle Professionnel</span>
              <span class="score">Indice: 8.01 / 9.00</span>
            </div>
          </div>

           <!-- Award 4 -->
           <div class="award-item">
            <div class="award-date">Jan 2019</div>
            <div class="award-details">
              <span class="rank">🥈 2ème de la promotion</span>
              <span class="cycle">Cycle de Base</span>
              <span class="score">Indice: 8.29 / 9.00</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.distinctions-section {
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
  margin: 0;
}

.timeline-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

/* Reusing the Logo Wrapper style for consistency */
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

.header h3 {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin: 0 0 0px 0;
}

.location {
  font-size: 13px;
  color: #888;
  font-weight: 300;
  display: block;
  margin-bottom: 10px;
}

.summary-text {
  font-size: 14px;
  color: #444;
  background-color: #f9f9f9;
  padding: 10px;
  border-left: 3px solid #04b4e0;
  border-radius: 0 4px 4px 0;
  margin-bottom: 20px;
}

/* Awards List Styling */
.awards-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.award-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: baseline;
  font-size: 14px;
}

.award-date {
  color: #888;
  font-size: 13px;
  font-weight: 400;
}

.award-details {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.rank {
  font-weight: 600;
  color: #333;
}

.cycle {
  color: #666;
}

.score {
  font-size: 12px;
  color: #04b4e0;
  background: #e0f7fa;
  padding: 1px 6px;
  border-radius: 4px;
  font-weight: 500;
}

/* Special style for the 1st place */
.first-place {
  color: #d35400; /* Bronze/Gold color */
}

.highlight .rank {
  font-size: 15px;
}
</style>