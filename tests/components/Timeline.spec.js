import { createLocalVue, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Timeline from '@/components/Timeline.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Timeline', () => {
  const wrapper = mount(Timeline, {
    localVue,
    propsData: {
      travels: [
        {
          dates: {
            from: new Date(2099, 0, 2)
          },
          country: { id: 'GR', name: 'Greece' },
          city: { name: 'Athens', latitude: 37.966667, longitude: 23.716667 },
          id: 6,
          status: {
            id: 'next',
            label: 'Next destination',
            mapLabel: '(next destination)',
            icon: 'bookmark'
          }
        },
        {
          dates: {
            from: new Date(2099, 0, 1),
            to: new Date(2099, 0, 1)
          },
          country: { id: 'FR', name: 'France' },
          city: { name: 'Paris', latitude: 48.856614, longitude: 2.352222 },
          id: 5,
          status: {
            id: 'next',
            label: 'Next destination',
            mapLabel: '(next destination)',
            icon: 'bookmark'
          }
        },
        {
          dates: {
            from: new Date(2019, 0, 2),
            to: new Date(2098, 11, 31)
          },
          country: { id: 'IS', name: 'Iceland' },
          city: {
            name: 'Reykjavík',
            latitude: 64.126518,
            longitude: -21.817438
          },
          id: 4,
          status: {
            id: 'current',
            label: 'Current destination',
            mapLabel: '(current destination)',
            icon: 'map-marker'
          }
        },
        {
          dates: {
            from: new Date(2019, 0, 1),
            to: new Date(2019, 0, 1)
          },
          country: { id: 'FR', name: 'France' },
          city: { name: 'Paris', latitude: 48.856614, longitude: 2.352222 },
          id: 3,
          status: {
            id: 'visited',
            label: 'Visited',
            mapLabel: '(visited)',
            icon: 'check-circle'
          }
        },
        {
          dates: {
            from: new Date(2018, 6, 1),
            to: new Date(2018, 11, 31)
          },
          country: { id: 'HR', name: 'Croatia' },
          city: { name: 'Zagreb', latitude: 45.815, longitude: 15.9819 },
          id: 2,
          status: {
            id: 'visited',
            label: 'Visited',
            mapLabel: '(visited)',
            icon: 'check-circle'
          }
        },
        {
          dates: {
            from: new Date(2018, 0, 1),
            to: new Date(2018, 5, 30)
          },
          country: { id: 'PL', name: 'Poland' },
          city: { name: 'Warsaw', latitude: 52.2297, longitude: 21.0122 },
          id: 1,
          status: {
            id: 'visited',
            label: 'Visited',
            mapLabel: '(visited)',
            icon: 'check-circle'
          }
        },
        {
          country: { id: 'FR', name: 'France' },
          city: { name: 'Paris', latitude: 48.856614, longitude: 2.352222 },
          id: 0,
          status: {
            id: 'home',
            label: 'Home',
            mapLabel: '(home)',
            icon: 'home'
          }
        }
      ]
    },
    stubs: {
      FontAwesomeIcon: true
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('get reversed travels', () => {
    expect(wrapper.vm.reversedTravels).toEqual([
      {
        country: { id: 'FR', name: 'France' },
        city: { name: 'Paris', latitude: 48.856614, longitude: 2.352222 },
        id: 0,
        status: {
          id: 'home',
          label: 'Home',
          mapLabel: '(home)',
          icon: 'home'
        }
      },
      {
        dates: {
          from: new Date(2018, 0, 1),
          to: new Date(2018, 5, 30)
        },
        country: { id: 'PL', name: 'Poland' },
        city: { name: 'Warsaw', latitude: 52.2297, longitude: 21.0122 },
        id: 1,
        status: {
          id: 'visited',
          label: 'Visited',
          mapLabel: '(visited)',
          icon: 'check-circle'
        }
      },
      {
        dates: {
          from: new Date(2018, 6, 1),
          to: new Date(2018, 11, 31)
        },
        country: { id: 'HR', name: 'Croatia' },
        city: { name: 'Zagreb', latitude: 45.815, longitude: 15.9819 },
        id: 2,
        status: {
          id: 'visited',
          label: 'Visited',
          mapLabel: '(visited)',
          icon: 'check-circle'
        }
      },
      {
        dates: {
          from: new Date(2019, 0, 1),
          to: new Date(2019, 0, 1)
        },
        country: { id: 'FR', name: 'France' },
        city: { name: 'Paris', latitude: 48.856614, longitude: 2.352222 },
        id: 3,
        status: {
          id: 'visited',
          label: 'Visited',
          mapLabel: '(visited)',
          icon: 'check-circle'
        }
      },
      {
        dates: {
          from: new Date(2019, 0, 2),
          to: new Date(2098, 11, 31)
        },
        country: { id: 'IS', name: 'Iceland' },
        city: {
          name: 'Reykjavík',
          latitude: 64.126518,
          longitude: -21.817438
        },
        id: 4,
        status: {
          id: 'current',
          label: 'Current destination',
          mapLabel: '(current destination)',
          icon: 'map-marker'
        }
      },
      {
        dates: {
          from: new Date(2099, 0, 1),
          to: new Date(2099, 0, 1)
        },
        country: { id: 'FR', name: 'France' },
        city: { name: 'Paris', latitude: 48.856614, longitude: 2.352222 },
        id: 5,
        status: {
          id: 'next',
          label: 'Next destination',
          mapLabel: '(next destination)',
          icon: 'bookmark'
        }
      },
      {
        dates: {
          from: new Date(2099, 0, 2)
        },
        country: { id: 'GR', name: 'Greece' },
        city: { name: 'Athens', latitude: 37.966667, longitude: 23.716667 },
        id: 6,
        status: {
          id: 'next',
          label: 'Next destination',
          mapLabel: '(next destination)',
          icon: 'bookmark'
        }
      }
    ])
  })
})
