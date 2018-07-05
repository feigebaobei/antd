<template>
  <div class="vhostDetail">
    <h2>vhostDetail</h2>
    <p>this message form data:</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'vhostDetail',
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
