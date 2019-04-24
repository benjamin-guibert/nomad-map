import _ from 'lodash'
import axios from 'axios'

const travelsFilePath = '/travels.json'
const apiClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const initializeTravels = travels => {
  if (travels == null) {
    return
  }
  _.forEach(travels, (travel, index) => {
    initializeTravel(travel, index)
  })
}
const initializeTravel = (travel, index) => {
  travel.id = index
  if (travel.dates) {
    travel.dates.from = new Date(travel.dates.from)

    if (travel.dates.to) {
      travel.dates.to = new Date(travel.dates.to)
    }
    const today = new Date()
    if (today > travel.dates.to) {
      travel.status = {
        id: 'visited',
        label: 'Visited',
        mapLabel: '(visited)',
        icon: 'check-circle'
      }
    } else if (
      today >= travel.dates.from &&
      (travel.dates.to == null || today <= travel.dates.to)
    ) {
      travel.status = {
        id: 'current',
        label: 'Current destination',
        mapLabel: '(current destination)',
        icon: 'map-marker'
      }
    } else if (today < travel.dates.from) {
      travel.status = {
        id: 'next',
        label: 'Next destination',
        mapLabel: '(next destination)',
        icon: 'bookmark'
      }
    } else {
      travel.status = {
        id: 'unvisited',
        label: 'Unvisited'
      }
    }
  } else {
    travel.status = {
      id: 'home',
      label: 'Home',
      mapLabel: '(home)',
      icon: 'home'
    }
  }
}

export default {
  async getTravels() {
    const response = await apiClient.get(travelsFilePath)
    const travels = response.data
    initializeTravels(travels)

    return travels
  }
}
