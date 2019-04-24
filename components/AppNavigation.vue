<template>
  <nav class="navigation my-colors-light fixed-top shadow">
    <b-nav v-b-scrollspy class="container justify-content-center">
      <b-nav-item
        v-scroll-to="'#world-map'"
        href="#world-map"
        class="navigation-link"
        title="Map"
      >
        <font-awesome-icon icon="map" />
        <p class="navigation-link-label d-inline ml-2">Map</p>
      </b-nav-item>
      <b-nav-item
        v-if="travelLinks.next"
        v-scroll-to="travelLinks.next"
        class="navigation-link"
        title="Next"
        :href="travelLinks.next"
      >
        <font-awesome-icon icon="bookmark" />
        <p class="navigation-link-label d-inline ml-2">Next</p>
      </b-nav-item>
      <b-nav-item
        v-if="travelLinks.current"
        v-scroll-to="travelLinks.current"
        class="navigation-link"
        title="Current"
        :href="travelLinks.current"
      >
        <font-awesome-icon icon="map-marker" />
        <p class="navigation-link-label d-inline ml-2">Current</p>
      </b-nav-item>
      <b-nav-item
        v-if="travelLinks.visited"
        v-scroll-to="travelLinks.visited"
        class="navigation-link"
        title="Visited"
        :href="travelLinks.visited"
      >
        <font-awesome-icon icon="check-circle" />
        <p class="navigation-link-label d-inline ml-2">Visited</p>
      </b-nav-item>
      <b-nav-item
        v-if="travelLinks.home"
        v-scroll-to="travelLinks.home"
        class="navigation-link"
        title="Home"
        :href="travelLinks.home"
      >
        <font-awesome-icon icon="home" />
        <p class="navigation-link-label d-inline ml-2">Home</p>
      </b-nav-item>
    </b-nav>
  </nav>
</template>

<script>
export default {
  props: {
    travelLinks: {
      type: Object,
      required: true
    }
  }
}
</script>
