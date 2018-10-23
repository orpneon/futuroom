<template>
  <v-container grid-list-lg
               :class="b()"
               pt-0
               pb-3
               my-0
  >
    <v-layout v-if="loading"
              :class="b('layout')"
              justify-center
              fill-height
              align-center
    >
      <v-progress-circular indeterminate
                           color="primary"
                           :width="2"
                           size="32"
      />
    </v-layout>
    <v-layout v-else
              :class="b('layout')"
    >
      <swiper :options="swiperOption">
          <single-card v-for="(vote, i) in votes"
                       :class="b('card')"
                       :key="i"
                       sm10
                       md4
                       :vote="vote"
          />
      </swiper>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import 'swiper/dist/css/swiper.css'
  import SingleCard from '@/components/SingleCard'
  import { swiper } from 'vue-awesome-swiper'

  export default {
    name: 'vote-cards',

    components: {
      SingleCard,
      swiper
    },

    data () {
      return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerGroup: 3
        }
      }
    },

    computed: {
      ...mapGetters('votes', ['votes']),

      loading () {
        return this.votes.length === 0
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .vote-cards
    background-color #f7f6f8
    color #383644

    &__layout
      flex-direction row

    &__card
      padding 12px !important
      box-sizing border-box

  @media only screen and (max-width: 960px)
    .vote-cards
      &__layout
        flex-direction column
        -webkit-box-align center
        -ms-flex-align center
        align-items center

      &__card
        max-width 400px !important
        overflow hidden
        flex 1 1 auto !important

</style>
