import { createLocalVue, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import TheFooter from '@/components/TheFooter.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('TheFooter', () => {
  const wrapper = mount(TheFooter, {
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
