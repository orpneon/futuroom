<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
  *
    background-repeat no-repeat
    margin 0
    padding 0

  body, html
    height 100%
    overflow hidden !important

  #app
    font-family Roboto, Tahoma, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    height 100%
    overflow-x hidden
    overflow-y auto
    color #2c3e50
    background-color #f7f6f8
</style>
