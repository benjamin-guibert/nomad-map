<template>
  <div class="timeline pt-4">
    <div class="timeline-content container position-relative">
      <timeline-item
        v-for="(travel, index) in reversedTravels"
        :key="index"
        :travel="travel"
        :orientation="getOrientation(index)"
      />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

import TimelineItem from './TimelineItem.vue'

export default {
  components: {
    TimelineItem
  },
  props: {
    travels: {
      type: Array,
      required: true
    }
  },
  computed: {
    reversedTravels() {
      return _.reverse(this.travels)
    }
  },
  methods: {
    getOrientation(index) {
      return index % 2 === 0 ? 'left' : 'right'
    }
  }
}
</script>
