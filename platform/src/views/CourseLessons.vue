<template>
  <div class="courses-page">
    <h1>Explore Courses</h1>

    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search for a course..." />
    </div>

    <!-- Course Categories -->
    <div class="course-categories">
      <button v-for="category in categories" :key="category" @click="filterCategory(category)">
        {{ category }}
      </button>
    </div>

    <!-- Course Grid -->
    <div class="course-grid">
      <div v-for="course in filteredCourses" :key="course.id" class="course-card">
        <img :src="course.image" alt="Course Image" />
        <h2>{{ course.title }}</h2>
        <p>{{ course.description }}</p>

        <!-- View More Button -->
        <router-link :to="'/courses/' + course.id" class="btn">View More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// Importing images correctly
import learning from "@/assets/learning.svg"; // Directly in src/assets/
import learning1 from "@/assets/courses/learning1.svg"; // Inside src/assets/courses/
import learning2 from "@/assets/courses/learning2.svg";
import learning3 from "@/assets/courses/learning3.svg";

export default {
  data() {
    return {
      searchQuery: "",
      selectedCategory: "All",
      categories: ["All", "Science", "Technology", "Engineering", "Mathematics", "Cybersecurity", "Biotech", "Space Science", "Robotics"],
      courses: [
        { id: 1, title: "Introduction to AI", description: "Explore AI fundamentals.", category: "Technology", image: learning1 },
        { id: 2, title: "Physics for Beginners", description: "Fundamentals of physics explained simply.", category: "Science", image: learning2 },
        { id: 3, title: "Web Development", description: "Build modern web apps.", category: "Technology", image: learning3 },
        { id: 4, title: "Environmental Science", description: "Learn about climate change and sustainability.", category: "Science", image: learning },
        { id: 5, title: "Engineering Design", description: "Learn engineering principles.", category: "Engineering", image: learning2 },
        { id: 6, title: "Cybersecurity Fundamentals", description: "Understand security threats and defenses.", category: "Cybersecurity", image: learning3 },
        { id: 7, title: "Introduction to Robotics", description: "Build and program robots.", category: "Robotics", image: learning1 },
        { id: 8, title: "Space Science & Astronomy", description: "Explore the universe and space technology.", category: "Space Science", image: learning2 },
        { id: 9, title: "Data Science & Analytics", description: "Learn data analysis and machine learning.", category: "Mathematics", image: learning3 },
        { id: 10, title: "Biotechnology & Genetics", description: "Study bioengineering and genetic modification.", category: "Biotech", image: learning }
      ]
    };
  },
  computed: {
    filteredCourses() {
      let filtered = this.courses;

      // Filter by category
      if (this.selectedCategory !== "All") {
        filtered = filtered.filter(course => course.category === this.selectedCategory);
      }

      // Filter by search query
      if (this.searchQuery) {
        filtered = filtered.filter(course => course.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }

      return filtered;
    }
  },
  methods: {
    filterCategory(category) {
      this.selectedCategory = category;
    }
  }
};
</script>

