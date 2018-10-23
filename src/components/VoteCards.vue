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
      <swiper :options="swiperOption"
              @touchEnd="showNextSlideGroup"
              ref="swiper"
      >
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
  import { mapGetters, mapActions } from 'vuex'
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
