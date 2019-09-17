import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import ScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import TheNavigation from '@/components/TheNavigation.vue'

Vue.use(ScrollTo)

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('TheNavigation', () => {
  const wrapper = mount(TheNavigation, {
    localVue,
    propsData: {
      travelLinks: {
        home: '#timeline-item-0',
        visited: '#timeline-item-1',
        current: '#timeline-item-2',
        next: '#timeline-item-3'
      }
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
})
