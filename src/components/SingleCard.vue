<template>
  <v-card :class="b()">
    <v-img :src="vote.thumbnail.url"
           :contain="true"
           :class="('image')"
    >
      <span :class="b('expire--filter')"/>
      <span :class="b('expire')">
              <v-icon small
                      dark
              >
                event
              </v-icon>
              {{ humanizeExpire(vote) }}
            </span>
    </v-img>

    <v-card-title>
      <h3 :class="b('card-title', 'mb-0')">
        {{ vote.title }}
      </h3>
    </v-card-title>

  </v-card>
</template>

<script>
  import moment from 'moment'
  moment.locale('ru')

  export default {
    name: 'single-card',

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
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .single-card
    min-height 100%

    &__expire
      font-size 12px
      line-height 16px
      display inline-block
      padding 10px 0 0 10px
      color #fff
      z-index 10

      &--filter
        display block
        position absolute
        width 100%
        height 50%
        background -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .4)), color-stop(43%, rgba(0, 0, 0, .2)), color-stop(62%, hsla(0, 0%, 48%, 0)))
        background linear-gradient(180deg, rgba(0, 0, 0, .4) 0, rgba(0, 0, 0, .2) 43%, hsla(0, 0%, 48%, 0) 62%)
        z-index 1

    &__card-title
      font-size 18px
      line-height 24px

  @media only screen and (max-width: 960px)
    .single-card__card-title
      font-size 12px
      line-height 16px
</style>
