<template>
  <div>
    <!-- Hero Section -->
    <section v-motion-fade class="hero">
      <div class="hero-content">
        <h1>Welcome to <span class="highlight">Assistive Learning</span></h1>
        <p>Making learning accessible and interactive for everyone.</p>
        <router-link to="/lessons" class="btn">Get Started</router-link>
      </div>
      <img src="@/assets/learning.svg" alt="Learning Illustration" class="hero-img">
    </section>

    <!-- Features Section -->
    <section class="features" v-motion-slide-visible-bottom>
      <h2>Why Choose Us?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <img src="@/assets/icons/1.svg" alt="Interactive Learning">
          <h3>Interactive Learning</h3>
          <p>Engage with AI-powered lessons designed for all learners.</p>
        </div>
        <div class="feature-card">
          <img src="@/assets/icons/2.svg" alt="Accessible">
          <h3>Accessibility for All</h3>
          <p>Designed with inclusivity in mind for visually and hearing-impaired learners.</p>
        </div>
        <div class="feature-card">
          <img src="@/assets/icons/3.svg" alt="Adaptive Learning">
          <h3>Adaptive Teaching</h3>
          <p>Our AI adjusts the difficulty based on your progress.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials" v-motion-slide-visible-left>
      <h2>What Our Users Say</h2>
      <div class="testimonial-slider">
        <div class="testimonial">
          <p>"This platform has completely transformed the way I learn. The interactive lessons are a game-changer!"</p>
          <h4>- Alex M.</h4>
        </div>
        <div class="testimonial">
          <p>"As a hearing-impaired student, I finally have an education tool that truly supports me. Thank you!"</p>
          <h4>- Sarah K.</h4>
        </div>
        <div class="testimonial">
          <p>"The AI-assisted learning has made complex topics so easy to understand!"</p>
          <h4>- James O.</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useMotion } from '@vueuse/motion';

export default {
  setup() {
    useMotion();
  }
};
</script>

