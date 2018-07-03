<template>
  <div class="constructer">
    <h2>constructer</h2>
    <p>this message form data:</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'constructer',
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
