<template>
  <div class="error">
    <h2>error</h2>
    <p>this error page</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      message: '没找到这个页面'
    }
  }
}
</script>

<style scoped>
  h2 {
    color: #927;
  }
</style>
