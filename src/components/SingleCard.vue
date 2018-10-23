<template>
  <swiper-slide>
    <v-card :class="b()">
      <a :class="b('link-wrapper')"
         :href="getSingleVoteLink(vote.id)"
         target="_blank">

        <div :class="b('image', 'v-responsive v-image image flex')">
          <div :class="b('image--image', 'v-image__image')"
               :style="getImageStyle(vote.thumbnail.url)"/>

          <span :class="b('image--expire')">
            <v-icon small
                    dark>
              event
            </v-icon>
            {{ humanizeExpire(vote) }}
          </span>

          <div :class="b('image--filter')"/>
        </div>

        <v-card-title>
          <h3 :class="b('card-title', 'mb-0')">
            {{ vote.title }}
          </h3>

          <content v-if="vote.teaser"
                   :class="b('card-teaser')">
            {{ vote.teaser }}
          </content>
        </v-card-title>

      </a>
    </v-card>
  </swiper-slide>
</template>

<script>
  import moment from 'moment'
  import { getSingleVotePage } from '@/utils/api'
  import { swiperSlide } from 'vue-awesome-swiper'

  moment.locale('ru')

  export default {
    name: 'single-card',

    components: { swiperSlide },

    props: {
      vote: {
        type: Object,
        required: true
      }
    },

    methods: {
      humanizeExpire (vote) {
        const format = 'DD MMMM'
        const from = moment(vote.date).format(format)
        const to = moment(vote.expire).format(format)

        return `С ${from} по ${to}`
      },

      getImageStyle (url) {
        return `background-image: url("${url}")`
      },

      getSingleVoteLink (pageId) {
        return getSingleVotePage(pageId)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .single-card
    min-height 100%
    box-shadow: 0 2px 12px -4px rgba(56,54,68,.8);
    transition: all .25s ease-in-out;
    border-radius 6px
    overflow hidden

    &:hover
      box-shadow 0 8px 36px -16px #383644
      transform translateY(-2px)

    &__link-wrapper
      color currentColor !important
      text-decoration none
      display block
      height 100%

    &__image
      height 168px
      padding 0 !important

      &--image
        background-position center center
        background-size cover

      &--expire
        font-size 12px
        line-height 16px
        display inline-block
        padding 12px
        color #fff
        z-index 10

      &--filter
        display block
        position absolute
        left 0
        rigth 0
        top 0
        width 100%
        height 50%
        background -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .4)), color-stop(43%, rgba(0, 0, 0, .2)), color-stop(62%, hsla(0, 0%, 48%, 0)))
        background linear-gradient(180deg, rgba(0, 0, 0, .4) 0, rgba(0, 0, 0, .2) 43%, hsla(0, 0%, 48%, 0) 62%)
        z-index 1

    &__card-title
      font-size 18px
      line-height 24px

    &__card-teaser
      line-height 24px
      font-size 13px
      margin-top 12px

  @media only screen and (max-width: 960px)
    .single-card
      &__card-title
        font-size 12px
        line-height 16px

      &__card-teaser
        line-height 16px
        font-size 11px
</style>
