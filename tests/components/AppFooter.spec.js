import { createLocalVue, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import AppFooter from '@/components/AppFooter.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('AppFooter', () => {
  const wrapper = mount(AppFooter, {
    localVue,
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
