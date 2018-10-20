<template>
  <div :class="b()">
    <header>
      {{ localeStrings.title }}
    </header>
  </div>
</template>

<script>
  import { request } from '@/utils/api'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'main-content',

    data () {
      return {
        localeStrings: {
          title: 'Завершенные голосования'
        }
      }
    },

    computed: {
      ...mapGetters('votes', ['pagination'])
    },

    created () {
      this.loadVotes()
    },

    methods: {
      ...mapActions('votes', ['loadVotes'])
    }
  }
</script>
