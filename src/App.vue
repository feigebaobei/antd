<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <v-button>次按钮</v-button> -->
    <!-- <a-button>次按钮</a-button> -->
    <!-- <a-icon type="link"/> -->
    <!-- <router-view/> -->
    <!-- <nav class="nav">
      <router-link to="/rebbitMQ">RebbitMQ</router-link>
      <router-link to="/KafkaTopic">Kafka-topic</router-link>
    </nav> -->
    <!-- <div class="content">
      <router-view/>
    </div> -->
    <!-- <footer>
      <h1>footer footer footer</h1>
    </footer> -->
    <layout></layout>
  </div>
</template>

<script>
import layout from './components/layoutvue.vue'
export default {
  name: 'App',
  components: {
    layout: layout
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
