<template>
  <div>
    <b-alert :show="error" class="m-2 mt-4" variant="danger">{{
      error
    }}</b-alert>
    <template v-if="travels.length">
      <app-navigation :travel-links="travelLinks" />
      <world-map :travels="travels" />
      <timeline :travels="travels" />
    </template>
    <app-footer />
  </div>
</template>

<script>
import _ from 'lodash'

import TravelService from '~/services/TravelService'

import AppNavigation from '~/components/AppNavigation.vue'
import AppFooter from '~/components/AppFooter.vue'
import WorldMap from '~/components/WorldMap.vue'
import Timeline from '~/components/Timeline.vue'

export default {
  components: {
    AppNavigation,
    AppFooter,
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
        travelLinks[status] =
          '#timeline-item-' +
          _.maxBy(travels, travel => {
            return travel.id
          }).id
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
