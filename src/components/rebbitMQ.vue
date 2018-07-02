<template>
  <div class="rebbitMQ">
    <h2>rebbitMQ</h2>
    <p>this message form data:</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'rebbitMQ',
  data () {
    return {
      message: 'welcome to here! Friend'
    }
  }
}
</script>

<style scoped>
  h2 {
    color: #927;
  }
</style>