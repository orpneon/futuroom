<template>
  <header :class="b()">
    <h1>{{ localeStrings.title }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'page-header',

    data () {
      return {
        localeStrings: {
          title: 'Завершенные голосования'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .page-header
    background-color #f7f6f8
    justify-content center
    align-items center

    h1
      font-size 28px
      font-weight 700
      text-align center
</style>
