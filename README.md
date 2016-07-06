# Hahow Recruit Front-end

這是一個小型的前端工程師徵才專案，依照 Hahow 所提供的 [需求資料](http://hahow-recruit.herokuapp.com/frontend) 來完成的 SPA（單頁面應用程式）。

## Specifics

- 整個專案會需要兩個頁面：
	- Hero List Page（網址：/heroes）
	- Hero Profile Page（網址：/heroes/:heroId）
- Hero List Page、Hero Profile Page 都有一個 Hero List 在頁面上水平置中
- Hero Card 在 Hero List 中由左到右排列，如果在小尺寸螢幕上列表中的元素超出畫面就自動往下排列
- Hero Card 必須包含圖片和名字，且是可以點擊的連結
- Hero Card 連結會連到單一 Hero 的 Hero Profile Page，Hero List 依然在相同位置，並且不因切換連結重新 render
- 當在 Hero Profile Page 時要將現在所選中的 Hero Card 用不同的顏色或圖案標示出來
- Hero Profile Page 中，在 Hero List 底下會有一個 Hero Profile
- Hero Profile 會顯示 Hero 的能力值，並且在數值左右各有一個按鈕，負責做增減功能，另外有一個顯示剩餘的能力點數的地方，一開始預設值是 0
- Hero Profile 最下方有一個儲存按鈕，按下按鈕後，會將現在設定的能力值提交更新 server 上的資料，送出的能力值總和必須與拿到的時候相同
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
- 根據 [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.9xptvs9g7) 的概念，將 Vue components 分類為 **路由頁面** 元件與 **可複用** 元件，降低耦合依賴關係
- 使用 [vue-router](https://github.com/vuejs/vue-router) 處理前端頁面與 UI 對應的網址路由規則
- 使用 [vue-resource](https://github.com/vuejs/vue-resource) 封裝的 XMLHttpRequest 來處理 back-end RESTful APIs
- 使用 [Webpack](https://webpack.github.io/) 搭配 [Babel](https://babeljs.io/)，編譯 ES6（ES2015）原始碼
- 使用 [ESLint](http://eslint.org/) 規範程式碼風格
- 使用 [Semantic UI](http://semantic-ui.com/) 作為 CSS framework，並且按需加載對應的 LESS，減少編譯後的檔案 size

### Directory Structure

只列出主要的檔案與資料夾：

```
├── config ------------------------ 建置工具使用的配置設定擋，例如：環境變數
├── dist -------------------------- build production 產生的檔案，可直接丟到 static website hosting 運行
├── scripts ----------------------- 建置工具的腳本程式，例如：Webpack
├── src
│   ├── assets -------------------- 原始碼會使用到的素材資源擋，例如：icon font
│   ├── components
│   │   ├── HeroCard.vue ---------- 顯示英雄的圖片、名字等資訊的卡片元件，可複用
│   │   ├── NumericalInput.vue ---- 提供增減按鈕的數字元件，可複用
│   │   └── StatisticButton.vue --- 顯示一筆統計數字、以及可操作的按鈕，可複用
│   ├── cores
│   │   ├── config.js ------------- 原始碼使用的配置設定擋，例如：dev 與 prod 的 backend API URL
│   │   ├── resources.js ---------- vue-resource 的相關配置，負責處理與後端的 HTTP 通訊
│   │   └── router.js ------------- vue-router 的相關配置，負責前端頁面的路由規則
│   ├── pages
│   │   ├── HeroListPage.vue ------ Hero List Page，網址：/heroes
│   │   └── HeroProfilePage.vue --- Hero Profile Page，網址：/heroes/:heroId
│   ├── semantic-ui --------------- Semantic UI framework 的相關配置
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

## FAQ

Ｑ：**你在程式碼中寫註解的原則，遇到什麼狀況會寫註解？**

Ａ：`// TODO: ...` 或 `// FIXME: ...`，還有較複雜的演算法、或是「這地方我過一陣子之後，自己還看得懂嗎？」、「假如我是第一次看這份程式碼的人，看得懂嗎？」，簡單的句子使用英文、複雜的解釋使用中文，可以自動化產生文件的地方也盡量使用註解（例如：[JSDoc](http://usejsdoc.org/)）。

Ｑ：**在這份專案中你遇到的困難、問題，以及解決的方法。**

Ａ：本來想直接使用 `input[type=number]` 來實作英雄數值增減的功能，但是它的瀏覽器支援度不太好，而且只有 webkit-based 的瀏覽器可以客製化 CSS，所以自己仿造 `input[type=number]` 提供的 API 寫了一支 `<numerical-input>` 元件，同樣可以設定 `step`、`max`、`min` 這些值。

## Troubleshoot

如果想要使用 dist 的程式碼在 production server 上運行，可能會遇到路由問題，這是因為 SPA 的網址通常都是：

```
http://domain.com/#!/heroes
```

為了好看一點，會開啟 HTML5 History API 的功能，讓網址可以顯示：

```
http://domain.com/heroes
```

但是這會與 server 的路由配置相衝突，詳細的解決方式我在自己的 blog [文章](http://blog.amowu.com/2016/06/s3-static-website-hosting-route-with-html5-history-pushstate.html) 有提到，可以參考看看。

另外也可以直接關掉 HTML5 History API 的功能，打開 `src/cores/router.js`，將 `history` 改為 `false` 即可：

```js
history: false
```

這個問題在 `npm run dev` 的環境底下不會發生。