import Vue from 'vue'
import HeroCard from 'src/components/HeroCard'

const vm = new Vue({
  template: `
    <div>
      <hero-card>
      </hero-card>
    </div>`,
  components: { HeroCard }
}).$mount()
const card = vm.$el.querySelector('a.ui.card')
const image = vm.$el.querySelector('.ui.card .image img')
const name = vm.$el.querySelector('.ui.card .content .header')
describe('HeroCard.vue', () => {
  it('應該 render 正確的 DOM 結果', () => {
    expect(card).should.exist
    expect(image).should.exist
    expect(name).should.exist
  })
})
