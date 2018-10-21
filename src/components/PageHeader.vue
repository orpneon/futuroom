<template>
  <header :class="classes">
    <h1>{{ localeStrings.title }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'header',

    props: {
      class: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        localeStrings: {
          title: 'Завершенные голосования'
        }
      }
    },

    computed: {
      classes () {
        console.log('check')
        return this.$props.class
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    color #fff
    background-color #38ad6d
    justify-content center
    align-items center

    h1
      font-size 30px
      font-weight 700
</style>
