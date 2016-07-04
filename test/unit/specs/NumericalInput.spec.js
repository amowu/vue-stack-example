import Vue from 'vue'
import NumericalInput from 'src/components/NumericalInput'

const max = 1
const min = 0
const step = 1
const vm = new Vue({
  template: `
    <div>
      <numerical-input :max="${max}" :min="${min}" :step="${step}">
      </numerical-input>
    </div>`,
  components: { NumericalInput }
}).$mount()
const numInputText = vm.$el.querySelector('input[name="num-input-text"]')
const incBtn = vm.$el.querySelector('button[name="inc-btn"]')
const decBtn = vm.$el.querySelector('button[name="dec-btn"]')
describe('NumericalInput.vue', () => {
  it('應該 render 正確的 DOM 結果', () => {
    expect(numInputText).should.exist
    expect(incBtn).should.exist
    expect(decBtn).should.exist
  })
  it('如果 :value 無值，num-input-text 應該顯示 0', () => {
    expect(numInputText.value).to.equal('0')
  })
  it(`當 inc-btn 被 click，num-input-text 應該根據 :step +${step}`, done => {
    incBtn.click()
    vm.$nextTick(() => {
      expect(numInputText.value).to.equal(`${step.toString()}`)
      done()
    })
  })
  it(`num-input-text 的值不應該超過 :max ${max}`, done => {
    incBtn.click()
    vm.$nextTick(() => {
      expect(numInputText.value).to.equal(`${max.toString()}`)
      done()
    })
  })
  it(`當 dec-btn 被 click，num-input-text 應該根據 :step -${step}`, done => {
    decBtn.click()
    vm.$nextTick(() => {
      expect(numInputText.value).to.equal('0')
      done()
    })
  })
  it(`num-input-text 的值不應該低於 :min ${min}`, done => {
    decBtn.click()
    vm.$nextTick(() => {
      expect(numInputText.value).to.equal('0')
      done()
    })
  })
})
