// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  '專案需要一個 Hero List Page 頁面（網址：/heroes）': function (browser) {
    browser
      .url('http://localhost:8080/heroes')
      .waitForElementVisible('#app', 5000)
  },
  'Hero List Page 有一個 Hero List 在頁面上水平置中': function (browser) {
    browser
      .assert.elementCount('.hero-list', 1)
      .assert.elementPresent('.hero-list')
      // TODO: assert 水平置中
  },
  'Hero List 上的元素我們稱為 Hero Card，在 Hero List 中由左到右排列': function (browser) {
    browser
      .assert.elementCount('.hero-card', 4)
      // TODO: assert 由左到右排列
  },
  '如果在小尺寸螢幕上列表中的元素超出畫面就自動往下排列': function (browser) {},
  'Hero Card 必須包含圖片和名字，且是可以點擊的連結': function (browser) {
    browser
      .assert.elementPresent('.hero-card:first-child img')
      .assert.containsText('.hero-card:first-child span', 'Daredevil')
      .assert.elementPresent('.hero-card:first-child a')
  },
  'Hero Card 連結會連到單一的 Hero Profile Page，Hero List 依然在相同位置，並且不因切換連結重新 render': function (browser) {
    browser
      .click('.hero-card:first-child a')
      .assert.urlEquals('http://localhost:8080/heroes/1')
  },
  '當在 Hero Profile Page 時要將現在所選中的 Hero Card 用不同的顏色或圖案標示出來': function (browser) {},
  'Hero Profile Page 中，在 Hero List 底下會有一個 Hero Profile': function (browser) {},
  'Hero Profile 會顯示 Hero 的能力值': function (browser) {
    browser
      .assert.elementCount('.hero-attrs', 4)
      .assert.containsText('.hero-attrs:nth-child(1)', 'STR')
      .assert.containsText('.hero-attrs:nth-child(2)', 'INT')
      .assert.containsText('.hero-attrs:nth-child(3)', 'AGI')
      .assert.containsText('.hero-attrs:nth-child(4)', 'LUK')
      .assert.value('.hero-attrs:nth-child(1) input', '2')
      .assert.value('.hero-attrs:nth-child(2) input', '7')
      .assert.value('.hero-attrs:nth-child(3) input', '9')
      .assert.value('.hero-attrs:nth-child(4) input', '7')
  },
  '並且在數值左右各有一個按鈕，負責做增減功能': function (browser) {
    browser
      .assert.elementCount('.hero-attrs button[name=dec-btn]', 4)
      .assert.elementCount('.hero-attrs button[name=inc-btn]', 4)
  },
  '另外有一個顯示剩餘的能力點數的地方，一開始預設值是 0': function (browser) {
    browser
      .assert.elementCount('output[name=hero-remaining-points]', 1)
      .assert.value('output[name=hero-remaining-points]', '0')
  },
  'Hero Profile 最下方有一個儲存按鈕': function (browser) {
    browser
      .assert.elementCount('button[name=hero-attrs-updated-btn]', 1)
  },
  '按下按鈕後，會將現在設定的能力值提交更新 server 上的資料': function (browser) {},
  after: function (browser) {
    browser
      .end()
  }
}
