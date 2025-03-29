<template>
  <div class="dashboard">
    <h2>📊 Global & African E-learning Trends</h2>
    
    <!-- Global Learning Trends -->
    <div class="chart-container">
      <h3>Global E-learning Growth</h3>
      <canvas ref="globalChart"></canvas>
    </div>

    <!-- African Learning Trends -->
    <div class="chart-container">
      <h3>E-learning in Africa</h3>
      <canvas ref="africaChart"></canvas>
    </div>
    <button v-if="user" @click="goToPersonalDashboard">📈 My Learning Progress</button>
<p v-else><router-link to="/login">Login</router-link> to see your progress</p>
  </div>
</template>

<script>
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  data() {
    return {
      globalData: [],
      africaData: [],
    };
  },
  mounted() {
    this.fetchGlobalTrends();
    this.fetchAfricaTrends();
  },
  methods: {
    async fetchGlobalTrends() {
      try {
        const response = await axios.get("https://api.worldbank.org/v2/country/WLD/indicator/SE.TER.ENRR?format=json");
        this.globalData = response.data[1].map(item => item.value);
        this.renderChart("globalChart", this.globalData, "Global E-learning Growth");
      } catch (error) {
        console.error("Error fetching global trends:", error);
      }
    },
    
    async fetchAfricaTrends() {
      try {
        const response = await axios.get("https://api.worldbank.org/v2/region/AFR/indicator/SE.TER.ENRR?format=json");
        this.africaData = response.data[1].map(item => item.value);
        this.renderChart("africaChart", this.africaData, "African E-learning Growth");
      } catch (error) {
        console.error("Error fetching Africa trends:", error);
      }
    },

    renderChart(chartRef, data, label) {
      const ctx = this.$refs[chartRef].getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: Array.from({ length: data.length }, (_, i) => 2000 + i), // Years
          datasets: [{
            label,
            data,
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            borderWidth: 2
          }]
        }
      });
    },

    goToPersonalDashboard() {
      this.$router.push("/personal-dashboard");
    }
  }
};
</script>

