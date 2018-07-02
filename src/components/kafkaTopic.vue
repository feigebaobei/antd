<template>
  <div class="kafkaTopic">
    <h2>kafkaTopic</h2>
    <p>this message form data:</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'kafkaTopic',
  data () {
    return {
      message: 'welcome to kafkaTopic! Friend'
    }
  }
}
</script>

<style scoped>
  h2 {
    color: #185;
  }
</style>
