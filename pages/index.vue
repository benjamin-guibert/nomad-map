<template>
  <div>
    <b-alert :show="error" class="m-2 mt-4" variant="danger">{{
      error
    }}</b-alert>
    <template v-if="travels.length">
      <the-navigation :travel-links="travelLinks" />
      <world-map :travels="travels" />
      <timeline :travels="travels" />
    </template>
    <the-footer />
  </div>
</template>

<script>
import _ from 'lodash'

import TravelService from '~/services/TravelService'

import TheNavigation from '~/components/TheNavigation.vue'
import TheFooter from '~/components/TheFooter.vue'
import WorldMap from '~/components/WorldMap.vue'
import Timeline from '~/components/Timeline.vue'

export default {
  components: {
    TheNavigation,
    TheFooter,
    WorldMap,
    Timeline
  },
  data() {
    return {
      error: null,
      travels: []
    }
  },
  computed: {
    travelLinks() {
      const groupedTravels = _.groupBy(this.travels, 'status.id')
      const travelLinks = {}
      _.forEach(groupedTravels, (travels, status) => {
        travelLinks[status] = '#timeline-item-' + _.maxBy(travels, 'id').id
      })
      return travelLinks
    }
  },
  async asyncData() {
    try {
      const travels = await TravelService.getTravels()
      return { travels }
    } catch {
      return { error: 'Error while reading data.' }
    }
  }
}
</script>
