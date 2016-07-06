import Vue from 'vue'
import StatisticButton from 'src/components/StatisticButton'

const vm = new Vue({
  template: `
    <div>
      <statistic-button>
      </statistic-button>
    </div>`,
  components: { StatisticButton }
}).$mount()
const statistic = vm.$el.querySelector('.ui.statistic')
const statisticValue = vm.$el.querySelector('.ui.statistic .value')
const statisticLabel = vm.$el.querySelector('.ui.statistic .label')
const okButton = vm.$el.querySelector('button.ui.green.massive.button')
describe('HeroCard.vue', () => {
  it('應該 render 正確的 DOM 結果', () => {
    expect(statistic).should.exist
    expect(statisticValue).should.exist
    expect(statisticLabel).should.exist
    expect(okButton).should.exist
  })
})
