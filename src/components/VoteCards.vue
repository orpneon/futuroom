<template>
  <v-container grid-list-lg
               fluid
               :class="b()"
               pt-0
               pb-3
               my-0>

    <v-layout v-if="loading"
              :class="b('layout')"
              justify-center
              fill-height
              align-center>
      <v-progress-circular indeterminate
                           color="primary"
                           :width="2"
                           size="32"/>
    </v-layout>

    <v-layout v-else
              :class="b('layout')">
      <swiper :options="swiperOption"
              @touchEnd="showNextSlideGroup"
              ref="swiper">
        <single-card v-for="(vote, i) in votes"
                     :class="b('card')"
                     :key="i"
                     :vote="vote"/>
      </swiper>
    </v-layout>

    <p :class="b('hint')">
      <v-icon color="blue lighten-3">info</v-icon>
      <span>
        {{ localeStrings.hint }}
      </span>
    </p>

    <v-layout v-if="newPageIsLoading"
              :class="b('mask')"
              justify-center
              fill-height
              align-center>
      <v-progress-circular indeterminate
                           color="white"
                           :width="3"
                           size="32"/>
    </v-layout>
  </v-container>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { mapGetters, mapActions } from 'vuex'
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
        localeStrings: {
          hint: 'Двигайте слайдер справа налево, чтобы увидеть больше завершенных голосований'
        },

        swiperOption: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          breakpoints: {
            // when window width is <= 960px
            960: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            // when window width is <= 600px
            600: {
              slidesPerView: 1,
              slidesPerGroup: 1
            }
          }
        },

        newPageIsLoading: false
      }
    },

    computed: {
      ...mapGetters('votes', ['votes', 'hasMorePages']),

      loading () {
        return this.votes.length === 0
      }
    },

    methods: {
      ...mapActions('votes', ['loadNextPage']),

      showNextSlideGroup () {
        const swiper = this.getSwiper()

        if (swiper.isEnd && this.hasMorePages && !this.newPageIsLoading) {
          this.newPageIsLoading = true
          this.loadNextPage().then(this.slideNext)
        }
      },

      slideNext () {
        const swiper = this.getSwiper()

        setTimeout(() => {
          this.newPageIsLoading = false
          swiper.slideNext()
        }, 1000)
      },

      getSwiper () {
        return this.$refs.swiper.swiper
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
      margin -8px !important

      .swiper-container
        width 100%

    &__card
      padding 16px !important
      box-sizing border-box

    &__hint
      margin-top 20px
      line-height 24px
      padding-left 4px

      .v-icon
        margin 0 4px -2px 0

    &__mask
      background-color rgba(0, 0, 0, 0.34)
      position absolute
      top 0
      bottom 0
      right 0
      left 0
      z-index 10000

</style>
