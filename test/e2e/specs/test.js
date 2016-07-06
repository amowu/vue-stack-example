// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  '專案需要一個 Hero List Page 頁面（網址：/heroes）': function (browser) {
    browser
      .url('http://localhost:8080/heroes')
      .waitForElementVisible('#app', 3000)
  },
  'Hero List Page 有一個 Hero List 在頁面上水平置中': function (browser) {
    browser
      .assert.elementCount('.ui.basic.segment', 1)
      .assert.elementPresent('.ui.basic.segment')
      .assert.cssProperty('.ui.cards', 'justify-content', 'center')
  },
  'Hero List 上的元素我們稱為 Hero Card，在 Hero List 中由左到右排列': function (browser) {
    browser
      .waitForElementVisible('.ui.card', 3000)
      .assert.elementCount('.ui.card', 4)
      // TODO: assert 由左到右排列
  },
  // TODO: '如果在小尺寸螢幕上列表中的元素超出畫面就自動往下排列': function (browser) {},
  'Hero Card 必須包含圖片和名字，且是可以點擊的連結': function (browser) {
    browser
      .assert.elementPresent('a.ui.card')
      .assert.elementPresent('.ui.card .image img')
      .assert.elementPresent('.ui.card .content')
  },
  'Hero Card 連結會連到單一的 Hero Profile Page，Hero List 依然在相同位置，並且不因切換連結重新 render': function (browser) {
    browser
      .click('a.ui.card:first-child')
      .assert.urlEquals('http://localhost:8080/heroes/1')
  },
  'Hero Profile Page 中，在 Hero List 底下會有一個 Hero Profile': function (browser) {
    browser
      .waitForElementVisible('#hero-profile', 3000)
      .waitForElementVisible('#hero-profile .ui.action.input', 3000)
  },
  '當在 Hero Profile Page 時要將現在所選中的 Hero Card 用不同的顏色或圖案標示出來': function (browser) {
    browser
      .assert.cssClassPresent('a.ui.card:first-child', 'red')
  },
  'Hero Profile 會顯示 Hero 的能力值': function (browser) {
    browser
      .assert.elementCount('.ui.action.input', 4)
  },
  '並且在數值左右各有一個按鈕，負責做增減功能': function (browser) {
    browser
      .assert.elementCount('.ui.action.input button[name=dec-btn]', 4)
      .assert.elementCount('.ui.action.input button[name=inc-btn]', 4)
  },
  '另外有一個顯示剩餘的能力點數的地方，一開始預設值是 0': function (browser) {
    browser
      .assert.elementCount('.ui.statistic', 1)
      .assert.containsText('.ui.statistic .value', '0')
  },
  'Hero Profile 最下方有一個儲存按鈕': function (browser) {
    browser
      .assert.elementCount('.ui.green.massive.button', 1)
  },
  // TODO: '按下按鈕後，會將現在設定的能力值提交更新 server 上的資料': function (browser) {},
  after: function (browser) {
    browser
      .end()
  }
}
