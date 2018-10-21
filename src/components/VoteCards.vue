<template>
  <div :class="b()">
    <carousel :scrollPerPage="true"
              :perPageCustom="[[480, 2], [768, 3]]">' + buildSlideMarkup(9) + '
    </carousel>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Carousel } from 'vue-carousel'

  export default {
    name: 'carousel',
    components: {
      Carousel
    },

    data () {
      return {
        localeStrings: {}
      }
    },

    computed: {
      ...mapGetters('votes', ['votes']),

      loading () {
        return this.votes.length > 0
      }
    }
  }
</script>

<style lang="stylus"
       scoped>
  .carousel
    align-items center
    background-color #f7f6f8
    color #383644
</style>
