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
      <v-flex v-for="vote in votes"
              :class="b('card')"
              :key="vote.id"
              sm10
              md4
      >
        <single-card :vote="vote"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SingleCard from '@/components/SingleCard'

  export default {
    name: 'vote-cards',
    components: { SingleCard },
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
