<template>
  <section v-motion-fade class="hero">
    <div class="hero-content">
      <h1>Welcome to <span class="highlight">Assistive Learning</span></h1>
      <p>Making learning accessible and interactive for everyone.</p>
      <router-link to="/lessons" class="btn">Get Started</router-link>
    </div>
    <img src="@/assets/learning.svg" alt="Learning Illustration" class="hero-img">
  </section>
</template>

<script>
import { useMotion } from '@vueuse/motion';

export default {
  setup() {
    useMotion();
  }
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
  padding: 20px;
  background: var(--primary-color);
  color: white;
  position: relative;
}

.hero-content {
  max-width: 600px;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 600;
}

.highlight {
  color: yellow;
}

.hero-img {
  max-width: 400px;
  animation: float 3s ease-in-out infinite;
}

/* Smooth floating animation */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
</style>
