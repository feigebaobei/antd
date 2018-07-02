<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <v-button>次按钮</v-button> -->
    <a-button>次按钮</a-button>
    <a-icon type="link"/>
    <!-- <router-view/> -->
    <nav class="nav">
      <router-link to="/rebbitMQ">RebbitMQ</router-link>
      <router-link to="/KafkaTopic">Kafka-topic</router-link>
    </nav>
    <div class="content">
      <router-view/>
    </div>
    <footer>
      <h1>footer footer footer</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
