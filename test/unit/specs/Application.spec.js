import Vue from 'vue'
import Application from '@/components/Application'

describe('Application.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Application)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Aplicação para Repositório de Github')
  })
})
