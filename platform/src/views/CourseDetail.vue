<template>
    <div class="course-details">
      <h1>{{ course.title }}</h1>
      <img :src="course.image" alt="Course Image" />
      <p>{{ course.description }}</p>
  
      <!-- Button for Voice AI -->
      <button @click="speakText(course.description)" class="btn">Listen</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["id"],
    data() {
      return {
        courses: [
          { id: 1, title: "Introduction to AI", description: "Explore AI fundamentals.", category: "Technology", image: require("@/assets/courses/learning.svg") },
          { id: 2, title: "Physics for Beginners", description: "Fundamentals of physics explained simply.", category: "Science", image: require("@/assets/courses/learning2.svg") },
          { id: 3, title: "Web Development", description: "Build modern web apps.", category: "Technology", image: require("@/assets/courses/learning3.svg") },
        ],
        course: {},
      };
    },
    created() {
      this.course = this.courses.find(c => c.id == this.id);
    },
    methods: {
      speakText(text) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 1;
        speechSynthesis.speak(speech);
      }
    }
  };
  </script>
  
  <style scoped>
  .course-details {
    padding: 40px;
    text-align: center;
  }
  
  .course-details img {
    width: 50%;
    border-radius: 10px;
    margin: 20px 0;
  }
  </style>
  