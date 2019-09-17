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
    /**
     * Get reversed travels.
     * @return {Array} The reversed travels.
     */
    reversedTravels() {
      return _.reverse(this.travels)
    }
  },
  methods: {
    /**
     * Get the orientation (left of right) of the travel on the timeline based on its index.
     * @param {Number} index The index of the travel.
     * @return {String} The orientation (left or right)
     */
    getOrientation(index) {
      return index % 2 === 0 ? 'left' : 'right'
    }
  }
}
</script>
