<template>
  <v-container grid-list-lg
               :class="b()"
               py-0
               my-0>
    <v-layout row>
      <!--<carousel :class="b('carousel')"-->
      <!--:options="swiperOptions">-->
      <v-flex v-for="vote in votes"
              :class="b('slide')"
              :key="vote.id"
              xs4>
        <v-card :class="b('card')">
          <v-img :src="vote.thumbnail.url"
                 :class="('image')"
          />

          <v-card-title>
            <h3 :class="b('card-title', 'mb-0')">
              {{ vote.title }}
            </h3>
          </v-card-title>

        </v-card>
      </v-flex>
      <!--</carousel>-->
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Carousel from 'vue-owl-carousel'

  export default {
    name: 'vote-cards',
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
    },

    methods: {}
  }
</script>

<style lang="stylus">
  .vote-cards
    padding 30px 0
    background-color #f7f6f8
    color #383644

    &__carousel
      display flex
      flex-direction row
      overflow hidden

    &__slide, &__card
      min-height 100%


    &__card-title
      font-size 18px
      line-height 24px

</style>
