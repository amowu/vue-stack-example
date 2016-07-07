# Front-end Developer Recruit

這是一個小型的前端工程師徵才專案，依照某家公司所提供的需求資料，使用 Vue.js 來完成的 SPA（單頁面應用程式）

## Specifics

- 整個專案會需要兩個頁面：
	- Hero List Page（網址：/heroes）
	- Hero Profile Page（網址：/heroes/:heroId）
- Hero List Page、Hero Profile Page 都有一個 Hero List 在頁面上水平置中

```
GET /heroes

[
  {
    "id": "1",
    "name": "Daredevil",
    "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
  },
  ...
]
```

- Hero Card 在 Hero List 中由左到右排列，如果在小尺寸螢幕上列表中的元素超出畫面就自動往下排列
- Hero Card 必須包含圖片和名字，且是可以點擊的連結
- Hero Card 連結會連到單一 Hero 的 Hero Profile Page，Hero List 依然在相同位置，並且不因切換連結重新 render

```
GET /heroes/1/profile

{
  "str": 2,
  "int": 7,
  "agi": 9,
  "luk": 7
}
```

- 當在 Hero Profile Page 時要將現在所選中的 Hero Card 用不同的顏色或圖案標示出來
- Hero Profile Page 中，在 Hero List 底下會有一個 Hero Profile
- Hero Profile 會顯示 Hero 的能力值，並且在數值左右各有一個按鈕，負責做增減功能，另外有一個顯示剩餘的能力點數的地方，一開始預設值是 0
- Hero Profile 最下方有一個儲存按鈕，按下按鈕後，會將現在設定的能力值提交更新 server 上的資料，送出的能力值總和必須與拿到的時候相同

```
PATCH /heroes/1/profile -d '{ "str": 6, "int": 7, "agi": 7, "luk": 5 }'

OK
```

- Hero 能力值不能小於零

## Installation

### Prerequisites

[Node.js](https://nodejs.org) - 建議版本 v3.4.2 以上。

### Setup

Development:

``` bash
# install dependencies
$ npm install

# serve with hot reload at http://localhost:8080
$ npm run dev
```

Mocking Back-end [JSON Server](https://github.com/typicode/json-server):

``` bash
# install json-server binary with global
$ npm install -f json-server

# move to ./json-server folder
$ json-server --watch db.json --routes routes.json
```

Testing:

```bash
# run unit tests
$ npm run unit

# run e2e tests
$ npm run e2e

# run all tests
$ npm test

```

Build Production:

``` bash
# build for production with minification in the dist folder
$ npm run build
```

## Architecture

![](http://i.imgur.com/rPKUnK2.png)

- 使用 [Vue.js](https://github.com/vuejs/vue) 作為 component-based library
- 使用 [Vuex](https://github.com/vuejs/vuex) 實現 [Flux Application Architecture](https://facebook.github.io/flux/)（類似於 React 生態圈的 Redux）
- 根據 [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.9xptvs9g7) 的概念，將 Vue components 分類為 **路由頁面** 元件與 **可複用** 元件
- 使用 [vue-router](https://github.com/vuejs/vue-router) 處理前端頁面與 UI 對應的網址路由規則
- 使用 [vue-resource](https://github.com/vuejs/vue-resource) 封裝的 XMLHttpRequest 來處理 back-end RESTful APIs
- 使用 [Webpack](https://webpack.github.io/) 搭配 [Babel](https://babeljs.io/)，編譯 ES6（ES2015）原始碼
- 使用 [ESLint](http://eslint.org/) 規範程式碼風格
- 使用 [Semantic UI](http://semantic-ui.com/) 與 [animate.css](https://github.com/daneden/animate.css) CSS library

### Directory Structure

只列出主要的檔案與資料夾：

```
├── config ------------------------ 建置工具使用的配置設定擋，例如：環境變數
├── dist -------------------------- build production 產生的檔案，可直接丟到 static website hosting 運行
├── json-server ------------------- 模擬 back-end 的簡易 REST API，需使用 json-server 運行
├── scripts ----------------------- 建置工具的腳本程式，例如：Webpack
├── src
│   ├── assets -------------------- 原始碼會使用到的素材資源擋，例如：icon font
│   ├── components
│   │   ├── HeroCard.vue ---------- 顯示英雄的圖片、名字等資訊的卡片元件，可複用
│   │   ├── NumericalInput.vue ---- 提供增減按鈕的數字元件，可複用
│   │   └── StatisticButton.vue --- 顯示一筆統計數字、以及可操作的按鈕，可複用
│   ├── cores
│   │   ├── config.js ------------- 原始碼使用的配置設定擋，例如：dev 與 prod 的 backend API URL
│   │   ├── resource.js ----------- vue-resource 的相關配置，負責處理與後端的 HTTP 通訊
│   │   └── router.js ------------- vue-router 的相關配置，負責前端頁面的路由規則
│   ├── pages
│   │   ├── HeroListPage.vue ------ Hero List Page，網址：/heroes
│   │   └── HeroProfilePage.vue --- Hero Profile Page，網址：/heroes/:heroId
│   ├── semantic-ui --------------- Semantic UI framework 的相關配置
│   ├── services
│   │   └── heroes.js ------------- 負責處理與 hero module 相關的 vue-resource
│   ├── vuex
│   │   ├── actions
│   │   │   └── heroes.js --------- 負責處理與 hero module 相關的 vuex actions
│   │   ├── mutations
│   │   │   └── heroes.js --------- 負責 hero module 相關的 state，與處理相對應的 mutate functions
│   │   ├── store.js -------------- 所有 module 的 state 都會被統一保存在這裡
│   │   └── types.js -------------- 定義所有 actions 使用的 type 列舉值
│   ├── App.vue ------------------- 根元件，並在這裡引入全域的 Semantic UI CSS
│   └── main.js ------------------- 主程式入口
├── static ------------------------ 非原始碼使用的素材資源擋，例如：favicon，build 的時候會直接被複製到 dist
├── test
│   ├── e2e ----------------------- End-to-end 測試
│   └── unit ---------------------- 單元測試
├── index.html -------------------- 單頁面應用的 HTML 首頁
└── package.json ------------------ Node.js 的配置擋
```
