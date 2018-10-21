<template>
  <div :class="b()">
    <page-header :class="b('header')"/>
    <main :class="b('wrapper')">
      <vote-cards/>
    </main>
  </div>
</template>

<script>
  import { request } from '@/utils/api'
  import { mapActions } from 'vuex'
  import VoteCards from '@/components/VoteCards'
  import PageHeader from '@/components/PageHeader'

  export default {
    name: 'main-content',
    components: {
      VoteCards,
      PageHeader
    },

    created () {
      this.loadVotes()
    },

    methods: {
      ...mapActions('votes', ['loadVotes'])
    }
  }
</script>

<style lang="stylus" scoped>
  .main-content
    width 100%
    height 100%
    display flex
    flex-direction column

    &__wrapper, &__header
      width 100%
      display flex

    &__header
      height 100px
      flex-shrink 0

    &__wrapper
      flex 1
</style>
