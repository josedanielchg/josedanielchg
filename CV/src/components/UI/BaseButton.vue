<script setup>
defineProps({
  href: { type: String, default: "#" },
  variant: { type: String, default: "primary" }, // 'primary', 'transparent', 'gray'
  download: { type: Boolean, default: false },
});
</script>

<template>
  <a :href="href" :download="download" class="button" :class="variant">
    <slot></slot>
  </a>
</template>

<style scoped>
.button {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  padding: 12px 32px;
  border-radius: 32px;
  box-shadow: 0px 10px 10px -8px rgba(0, 0, 0, 0.22);
  font-size: 15px;
  font-weight: 300;
  transition: all 0.3s ease-in-out;
  border: 2px solid;

  @media (max-width: 950px) {
    font-size: 12px;
    padding: 10px 26px;
  }
}

/* Primary (Blue background, White Text) */
.button.primary {
  background-color: #04b4e0;
  color: #fff;
  border-color: #fff;
}
.button.primary:hover {
  color: #04b4e0;
  background-color: #fff;
}

/* Transparent (White background, Dark Text, Blue Border) */
.button.transparent {
  border-color: #04b4e0;
  background-color: transparent;
  color: #222;
}
.button.transparent:hover {
  background-color: #04b4e0;
  color: #fff;
}

/* Gray (Gray Border) */
.button.gray {
  border-color: #d5d5d5;
  color: #666;
  background-color: transparent;
}
.button.gray:hover {
  border-color: #d5d5d5;
  background-color: #d5d5d5;
  color: #222;
}
</style>
