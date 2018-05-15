import { shallow, createLocalVue } from 'vue-test-utils'
import Warehouses from '../../src/components/warehouses'
import Vuex from 'vuex'
import VuexSaga from 'vuex-saga'

describe('Warehouses', () => {
  let wrapper

  beforeEach(() => {
    const localVue = createLocalVue()

    localVue.use(Vuex)
    
    const state = {
      warehouses: [{id: 1, name: 'tom'}]
    }
    const actions = {
      fetchWarehouses: jest.fn(),
    }
    const store = new Vuex.Store({state, actions})

    localVue.use(VuexSaga, {store})

    wrapper = shallow(Warehouses, {store, localVue})
  })

  it('renders the correct markup', () => {
    expect(wrapper.find('.warehouse').html()).toContain("tom")
  })
})