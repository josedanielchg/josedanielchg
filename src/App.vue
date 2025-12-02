<script setup>
import ProfileSidebar from './components/Layout/ProfileSidebar.vue';
import AboutMe from './components/sections/AboutMe.vue';
import Menu from './components/sections/Menu.vue';
import WhatIDo from './components/sections/WhatIDo.vue';
import Formation from './components/sections/Formation.vue';
import Distinctions from './components/sections/Distinctions.vue';

// Handle image import centrally
const profilePhoto = new URL("./assets/photo.jpg", import.meta.url).href;
</script>

<template>
    <div class="container">
      
      <!-- Left Column -->
      <ProfileSidebar :photo="profilePhoto" />

      <!-- Right Column Wrapper -->
      <div class="content-container">
        <AboutMe :photo="profilePhoto" />
        <Menu/>
        <Formation />
        <Distinctions />
      </div>

    </div>
</template>

<style>
/* Global Resets */
body {
  margin: 0;
  background-color: #f0f2f5;
  font-family: 'Poppins', sans-serif;
}

/* Main Grid Layout */
.container {
  display: grid;
  grid-template-columns: 0.75fr 2fr;
  height: 85vh;
  max-height: 800px;
  width: 70%;
  background-color: transparent; 
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 100px -5px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  z-index: 2;
}

/* The White Right Column */
.content-container {
  background-color: #fff;
  padding: 60px;
  width: 100%; 
  margin-left: -30px;
  width: calc(100% + 30px);
  
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  position: relative;
  z-index: 10;
}

/* Scrollbar Styling */
.content-container::-webkit-scrollbar {
  width: 6px;
}
.content-container::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 4px;
}
</style>